import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { PredictionEntity } from './prediction.entity';

@EntityRepository(PredictionEntity)
export class PredictionRepository extends Repository<PredictionEntity> {}
