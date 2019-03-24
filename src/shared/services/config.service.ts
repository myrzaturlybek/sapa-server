import * as dotenv from 'dotenv';
import { IAwsConfigInterface } from '../../interfaces/aws-config.interface';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export class ConfigService {
    constructor() {
        if (!(<any> module).hot) {
            process.env.NODE_ENV = process.env.NODE_ENV || 'development';
        }

        dotenv.config({
            path: `.${process.env.NODE_ENV}.env`,
        });

        // Replace \\n with \n to support multiline strings in AWS
        for (const envName of Object.keys(process.env)) {
            process.env[envName] = process.env[envName].replace(/\\n/g, '\n');
        }

        console.info(process.env);
    }

    public get(key: string): string {
        return process.env[key];
    }

    public getNumber(key: string): number {
        return Number(this.get(key));
    }

    get typeOrmConfig(): TypeOrmModuleOptions {

        let entities = [__dirname + '/../../modules/**/*.entity{.ts,.js}'];
        let migrations = [__dirname + '/../../migrations/*{.ts,.js}'];

        if ((<any> module).hot) {
            const entityContext = (<any>require).context('./../../modules', true, /\.entity\.ts$/);
            entities = entityContext.keys().map((id) => {
                const entityModule = entityContext(id);
                const [entity] = Object.values(entityModule);
                return entity;
            });
            const migrationContext = (<any>require).context('./../../migrations', false, /\.ts$/);
            migrations = migrationContext.keys().map((id) => {
                const migrationModule = migrationContext(id);
                const [migration] = Object.values(migrationModule);
                return migration;
            });
        }
        return {
            entities,
            migrations,
            keepConnectionAlive: true,
            type: 'postgres',
            host: this.get('POSTGRES_HOST'),
            port: this.getNumber('POSTGRES_PORT'),
            username: this.get('POSTGRES_USERNAME'),
            password: this.get('POSTGRES_PASSWORD'),
            database: this.get('POSTGRES_DATABASE'),
            migrationsRun: true,
            logging: this.get('NODE_ENV') === 'development',
        };
    }

    get awsS3Config(): IAwsConfigInterface {
        return {
            accessKeyId: this.get('AWS_S3_ACCESS_KEY_ID'),
            secretAccessKey: this.get('AWS_S3_SECRET_ACCESS_KEY'),
            bucketName: this.get('S3_BUCKET_NAME'),
        };
    }
}