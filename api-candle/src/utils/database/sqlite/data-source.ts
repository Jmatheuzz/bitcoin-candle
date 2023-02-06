import { DataSource } from 'typeorm'
import { env } from '@/main/config'

export const dataSource = new DataSource({
  type: env.dbType,
  host: env.dbHost,
  username: env.dbUser,
  password: env.dbPassword,
  port: parseInt(env.dbPort),
  database: env.db,
  entities: ['dist/utils/database/sqlite/entities/*.js'],
  migrations: ['dist/utils/database/sqlite/migrations/*.js'],
  migrationsTableName: 'migrations',
  migrationsRun: true,
  synchronize: false
})
