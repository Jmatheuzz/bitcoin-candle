import { CandleColor, Currency } from '.'

export type Candle = {
  low: number
  high: number
  open: number
  close: number
  color: CandleColor
  finalDateTime: Date
  values: number[]
  currency: Currency
}
