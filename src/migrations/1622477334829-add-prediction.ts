import {MigrationInterface, QueryRunner} from "typeorm";

export class addPrediction1622477334829 implements MigrationInterface {
    name = 'addPrediction1622477334829'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dataset" DROP COLUMN "tweet"`);
        await queryRunner.query(`ALTER TABLE "dataset" ADD "tweet" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dataset" DROP COLUMN "tweet"`);
        await queryRunner.query(`ALTER TABLE "dataset" ADD "tweet" character varying NOT NULL`);
    }

}
