
import { Model, DataType } from "sequelize-typescript";
import { Column, Table, PrimaryKey, CreatedAt, UpdatedAt, AutoIncrement } from "sequelize-typescript";

@Table
export default class ClientApplication extends Model<ClientApplication> {

    @AutoIncrement @PrimaryKey @Column
    id: number;

    @CreatedAt @Column
    createdAt: Date;

    @UpdatedAt @Column
    updatedAt: Date;

    @Column
    name: string;

    @Column(DataType.TEXT)
	description: string;

}