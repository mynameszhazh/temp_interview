import { Configuration, App } from '@midwayjs/decorator';

import * as koa from '@midwayjs/koa';
import * as validate from '@midwayjs/validate';
import * as jwt from '@midwayjs/jwt';
import * as info from '@midwayjs/info';
import { join } from 'path';

import './database.ts'
// import { DefaultErrorFilter } from './filter/default.filter';
// import { NotFoundFilter } from './filter/notfound.filter';
import { ReportMiddleware } from './middleware/report.middleware';

@Configuration({
  imports: [
    koa,
    validate,
    jwt,
    {
      component: info,
      enabledEnvironment: ['local'],
    },
  ],
  importConfigs: [join(__dirname, './config')],
})
export class ContainerLifeCycle {
  @App()
  app: koa.Application;

  async onMounted() {
    console.log(1232)
  }

  async onReady() {
    // add middleware
    this.app.useMiddleware([ReportMiddleware]);
    // add filter
    // this.app.useFilter([NotFoundFilter, DefaultErrorFilter]);
  }
}
