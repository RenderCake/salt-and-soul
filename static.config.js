import React, { Component } from 'react';
import { request } from 'graphql-request';

const GRAPHCMS_API = 'https://api-uswest.graphcms.com/v1/cjllube9p0p6q01ceuribyt6b/master';

const query = `{
  containers {
    components {
      slug
      hero {
        slug
        text
        photo {
          url
        }
        buttonLabel
      }
      callToAction {
        slug
        heading
        text
        inputLabel
        buttonLabel
      }
    }
  }
}`;

export default {
  plugins: ['react-static-plugin-emotion'],
  getSiteData: () => ({
    title: 'Salt & Souls',
  }),
  getRoutes: async () => {
    const { containers } = await request(GRAPHCMS_API, query);
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => ({
          containers,
        }),
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ];
  },
};
