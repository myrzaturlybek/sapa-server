import {MigrationInterface, QueryRunner} from "typeorm";

export class addDataset21622477841412 implements MigrationInterface {
    name = 'addDataset21622477841412'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "dataset" ("id" SERIAL NOT NULL, "date" character varying NOT NULL, "tweet" character varying NOT NULL, "high" double precision NOT NULL, "low" double precision NOT NULL, "open" double precision NOT NULL, "close" double precision NOT NULL, "volume" double precision NOT NULL, CONSTRAINT "PK_36c1c67adb3d1dd69ae57f18913" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "dataset"`);
    }

}
