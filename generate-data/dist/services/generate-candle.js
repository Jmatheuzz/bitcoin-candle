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
            const loopTimes = models_1.PeriodEnum.ONE_MINUTE / models_1.PeriodEnum.TEN_SECONDS;
            const candle = new _1.CandleServices('BTC', 'USD');
            console.log('---------------------------------------');
            console.log('Generating new candle');
            for (let i = 0; i < loopTimes; i++) {
                const returnAPI = await (0, _1.getAPIData)();
                candle.addValue(returnAPI.bitcoin.usd);
                console.log(returnAPI.bitcoin.usd);
                console.log(`Market price #${i + 1} of ${loopTimes}`);
                await new Promise((resolve, reject) => setTimeout(resolve, models_1.PeriodEnum.TEN_SECONDS));
            }
            candle.closeCandle();
            console.log('Candle close');
            const candleObj = candle.toSimpleObject();
            console.log(candleObj);
            const candleJson = JSON.stringify(candleObj);
            messageChannel.sendToQueue(config_1.env.queue, Buffer.from(candleJson));
            console.log('Candle sent to queue');
        }
    }
}
exports.generateCandle = generateCandle;
//# sourceMappingURL=generate-candle.js.map