import OneGraphAuth from 'onegraph-auth';

export const APP_ID = `process.env.REACT_APP_ID`;
export const CLIENT_URL = `https://serve.onegraph.com/graphql?app_id=${APP_ID}`;
export const auth = new OneGraphAuth({
  appId: APP_ID,
});
