
import { dbConfigHelper } from "./db-config-helper";


const dbHost = "localhost";
const dbPort = 1433;

export const testDbconfig= dbConfigHelper('testdb1',dbHost,'testdb1',dbPort);


export const appConfig = {
  port: 3009, //系統使用的TCP port
  dbconfig: {
    // 資料庫設定
    provideOfDb: 'DbConnectionToken',
    connections: [
      testDbconfig
    ]
  },
 
};
