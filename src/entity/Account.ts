import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Account {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  balance: number;
}
