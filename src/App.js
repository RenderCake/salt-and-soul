import React from 'react';
import { Router, Link } from 'react-static';
import styled, { injectGlobal } from 'react-emotion';
import { hot } from 'react-hot-loader';
//
import Routes from 'react-static-routes';
import Nav from './components/Nav';

injectGlobal`
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
`;

const AppStyles = styled.div`
  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: #108db8;
    font-weight: bold;
  }

  nav {
    width: 100%;
    a {
      color: white;
      padding: 1rem;
      display: inline-block;
    }
  }

  img {
    width: 100%;
  }

  .content {
    padding: 1rem;
  }
`;

const App = () => (
  <Router>
    <AppStyles>
      <Nav />
      <div className="content">
        <Routes />
      </div>
    </AppStyles>
  </Router>
);

export default hot(module)(App);
