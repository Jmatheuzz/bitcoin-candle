import { PeriodEnum } from '@/models'
import { CandleServices, createMessageChannel, getAPIData } from '.'
import { env } from '@/main/config'

export async function generateCandle (): Promise<void> {
  const messageChannel = await createMessageChannel()

  if (messageChannel) {
    while (true) {
      const loopTimes = PeriodEnum.ONE_MINUTE / PeriodEnum.TEN_SECONDS
      const candle = new CandleServices('BTC', 'USD')

      console.log('---------------------------------------')
      console.log('Generating new candle')

      for (let i = 0; i < loopTimes; i++) {
        const returnAPI = await getAPIData()
        candle.addValue(returnAPI.bitcoin.usd)
        console.log(returnAPI.bitcoin.usd)
        console.log(`Market price #${i + 1} of ${loopTimes}`)
        await new Promise((resolve, reject) => setTimeout(resolve, PeriodEnum.TEN_SECONDS))
      }

      candle.closeCandle()
      console.log('Candle close')
      const candleObj = candle.toSimpleObject()
      console.log(candleObj)
      const candleJson = JSON.stringify(candleObj)
      messageChannel.sendToQueue(env.queue!, Buffer.from(candleJson))
      console.log('Candle sent to queue')
    }
  }
}
