FROM rabbitmq:3-management-alpine

ENV RABBITMQ_DEFAULT_USER=dev
ENV RABBITMQ_DEFAULT_PASS=senhadev

VOLUME [ "./data: /var/lib/rabbitmq/mnesia/rabbit@rbmq" ]

EXPOSE 15672 5672