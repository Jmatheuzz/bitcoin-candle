"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMessageChannel = void 0;
const amqplib_1 = require("amqplib");
const config_1 = require("@/main/config");
const createMessageChannel = async () => {
    try {
        const connection = await (0, amqplib_1.connect)(config_1.env.amqp);
        const channel = await connection.createChannel();
        await channel.assertQueue(config_1.env.queue);
        console.log('Connected to RabbitMQ');
        return channel;
    }
    catch (err) {
        console.log('Error while trying to connect to RabbitMQ');
        console.log(err);
        return null;
    }
};
exports.createMessageChannel = createMessageChannel;
//# sourceMappingURL=message-channel.js.map