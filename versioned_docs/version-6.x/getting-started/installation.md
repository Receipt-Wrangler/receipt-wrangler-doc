---
sidebar_position: 2
---

# Installation

Receipt Wrangler is designed to run containerized, below we will go over how it is set up.

## Step 1: Set up docker-compose.yaml

:::warning

In the compose files, please leave the service names as they are. Changing them will break the communication between
containers.

:::

Receipt Wrangler can be set up as either a monolithic app (all in one container), or as microservices (each part as its
own container).

[Check out the examples to see which one is best suited for you.](/docs/category/configuration-examples)

[Check out the available environment variables as well.](/docs/configuration/environment-variables)

## Step 2: Deploy

:::info

The proxy container in the compose examples is used internally to route traffic to the frontend and api containers. It
is highly recommended to use the provided proxy container for ease of use. The monolithic container has the proxy built
in, so it is not
needed.

:::

Deploy the docker compose stack, and point all traffic to the proxy container.
Now it's time to wrangle!
