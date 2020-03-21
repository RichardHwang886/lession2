import { Module } from '@nestjs/common';
import { PhotoModule } from './photo/photo.module';
import { LibModule } from '../lib';

@Module({
  imports: [LibModule, PhotoModule],
})
export class ApplicationModule {}