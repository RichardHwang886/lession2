import { Response } from "express";
import {
  Controller,
  Get,
  Post,
  HttpStatus,
  Req,
  Res,
  Param,
  Body,
  Put,
  Delete
} from "@nestjs/common";
import { Repository, Connection } from "typeorm";
import { DatabaseService } from "../../db";
import { Photo } from "../../db/testdb1/entities";

@Controller("Webapi/Photo")
export class PhotoController {
  private conn: Connection;      // database connection
  private photoRepo : Repository<Photo>;
  constructor(private dbSvc: DatabaseService) {
    this.conn = this.dbSvc.connection;
    this.photoRepo = this.dbSvc.repository<Photo>("Photo");
  }
  @Get()
  public async getAllPhotos(@Req() req, @Res() res: Response) {
   // const photos = await this.dbSvc.connection.getRepository("Photo").find();
   // const photos = await this.photoRepo.find();
    const sql = `select *   FROM [testdb1].[dbo].[photo] `
    let photos = await this.conn.query(sql);
    res.status(HttpStatus.OK).json(photos);
  }
  @Get("/:id")
  public async getPhotos(@Req() req, @Res() res: Response, @Param("id") id) {
    const photo = await this.photoRepo.findOne(id);
    res.status(HttpStatus.OK).json(photo);
  }
  // C
  /**
   * 若id一樣, 則會update, 否則為insert
   * @param res 
   * @param photo 
   * {"photo":{
        "id": 1,
        "name": "abc11",
        "description": "aaaa11",
        "filename": "testfilename",
        "views": 1,
        "isPublished": true
    }
}
   */
  @Post()
  public async addPhoto(@Res() res: Response, @Body("photo") photo) {
   // const addedPhoto = await this.photoRepo.persist(photo);
    const addedPhoto = await this.photoRepo.save(photo);
    res.status(HttpStatus.CREATED).json(addedPhoto);
  }
  // D
  @Delete(":id")
  public async deletePhoto(
    @Req() req,
    @Res() res: Response,
    @Param("id") id
  ) {
    const photo = await this.photoRepo.findOne(id);
    const deletedPhoto = await this.photoRepo.remove(photo);
    res.status(HttpStatus.OK).json(deletedPhoto);
  }
}
