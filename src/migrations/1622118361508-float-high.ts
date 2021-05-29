import {MigrationInterface, QueryRunner} from "typeorm";

export class floatHigh1622118361508 implements MigrationInterface {
    name = 'floatHigh1622118361508'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dataset" DROP COLUMN "high"`);
        await queryRunner.query(`ALTER TABLE "dataset" ADD "high" double precision NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dataset" DROP COLUMN "high"`);
        await queryRunner.query(`ALTER TABLE "dataset" ADD "high" integer NOT NULL`);
    }

}
