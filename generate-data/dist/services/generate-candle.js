"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCandle = void 0;
const models_1 = require("@/models");
const _1 = require(".");
const config_1 = require("@/main/config");
async function generateCandle() {
    const messageChannel = await (0, _1.createMessageChannel)();
    if (messageChannel) {
        while (true) {
            const loopTimes = models_1.PeriodEnum.THIRTY_SECONDS / models_1.PeriodEnum.TEN_SECONDS;
            const candle = new _1.CandleServices('BTC', 'USD');
            for (let i = 0; i < loopTimes; i++) {
                const returnAPI = await (0, _1.getAPIData)();
                candle.addValue(returnAPI.bitcoin.usd);
                console.log(returnAPI.bitcoin.usd);
                await new Promise((resolve, reject) => setTimeout(resolve, models_1.PeriodEnum.TEN_SECONDS));
            }
            candle.closeCandle();
            const candleObj = candle.toSimpleObject();
            console.log(candleObj);
            const candleJson = JSON.stringify(candleObj);
            messageChannel.sendToQueue(config_1.env.queue, Buffer.from(candleJson), { persistent: true });
        }
    }
}
exports.generateCandle = generateCandle;
//# sourceMappingURL=generate-candle.js.map