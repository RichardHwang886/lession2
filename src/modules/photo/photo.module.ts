import { Module } from "@nestjs/common";
import { PhotoController } from "./photo.controller";
import { LibModule } from "../../lib";
import { DatabaseModule } from "../../db";

@Module({
  imports: [LibModule, DatabaseModule],
  controllers: [PhotoController],
})
export class PhotoModule {}
