import {MigrationInterface, QueryRunner} from "typeorm";

export class addohlcv1622275449949 implements MigrationInterface {
    name = 'addohlcv1622275449949'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dataset" ADD "low" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "dataset" ADD "open" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "dataset" ADD "close" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "dataset" ADD "volume" double precision NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dataset" DROP COLUMN "volume"`);
        await queryRunner.query(`ALTER TABLE "dataset" DROP COLUMN "close"`);
        await queryRunner.query(`ALTER TABLE "dataset" DROP COLUMN "open"`);
        await queryRunner.query(`ALTER TABLE "dataset" DROP COLUMN "low"`);
    }

}
