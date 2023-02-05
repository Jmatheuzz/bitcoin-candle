"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./config/module-alias");
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const consume_candle_1 = __importDefault(require("@/services/consume-candle"));
const sqlite_1 = require("@/utils/database/sqlite");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.listen(6555, () => {
    console.log('listening on port 3333');
});
const repo = new sqlite_1.CandleRepository();
app.use('/candles', async (req, res) => {
    const candles = await repo.get();
    return res.send(candles);
});
void (async () => {
    const PORT = process.env.PORT;
    const server = app.listen(PORT, () => console.log(`App running on port ${PORT}`));
    const candleMsgChannel = new consume_candle_1.default(server);
    await candleMsgChannel.consumeMessages();
    process.on('SIGINT', () => {
        server.close();
        console.log('App server and connection to MongoDB closed');
    });
})();
//# sourceMappingURL=index.js.map