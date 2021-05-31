import { DatasetService } from './dataset.service';
import { DatasetController } from './dataset.controller';
import { Module } from '@nestjs/common';
import { DatasetRepository } from './dataset.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PredictionRepository } from './prediction.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([DatasetRepository, PredictionRepository]),
    ],
    controllers: [DatasetController],
    providers: [DatasetService],
})
export class DatasetModule {}
