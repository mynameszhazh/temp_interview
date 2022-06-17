import { Inject, Controller, Post, Body } from '@midwayjs/decorator';
// import { Validate } from '@midwayjs/validate';
import { JwtService } from '@midwayjs/jwt';
// const jwt = require('jsonwebtoken');
import { UserModel } from '../model/user.model';
import { Context } from '@midwayjs/koa';
import { UserLoginDTO } from '../dto/user.dto';

@Controller('/api')
export class UserController {
  @Inject()
  ctx: Context;

  @Inject()
  jwtService: JwtService;

  @Post('/user/login')
  // @Validate()
  async getUser(@Body() user: UserLoginDTO) {
    const result = await new UserModel().getUserByUsernameAndPassword(
      user.username,
      user.password
    );
    if (result) {
      return {
        code: 200,
        result: 'success',
        message: '登录成功',
        data: {
          token: this.jwtService.signSync(
            { username: user.username, password: user.password },
            // 随便写的了..
            'secretOrPrivateKey',
            {
              expiresIn: 60 * 60 * 24,
              // algorithm: 'RS256',
            }
          ),
          // 原生
          // token: jwt.sign(
          //   { username: user.username, password: user.password },
          //   `key`,
          //   {
          //     expiresIn: 60 * 60 * 24,
          //   }
          // ),
        },
      };
    } else {
      return {
        code: 400,
        result: 'error',
        message: '账号或密码不正确',
        data: null,
      };
    }
  }
}
