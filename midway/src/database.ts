import { createConnection } from "typeorm";
import "reflect-metadata";
import {UserEntity} from './entity/user.entity' 

let dbConnection

createConnection({
  type: "sqlite",
  database: "../midway/temp.db",
  dropSchema: false, // 删除模式?
  entities: [UserEntity],
  synchronize: true,
  logging: false,
}).then( async(res) => {
  dbConnection = res
  // let user = new UserEntity()
  // user.id = 1
  // user.password = 'jack'
  // user.username = 'redballoon'
  // await dbConnection.manager.save(user)
  // const result = await dbConnection.manager.find(UserEntity)
  // console.log(result, 123)
})

export default dbConnection
