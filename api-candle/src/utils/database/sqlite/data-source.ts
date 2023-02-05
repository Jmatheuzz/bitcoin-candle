import { DataSource } from 'typeorm'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: 'bitcoin_candles',
  entities: ['src/utils/database/sqlite/entities/*{.ts,.js}'],
  migrations: ['src/utils/database/sqlite/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations',
  migrationsRun: true,
  synchronize: false
})
