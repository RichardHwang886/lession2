import { Inject, Injectable } from "@nestjs/common";
import { Repository, Connection } from "typeorm";
import { dbconfig } from "./database.conf";

@Injectable()
export class DatabaseService {
  constructor( @Inject(dbconfig.provideOfDb) private readonly dbConnects: Connection[]) {}

  get connection() {
    return this.dbConnects[0];
  }

  get connections() {
    return this.dbConnects;
  }

  getConnection(name){
    return this.dbConnects.find(v=>v.name===name);
  }

  repository<T>(tableName, conn?:Connection): Repository<T> {
    conn = conn || this.connection;
    return conn.getRepository(tableName);
  }
}
