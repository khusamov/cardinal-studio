
import { Model, Column, Table, BelongsToMany, Scopes, PrimaryKey, CreatedAt, UpdatedAt } from "sequelize-typescript";

@Table
export class ClientApplication extends Model<ClientApplication> {

    @PrimaryKey @Column
    id: number;

    @CreatedAt @Column
    createdAt: Date;

    @UpdatedAt @Column
    updatedAt: Date;

    @Column
    name: string;

}