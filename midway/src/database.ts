import { createConnection } from "typeorm";
import "reflect-metadata";
import {UserEntity} from './entity/user.entity' 


export default createConnection({
  type: "sqlite",
  database: "../midway/temp.db",
  dropSchema: false, // 删除模式?
  entities: [UserEntity],
  synchronize: true,
  logging: false,
})
