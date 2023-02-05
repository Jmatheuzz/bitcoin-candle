"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandleRepository = void 0;
const candle_1 = require("@/utils/database/sqlite/entities/candle");
const _1 = require(".");
class CandleRepository {
    async get() {
        return await _1.dataSource.manager.find(candle_1.Candle);
    }
    async insert(input) {
        return await _1.dataSource.manager.save(input);
    }
}
exports.CandleRepository = CandleRepository;
//# sourceMappingURL=candle.js.map