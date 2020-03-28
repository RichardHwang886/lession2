import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../db';
import { Connection } from 'typeorm';

@Injectable()
export class PhotoService {
    private conn: Connection;      // database connection
    constructor(private dbSvc: DatabaseService){
        this.conn = this.dbSvc.connection;
    }

    /*
     1. async , await
     2. @XXX, SQL參數,
    */
    async getPhoto(id){
        const sql = `select *   FROM [testdb1].[dbo].[photo] where id=@0 `
        let photos = await this.conn.query(sql, [id]);
        console.log("PhotoService -> getPhoto -> photos", photos)
        return photos;
    }
    /*
      1. 資料表的欄位, 
      2. 是否有內定, 識別值
      3. 非NULL值
      4. 是否為唯一值
    */
    async insPhoto(row){
        const sql = `insert into [testdb1].[dbo].[photo] (
                        [name]
                        ,[description]
                        ,[filename]
                        ,[views]
                        ,[isPublished]
                        ,[uniqueField]
                    ) 
                    output inserted.*
                    values (@0,@1,@2,@3,@4,@5) `
        let photos = await this.conn.query(sql, [
            row['name'],
            row['description'],
            row['filename'],
            row['views'],
            row['isPublished'],
            row['uniqueField']
        ]);
        console.log("PhotoService -> insPhoto -> photos", photos)
        return photos; 
    }
    async updPhoto(row){
        const sql = `update [testdb1].[dbo].[photo] set
                        [name] =@0
                        ,[description] =@1
                        ,[filename] =@2
                        ,[views] =@3
                        ,[isPublished] =@4
                        ,[uniqueField] =@5
                     
                    output inserted.*
                    where  id =@6`
        let photos = await this.conn.query(sql, [
            row['name'],
            row['description'],
            row['filename'],
            row['views'],
            row['isPublished'],
            row['uniqueField'],
            row['id']
        ]);
        console.log("PhotoService -> updPhoto -> photos", photos)
        return photos; 
    }

    async delPhoto(id){
        const sql = `delete  FROM [testdb1].[dbo].[photo]
                     output deleted.*
                     where id=@0 `
        let photos = await this.conn.query(sql, [id]);
        console.log("PhotoService -> delPhoto -> photos", photos)
        return photos;
    } 

    
}
