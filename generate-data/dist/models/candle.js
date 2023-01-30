"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Candle = void 0;
class Candle {
    constructor(currencyTo) {
        this.currencyTo = currencyTo;
        this.low = Infinity;
        this.high = 0;
        this.close = 0;
        this.open = 0;
        this.values = [];
    }
}
exports.Candle = Candle;
//# sourceMappingURL=candle.js.map