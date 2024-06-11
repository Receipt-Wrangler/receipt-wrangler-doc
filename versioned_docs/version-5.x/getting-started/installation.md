---
sidebar_position: 2
---

# Installation

Receipt Wrangler is designed to run contanerized, below we will go over how it is set up.

## Step 1: Set up docker-compose.yaml

:::warning

If you decide to use the built in proxy, the service names in the compose must remain as they are in the examples,
otherwise the proxy will not work.
The ports of each service are free to change, though.

:::

Receipt Wrangler can be set up as either a monolithic app (all in one container), or as microservices (each part as its
own container).
[Check out the examples to see which one is best suited for you.](/docs/category/configuration-examples)

## Step 2: Add proxy in NPM Proxy Manager (Optional):

:::info

If you are using the proxy container in the docker compose stack, skip this step!
:::

If you use npm proxy manager in your setup, we will describe below how it is setup. In general, this step allows us to
access the frontend, and proxy frontend api calls to the api container.

### Details Tab

![image](https://github.com/Receipt-Wrangler/.github/assets/44912201/9690b448-93d2-41d7-8852-ef411d7283b5)

### Locations Tab

![image](https://github.com/Receipt-Wrangler/.github/assets/44912201/2fe17995-b4c2-40c1-91d3-c046a6666f4d)

## Step 3: Deploy

- With proxy:
    - Deploy the docker compose stack, and point all traffic to the proxy container
- Without proxy:
    - Deploy the docker compose stack, and point all traffic to the forntend container

Now it's time to wrangle!
