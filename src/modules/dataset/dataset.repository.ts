import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { DatasetEntity } from './dataset.entity';

@EntityRepository(DatasetEntity)
export class DatasetRepository extends Repository<DatasetEntity> {}
