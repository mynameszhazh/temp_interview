import { Inject, Controller, Post, Body } from '@midwayjs/decorator';
// import { Validate } from '@midwayjs/validate';
import { UserModel } from '../model/user.model';
import { Context } from '@midwayjs/koa';
import { UserLoginDTO } from '../dto/user.dto';

@Controller('/api')
export class UserController {

  @Inject() 
  ctx: Context

  @Post('/user/login')
  // @Validate()
  async getUser(@Body() user: UserLoginDTO ) {
    const result = await new UserModel().getUserByUsernameAndPassword(user.username, user.password);
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
