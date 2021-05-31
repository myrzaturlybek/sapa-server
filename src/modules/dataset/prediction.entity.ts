// import { float } from 'aws-sdk/clients/lightsail';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'prediction' })
export class PredictionEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: string;

    @Column('float')
    high: number;

    @Column('float')
    low: number;

    @Column('float')
    open: number;

    @Column('float')
    close: number;

    @Column('float')
    volume: number;
}
