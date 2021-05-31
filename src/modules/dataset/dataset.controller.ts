import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { DatasetService } from './dataset.service';

@Controller('dataset')
export class DatasetController {
    constructor(private datasetService: DatasetService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    getDataset() {
        return this.datasetService.getDataset();
    }

    @Get('prediction')
    @HttpCode(HttpStatus.OK)
    getPrediction() {
        return this.datasetService.getPrediction();
    }
}
