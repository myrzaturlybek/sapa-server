import { Injectable } from '@nestjs/common';
import { DatasetRepository } from './dataset.repository';

@Injectable()
export class DatasetService {
    constructor(public readonly datasetRepository: DatasetRepository) {}

    async getDataset() {
        return this.datasetRepository.find();
    }
}
