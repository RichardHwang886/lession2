import { Module } from "@nestjs/common";
import { DatabaseModule, DatabaseService } from "../db";
import { AppConfigService } from "../../config/app-config.service";
import { databaseProviders } from "../db/database.providers";

@Module({
  imports:[DatabaseModule],
  providers: [AppConfigService, ],
  exports: [AppConfigService,]
})
export class LibModule { }
