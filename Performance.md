# Performance monitoring

We could use Amazon Managaed Grafana and integrate it with the Microservices deployed in the AWS EKS cluster. Each individual microservices will have their own project dashboard and monitor the number of requests, how long each request took, CPU, memory, etc. This could provide insights on each endpoints and know where is the performance bottenecks.

Possible solutions to use:

Grafana Loki - This could be use for backend logging.

Grafana Tempo - All in one solutions default Grafana features, Loki and Prometheus
