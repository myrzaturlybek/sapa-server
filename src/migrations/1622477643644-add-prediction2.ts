import {MigrationInterface, QueryRunner} from "typeorm";

export class addPrediction21622477643644 implements MigrationInterface {
    name = 'addPrediction21622477643644'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "prediction" ("id" SERIAL NOT NULL, "date" character varying NOT NULL, "high" double precision NOT NULL, "low" double precision NOT NULL, "open" double precision NOT NULL, "close" double precision NOT NULL, "volume" double precision NOT NULL, CONSTRAINT "PK_23df2ceecea9f8bbb996ff056a3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "prediction"`);
    }

}
