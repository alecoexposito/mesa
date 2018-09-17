import {Column, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {Sale} from "./Sale";

@Entity('work_period')
export class WorkPeriod {

  static STATUS_OPEN: string = "Abierto";
  static STATUS_CLOSED: string = "Cerrado";

  @PrimaryGeneratedColumn()
  id: number;

  constructor() {
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.status = WorkPeriod.STATUS_OPEN;
  }

  @OneToMany(type => Sale, sale => sale.workPeriod)
  sales: Sale[];

  @Column("datetime", { nullable: true })
  startedAt: Date;

  @Column("datetime", { nullable: true })
  endedAt: Date;

  @Column()
  status: string;

  @Column("datetime")
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;


}
