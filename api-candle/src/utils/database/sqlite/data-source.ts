import { DataSource } from 'typeorm'
import { env } from '@/main/config'

export const dataSource = new DataSource({
  type: env.dbType,
  host: env.dbHost,
  username: env.dbUser,
  password: env.dbPassword,
  port: parseInt(env.dbPort),
  database: env.db,
  entities: ['src/utils/database/sqlite/entities/*{.ts,.js}'],
  migrations: ['src/utils/database/sqlite/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations',
  migrationsRun: true,
  synchronize: false
})
