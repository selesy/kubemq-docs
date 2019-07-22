---
title: Feature List
lang: en-US
---

| Category    | Feature                                            | Description                                                                               | [KubeMQ](https://kubemq.io) | [RabbitMQ](https://www.rabbitmq.com/) | [Apache Kafka](https://kafka.apache.org/) | [Amazon SQS](https://aws.amazon.com/sqs/) | [Azure Service Bus](https://azure.microsoft.com/en-us/services/service-bus/) | [Google Pub/Sub](https://cloud.google.com/pubsub/) |    |
|:------------|:---------------------------------------------------|:------------------------------------------------------------------------------------------|:----------------------------|:--------------------------------------|:------------------------------------------|:------------------------------------------|:-----------------------------------------------------------------------------|:---------------------------------------------------|:---|
| **General** |                                                    |                                                                                           |                             |                                       |                                           |                                           |                                                                              |                                                    |    |
|             | Cloud Native                                       |                                                                                           |                             |                                       |                                           |                                           |                                                                              |                                                    |    |
|             | Cloud Agnostic                                     |                                                                                           |                             |                                       |                                           |                                           |                                                                              |                                                    |    |
|             | Docker container support                           |                                                                                           |                             |                                       |                                           |                                           |                                                                              |                                                    |    |
|             | Kubernetes cluster support                         |                                                                                           |                             |                                       |                                           |                                           |                                                                              |                                                    |    |
|             |                                                    |                                                                                           |                             |                                       |                                           |                                           |                                                                              |                                                    |    |
|             |                                                    |                                                                                           |                             |                                       |                                           |                                           |                                                                              |                                                    |    |
|             |                                                    |                                                                                           |                             |                                       |                                           |                                           |                                                                              |                                                    |    |
| **Queue**   |                                                    |                                                                                           | Supported                   | Supported                             | Not Supported                             | Supported                                 | Supported                                                                    | Not Supported                                      |    |
|             | No queue pre-configuration required                | If a pre-configuration of queue is needed before sending and receiving messages           | Yes                         | No                                    |                                           |                                           |                                                                              |                                                    |    |
|             | Number of queues limitation                        | Limitation of how many queues can be supported                                            | Unlimited                   | Unlimited                             |                                           |                                           |                                                                              |                                                    |    |
|             | Send batch messages support                        | Sending a multiple messages to a queue in one call                                        | Unlimited                   | No                                    |                                           |                                           |                                                                              |                                                    |    |
|             | Send messages limitation                           | Limitation of how many messages can be sent in one batch                                  | Unlimited                   | Only 1 at a time                      |                                           |                                           |                                                                              |                                                    |    |
|             | Receive batch messages                             | Receiving                                                                                 | Yes                         | Limited                               |                                           |                                           |                                                                              |                                                    |    |
|             | Receive messages limitation                        |                                                                                           | Unlimited                   | Unlimited                             |                                           |                                           |                                                                              |                                                    |    |
|             | Message size limitation                            |                                                                                           | Unlimited                   | Unlimited                             |                                           |                                           |                                                                              |                                                    |    |
|             | Message retention limitation                       |                                                                                           | Unlimited                   | Unlimited                             |                                           |                                           |                                                                              |                                                    |    |
|             | Peak messages                                      |                                                                                           | Yes                         | No                                    |                                           |                                           |                                                                              |                                                    |    |
|             | Ack all messages (clean queue)                     |                                                                                           | Yes                         | Yes                                   |                                           |                                           |                                                                              |                                                    |    |
|             | Long polling support                               | Ability to set time for how long to wait for messages available in the queue              | Yes                         | Yes                                   |                                           |                                           |                                                                              |                                                    |    |
|             | Message expiration time (TTL) setting support      | Ability to set an expiration time for a message, after that messages will not be available| Yes                         | Yes                                   |                                           |                                           |                                                                              |                                                    |    |
|             | Message expiration time (TTL) setting limitation   |                                                                                           | Unlimited                   | Unlimited                             |                                           |                                           |                                                                              |                                                    |    |
|             | Message delayed delivery time (scheduled messages) |                                                                                           | Yes                         | Yes - via plug-in                     |                                           |                                           |                                                                              |                                                    |    |
|             | Message delayed delivery time limitation           |                                                                                           | Unlimited                   | Plug-in limitation                    |                                           |                                           |                                                                              |                                                    |    |
|             | Dead-Letter queue support                          |                                                                                           | Yes                         | Yes                                   |                                           |                                           |                                                                              |                                                    |    |
|             | Dead-Letter queue max attempts setting support     |                                                                                           | Yes                         | No                                    |                                           |                                           |                                                                              |                                                    |    |
|             | Message visibility time and extension support      |                                                                                           | Yes                         | No                                    |                                           |                                           |                                                                              |                                                    |    |
|             | Message visibility time limitation                 |                                                                                           | Unlimited                   | No                                    |                                           |                                           |                                                                              |                                                    |    |
|             | Resend received message to a new queue support     |                                                                                           | Yes                         | No                                    |                                           |                                           |                                                                              |                                                    |    |
|             | Resend modified message support                    |                                                                                           | Yes                         | Yes                                   |                                           |                                           |                                                                              |                                                    |    |
|             | Transactional queue mode support                   |                                                                                           | Yes                         | Partially                             |                                           |                                           |                                                                              |                                                    |    |
|             | Lost connection re-queue                           | Message send back to the queue in case of consumer disconnect/fail                        | Yes                         | Yes                                   |                                           |                                           |                                                                              |                                                    |    |
|             |                                                    |                                                                                           |                             |                                       |                                           |                                           |                                                                              |                                                    |    |
| **Pub/Sub** |                                                    |                                                                                           | Supported                   | Supported                             | Supported by Amazon MQ only               |                                           |                                                                              |                                                    |    |
|             | No pub/sub pre-configuration required              | If a pre-configuration of pub/sub is needed before sending and receiving messages         | Yes                         | No                                    |                                           |                                           |                                                                              |                                                    |    |
|             | Real-time in memory pub/sub support                | Ability to publish messages in real-time without persistence for high-load of messages    | Yes                         | No (all messages are persisted)       |                                           |                                           |                                                                              |                                                    |    |
|             | Persistence support                                | All messages can be persisted                                                             | Yes                         | Yes                                   |                                           |                                           |                                                                              |                                                    |    |
|             | Replay messages support                            | Replay and receive messages anytime by time,sequence, new etc                             | Yes                         | No                                    |                                           |                                           |                                                                              |                                                    |    |
|             | Group (Load Balancing) support                     | Sharing messages load between group of consumers                                          | Yes                         | No                                    |                                           |                                           |                                                                              |                                                    |    |
|             | Message size limitation                            | Limitation of the size of payload                                                         | Unlimited                   | Unlimited                             |                                           |                                           |                                                                              |                                                    |    |
|             | Stream push mode                                   | Ability to subscribe and get pushed messages instead of connection polling                | Yes                         | No                                    |                                           |                                           |                                                                              |                                                    |    |
|             |                                                    |                                                                                           |                             |                                       |                                           |                                           |                                                                              |                                                    |    |
| **RPC**     |                                                    |                                                                                           |                             |                                       |                                           |                                           |                                                                              |                                                    |    |
|             | No RPC pre-configuration required                  |                                                                                           |                             |                                       |                                           |                                           |                                                                              |                                                    |    |
|             | Command model support                              |                                                                                           |                             |                                       |                                           |                                           |                                                                              |                                                    |    |
|             | Query model support                                |                                                                                           |                             |                                       |                                           |                                           |                                                                              |                                                    |    |
|             | Timeout support                                    |                                                                                           |                             |                                       |                                           |                                           |                                                                              |                                                    |    |
|             | Cache query support                                |                                                                                           |                             |                                       |                                           |                                           |                                                                              |                                                    |    |
|             | Stream push mode                                   |                                                                                           |                             |                                       |                                           |                                           |                                                                              |                                                    |    |
|             | Group (Load Balancing) support                     |                                                                                           |                             |                                       |                                           |                                           |                                                                              |                                                    |    |
|             |                                                    |                                                                                           |                             |                                       |                                           |                                           |                                                                              |                                                    |    |
|             |                                                    |                                                                                           |                             |                                       |                                           |                                           |                                                                              |                                                    |    |
|             |                                                    |                                                                                           |                             |                                       |                                           |                                           |                                                                              |                                                    |    |