import * as Config from './config';

const contenful = require('contentful');

const Client = contenful.createClient({
  space: Config.SPACE_ID,
  accessToken: Config.CDAPI_ACCESS_TOKEN,
});

export default (async function getPages() {
  const { items } = await Client.getEntries({
    content_type: Config.POST_CONTENT_TYPE_ID,
  });

  return items.map(({ fields }) => fields);
});
