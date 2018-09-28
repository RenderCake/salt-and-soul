import React, { Fragment, Component } from 'react';
import { withSiteData, withRouteData } from 'react-static';
import styled from 'react-emotion';
//
import logoImg from '../logo.png';

const massageData = (components = []) => components.reduce((obj, curr) => {
  console.log(obj);
  const keys = Object.keys(curr);
  keys.forEach((key) => {
    if (curr[key] !== null) {
      obj = {
        ...obj,
        [curr.slug]: {
          ...curr[key],
        },
      };
    }
  });
  return obj;
}, {});

const Button = styled.div`
  border: 3px solid rgba(0, 0, 0, 0.84);
  padding: 1rem 2rem;
  width: 143px;
  position: relative;
  border-radius: 4px;
  margin: auto;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  &:before {
    content: ' ';
    border: 3px solid #a18ce8;
    position: absolute;
    border-radius: 4px;
    top: 8px;
    left: 8px;
    right: -12px;
    bottom: -12px;
  }
`;

const Card = styled.div`
  border: 5px solid black;
  border-radius: 8px;
  position: absolute;
  transform: translate(-50px, 0);
  max-width: 290px;
  filter: drop-shadow(rgba(0, 0, 0, 0.22) 0px 3px 6px);
  &:before {
    content: ' ';
    border-top: 5px solid #a18ce8;
    border-right: 5px solid #a18ce8;
    width: 50px;
    height: 50px;
    right: -18px;
    top: -18px;
    position: absolute;
    border-top-right-radius: 8px;
  }
`;
const Hero = ({
  data: {
    photo: { url },
    text,
    buttonLabel,
  },
}) => (
  <div>
    <div
      css={{
        position: 'relative',
        display: 'flex',
        height: 375,
        marginBottom: '1rem',
      }}
    >
      <Card>
        <img src={url} alt="hero" />
      </Card>
      <h2 css={{ alignSelf: 'center', transform: 'translate(155px, 0)', maxWidth: 200 }}>{text}</h2>
    </div>
    <Button>{buttonLabel}</Button>
  </div>
);

const Section = styled.section`
  padding-bottom: 2rem;
  text-align: center;
`;

const Input = styled.input`
  background: #f5f7f9;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  width: 100%;
`;

class CTA extends Component {
  state = {
    emailInput: '',
  };

  handleEmailInputChange = (e) => {
    const { value } = e.target;
    this.setState(() => ({ emailInput: value }));
  };

  render() {
    const {
      data: {
        heading, text, inputLabel, buttonLabel,
      },
    } = this.props;

    const { emailInput } = this.state;
    return (
      <Section>
        <h1>{heading}</h1>
        <p>{text}</p>
        <form
          action="https://rendercake.us19.list-manage.com/subscribe/post"
          method="POST"
          css={{ textAlign: 'left' }}
        >
          <input type="hidden" name="u" value="8c6d1cf099c3d7e21e25363ac" />
          <input type="hidden" name="id" value="2e4dad5924" />
          <label css={{ color: '#9da1a3', fontSize: 12 }} htmlFor="emailInput">
            email
          </label>
          <Input
            type="email"
            autoCapitalize="off"
            autoCorrect="off"
            name="MERGE0"
            id="MERGE0"
            size="25"
            value={emailInput}
            onChange={this.handleEmailInputChange}
            placeholder={inputLabel}
          />
          <button type="submit">press me</button>
        </form>
      </Section>
    );
  }
}

const stories = [
  {
    title: 'Test Blog Post #0',
    slug: 'test-blog-post-0',
    publishedDate: '2018-09-28T00:00:00.000Z',
    photo: {
      url: 'https://media.graphcms.com//43oIbHYPRcaGBSoS9BsB',
    },
  },
  {
    title: 'Test blog post #1',
    slug: 'test-blog-post-1',
    publishedDate: '2018-09-27T00:00:00.000Z',
    photo: {
      url: 'https://media.graphcms.com//f0o7xJcQcpMO4IOXMcYQ',
    },
  },
  {
    title: 'Test blog post #2',
    slug: 'test-blog-post-2',
    publishedDate: '2018-09-26T00:00:00.000Z',
    photo: {
      url: 'https://media.graphcms.com//lBHDo4RIQW6kylzaX2pb',
    },
  },
];

const Story = ({ title, publishedDate, photo: { url } }) => (
  <div>
    <p>{title}</p>
    <p>{publishedDate}</p>
    <div>
      <img src={url} alt="todo me later" />
    </div>
  </div>
);

const Stories = ({ stories }) => (
  <Section>
    <h1>Stories</h1>
    {stories.map(storyObj => <Story {...storyObj} />)}
  </Section>
);

export default withRouteData(({ containers }) => {
  const { homeHeaderHero, newsLetterSignUp } = massageData(containers[0].components);

  return (
    <Fragment>
      <header css={{ paddingBottom: '2rem' }}>
        <Hero data={homeHeaderHero} />
      </header>
      <main>
        <CTA data={newsLetterSignUp} />
        <Stories stories={stories} />
      </main>
    </Fragment>
  );
});
