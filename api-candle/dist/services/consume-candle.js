"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const amqplib_1 = require("amqplib");
const socket_io_1 = require("socket.io");
const sqlite_1 = require("@/utils/database/sqlite");
class CandleMessageChannel {
    constructor(server) {
        this._channel = null;
        this.repository = new sqlite_1.CandleRepository();
        this._io = new socket_io_1.Server(server, {
            cors: {
                origin: process.env.SOCKET_CLIENT_SERVER,
                methods: ['GET', 'POST']
            }
        });
        this._io.on('connection', () => console.log('Web socket connection created'));
    }
    async _createMessageChanel() {
        try {
            const connection = await (0, amqplib_1.connect)(process.env.AMQP_SERVER);
            this._channel = await connection.createChannel();
            await this._channel.assertQueue(process.env.QUEUE_NAME);
        }
        catch (err) {
            console.log('Connection to RabbitMQ failed');
            console.log(err);
        }
    }
    async consumeMessages() {
        await this._createMessageChanel();
        if (this._channel) {
            await this._channel.consume(process.env.QUEUE_NAME, async (msg) => {
                const candleObj = JSON.parse(msg.content.toString());
                this._channel.ack(msg);
                const candle = candleObj;
                await this.repository.insert(candle);
                this._io.emit(process.env.SOCKET_EVENT_NAME, candle);
            });
        }
    }
}
exports.default = CandleMessageChannel;
//# sourceMappingURL=consume-candle.js.map