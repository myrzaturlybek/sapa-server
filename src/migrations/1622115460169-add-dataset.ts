import {MigrationInterface, QueryRunner} from "typeorm";

export class addDataset1622115460169 implements MigrationInterface {
    name = 'addDataset1622115460169'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "dataset" ("id" SERIAL NOT NULL, "date" character varying NOT NULL, "tweet" character varying NOT NULL, "high" integer NOT NULL, CONSTRAINT "PK_36c1c67adb3d1dd69ae57f18913" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TYPE "users_role_enum" RENAME TO "users_role_enum_old"`);
        await queryRunner.query(`CREATE TYPE "users_role_enum" AS ENUM('USER', 'ADMIN')`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "role" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "role" TYPE "users_role_enum" USING "role"::"text"::"users_role_enum"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "role" SET DEFAULT 'USER'`);
        await queryRunner.query(`DROP TYPE "users_role_enum_old"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "users_role_enum_old" AS ENUM('USER')`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "role" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "role" TYPE "users_role_enum_old" USING "role"::"text"::"users_role_enum_old"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "role" SET DEFAULT 'USER'`);
        await queryRunner.query(`DROP TYPE "users_role_enum"`);
        await queryRunner.query(`ALTER TYPE "users_role_enum_old" RENAME TO "users_role_enum"`);
        await queryRunner.query(`DROP TABLE "dataset"`);
    }

}
