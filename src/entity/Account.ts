import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class Account {
  @PrimaryColumn()
  id: number;

  @Column()
  balance: number;

  @Column({nullable: true, default: null })
  color: string;
}
