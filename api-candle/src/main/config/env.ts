export const env = {
  port: process.env.PORT!,
  amqp: process.env.AMQP_SERVER!,
  queue: process.env.QUEUE_NAME!,
  socketEvent: process.env.SOCKET_EVENT_NAME!,
  socketClient: process.env.SOCKET_CLIENT_SERVER!
}
