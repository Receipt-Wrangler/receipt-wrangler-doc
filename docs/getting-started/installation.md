---
sidebar_position: 2
---

# Installation

Receipt Wrangler is designed to run contanerized, below we will go over how it is set up.

## Step 1: Set up docker-compose.yaml

:::warning

If you decide to use the built in proxy, the service names in the compose must remain as they are in the examples, otherwise the proxy will not work.
The ports of each service are free to change, though.

:::

Receipt Wrangler can be set up as either a monolithic app (all in one container), or as microservices (each part as its own container).
[Check out the examples to see which one is best suited for you.](/docs/category/configuration-examples)

## Step 2: Set up config.prod.json

This config needs to be in the directory that gets mounted to /go/api/config from the docker-compose.yaml above. Simply run the compose stack to generate a stubbed out config file, then check out the configuration documentation, below as well as the examples to fill out the config.

See the [config documentation](/docs/configuration) for samples and explanations of each value.

## Step 3: Add proxy in NPM Proxy Manager (Optional):

:::info

If you are using the proxy container in the docker compose stack, skip this step!
:::

If you use npm proxy manager in your setup, we will describe below how it is setup. In general, this step allows us to access the frontend, and proxy frontend api calls to the api container.

### Details Tab

![image](https://github.com/Receipt-Wrangler/.github/assets/44912201/9690b448-93d2-41d7-8852-ef411d7283b5)

### Locations Tab

![image](https://github.com/Receipt-Wrangler/.github/assets/44912201/2fe17995-b4c2-40c1-91d3-c046a6666f4d)

## Step 4: Deploy

If using the proxy container, deploy the stack and point all traffic to the proxy container.
If you are not using the proxy container, point all traffic to the frontend container.

Now it's time to wrangle!
