import { Module } from "@nestjs/common";
import { PhotoController } from "./photo.controller";
import { LibModule } from "../../lib";
import { DatabaseModule } from "../../db";
import { PhotoService } from './photo.service';

@Module({
  imports: [LibModule, DatabaseModule],
  controllers: [PhotoController],
  providers: [PhotoService],
})
export class PhotoModule {}
