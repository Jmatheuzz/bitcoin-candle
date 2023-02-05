import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity({ name: 'candles' })
export class Candle {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  low?: number

  @Column()
  high?: number

  @Column()
  open?: number

  @Column()
  close?: number

  @Column({ name: 'final_date_time' })
  finalDateTime?: Date

  @CreateDateColumn({ name: 'created_at', nullable: true })
  createdAt?: Date

  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updatedAt?: Date
}
