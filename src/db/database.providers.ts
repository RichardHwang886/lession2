import { createConnections, ConnectionOptions, Connection } from "typeorm";
import { dbconfig } from "./database.conf";

export const databaseProviders = [
  {
    provide: dbconfig.provideOfDb,
    useFactory: async () => await createConnections(dbconfig.connections as ConnectionOptions[]).catch(error => console.log(error))
  }
];
