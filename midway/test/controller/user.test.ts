import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework, Application  } from '@midwayjs/koa';
import * as assert from 'assert';

// todo 超时的测试还没弄
describe('test/controller/test.user.ts', () => {

  let app: Application;

  beforeAll(async () => {
    // 只创建一次 app，可以复用
    try {
      // 由于Jest在BeforeAll阶段的error会忽略，所以需要包一层catch
      // refs: https://github.com/facebook/jest/issues/8688
      app = await createApp<Framework>();
    } catch(err) {
        console.error('test beforeAll error', err);
      throw err;
    }
  });

  afterAll(async () => {
    // close app
    await close(app);
  });

  it('正确登录!', async () => {
    // create app

    // make request
    const result = await createHttpRequest(app)
      .post('/api/user/login')
      .send({ username: 'jack', password: "redballoon" });
    // console.log(result.body)
    // use expect by jest
    expect(result.status).toBe(200);

  });

  it('输入了错误的用户名', async () => {
    // create app

    // make request
    const result = await createHttpRequest(app)
      .post('/api/user/login')
      .send({ username: 'jack2', password: "redballoon" });
    // use expect by jest
    expect(result.body.code).toBe(400);

  });

  it('请求地址写错了!', async () => {
    // create app

    // make request
    const result = await createHttpRequest(app)
      .post('/api/user/login1') // 错误地址
      .send({ username: 'jack', password: "redballoon" });

    // use expect by jest
    expect(result.status).toBe(302); // 这是判断为空码?
  });
  

  it('参数为空时', async () => {
    // create app

    // make request
    const result = await createHttpRequest(app)
      .post('/api/user/login') // 错误地址
      .send({ username: '', password: "redballoon" });

      // console.log(result.body, 'jack = null')
    // use expect by jest
    // expect(result.status).toBe(422);
    assert.deepStrictEqual(result.body.status, 422);
  });
});
