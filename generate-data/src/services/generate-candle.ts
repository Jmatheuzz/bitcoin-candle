import { PeriodEnum } from '@/models'
import { CandleServices, createMessageChannel, getAPIData } from '.'
import { env } from '@/main/config'

export async function generateCandle (): Promise<void> {
  const messageChannel = await createMessageChannel()

  if (messageChannel) {
    while (true) {
      const loopTimes = PeriodEnum.THIRTY_SECONDS / PeriodEnum.TEN_SECONDS
      const candle = new CandleServices('BTC', 'USD')

      for (let i = 0; i < loopTimes; i++) {
        const returnAPI = await getAPIData()
        candle.addValue(returnAPI.bitcoin.usd)
        console.log(returnAPI.bitcoin.usd)
        await new Promise((resolve, reject) => setTimeout(resolve, PeriodEnum.TEN_SECONDS))
      }

      candle.closeCandle()
      const candleObj = candle.toSimpleObject()
      console.log(candleObj)
      const candleJson = JSON.stringify(candleObj)
      messageChannel.sendToQueue(env.queue!, Buffer.from(candleJson), { persistent: true })
    }
  }
}
