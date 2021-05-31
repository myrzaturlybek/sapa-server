import { Injectable } from '@nestjs/common';
import { MoreThan } from 'typeorm';
import { DatasetRepository } from './dataset.repository';
import { PredictionRepository } from './prediction.repository';

@Injectable()
export class DatasetService {
    constructor(
        public readonly datasetRepository: DatasetRepository,
        public readonly predictionRepository: PredictionRepository,
    ) {}

    async getDataset() {
        return this.datasetRepository.find({
            order: {
                date: 'ASC',
            },
        });
    }

    async getPrediction() {
        return this.predictionRepository.find({
            order: {
                date: 'ASC',
            },
        });
    }
}
