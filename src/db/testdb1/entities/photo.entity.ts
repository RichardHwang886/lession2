import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Photo {
    @PrimaryGeneratedColumn()
    id: number;

    //nvarchar(500)
    @Column('nvarchar',{ length: 500 })
    name: string;

    @Column('text')
    description: string;

    //nvarchar(255)
    @Column('nvarchar',{ length: 500 })
    filename: string;

    @Column('int')
    views: number;

    // bit
    @Column('bit')
    isPublished: boolean;
}