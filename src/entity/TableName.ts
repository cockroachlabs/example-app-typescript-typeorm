import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class TableName {
  @PrimaryColumn()
  primaryKeyColumnName: number;

  @Column()
  columnName: number;
}
