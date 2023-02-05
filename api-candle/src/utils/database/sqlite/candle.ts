import { Candle } from '@/utils/database/sqlite/entities/candle'
import { dataSource } from '.'

export class CandleRepository {
  async get (): Promise<Candle[]> {
    const repo = dataSource.getRepository(Candle)
    return await repo.find()
  }

  async insert (input: Candle): Promise<Candle> {
    const repo = dataSource.getRepository(Candle)
    return await repo.save(input)
  }
}
