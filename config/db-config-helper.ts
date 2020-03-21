
export const dbConfigHelper = function configHelper(name:string,host?:string, database?:string, port =1433 ){
    database = database || name;
    host = host || 'localhost';
    return {
      name: name,
      type: 'mssql',
      port: port,      
      host: host,
      username: 'rs5user',  //正式環境
      password: '23752100',
  
      database: database,
      requestTimeout: 30000, //default 15000
      //config.options.enableArithAbort
      //   => Ends a query when an overflow or divide-by-zero error occurs during query execution.
      options: { useUTC: true, encrypt: false, enableArithAbort: true }, 
      entities: [__dirname + '/../**/**.entity{.ts,.js}'],
      synchronize: false
    };
  }

  