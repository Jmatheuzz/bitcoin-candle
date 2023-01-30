"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
require("dotenv/config");
exports.env = {
    pricesAPI: process.env.PRICES_API,
    queue: process.env.QUEUE_NAME,
    amqp: process.env.AMQP_SERVER
};
//# sourceMappingURL=env.js.map