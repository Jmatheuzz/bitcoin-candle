"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandleServices = void 0;
const models_1 = require("@/models");
class CandleServices extends models_1.Candle {
    constructor(currency, currencyTo) {
        super(currencyTo);
        this.currency = currency;
    }
    addValue(value) {
        this.values.push(value);
        this.generateParams(value);
    }
    generateParams(value) {
        if (this.values.length === 1) {
            this.open = value;
        }
        if (this.low > value) {
            this.low = value;
        }
        if (this.high < value) {
            this.high = value;
        }
    }
    generateColor() {
        if (this.open > this.close) {
            this.color = 'red';
        }
        else if (this.close > this.open) {
            this.color = 'green';
        }
    }
    closeCandle() {
        if (this.values.length > 0) {
            this.close = this.values[this.values.length - 1];
            this.finalDateTime = new Date();
            this.generateColor();
            return true;
        }
        return false;
    }
    toSimpleObject() {
        const { values, ...data } = this;
        return data;
    }
}
exports.CandleServices = CandleServices;
//# sourceMappingURL=candle-service.js.map