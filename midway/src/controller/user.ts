import { Inject, Controller, Post, Body } from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';
import { UserModel } from '../model/user.model';
import { UserLoginDTO } from '../dto/user.dto';

@Controller('/api')
export class UserController {
  @Inject()
  ctx: Context;

  @Inject()
  UserModel: UserModel;

  @Post('/api/user/login')
  async getUser(@Body() user: UserLoginDTO ) {
    const result = await this.UserModel.getUserByUsernameAndPassword(user.username, user.password);
    console.log(result, 151515)
    if(result) {
      return {
        code: 200,
        result: "success",
        message: "登录成功",
        data: {
          token: "..."
        }
      }
    } else {
      return {
        code: 400,
        result: "error",
        message: "账号或密码不正确",
        data: null
      }
    }
  }
}
