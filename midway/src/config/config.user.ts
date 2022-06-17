import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1655300905122_2905',
  koa: {
    port: 7001,
  },
  jwt: {
    secret: 'xjh', // fs.readFileSync('xxxxx.key')
    expiresIn: '2d', // https://github.com/vercel/ms
  },
} as MidwayConfig;
