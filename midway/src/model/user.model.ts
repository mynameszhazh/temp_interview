import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';

import { UserEntity } from '../entity/user.entity';
import dbConnection from '../database';

export class UserModel {
  @InjectEntityModel(UserEntity)
  userRepo: Repository<UserEntity>;

  /**
   * 根据用户名和密码获取用户信息
   * @param username {String} 用户名
   * @param password {String} 用户密码
   */
  // : Promise<UserEntity>
  async getUserByUsernameAndPassword(username, password) {
    console.log(username, password);
    let result = await dbConnection;
    // let user = new UserEntity()
    // user.password = 'redballoon'
    // user.username = 'jack'
    // result.manager.save(user)
    let data = await result.manager.find(UserEntity);
    //todo 不知道为什么 findOne 一直弄不出来 只能这样暂时这样了
    console.log(data[0].username , username , data[0].password , password)
    if (data[0].username == username && data[0].password == password) {
      return true;
    }
    return false;
  }
}
