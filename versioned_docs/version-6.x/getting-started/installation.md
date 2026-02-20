---
sidebar_position: 3
---

# Installation

Receipt Wrangler is designed to run containerized, below we will go over how it is set up.

## Step 1: Set up docker-compose.yaml

:::warning

In the compose files, please leave the service names as they are. Changing them will break the communication between
containers.

:::
First thing we need to do is set up the docker compose file. Check out the link to some examples below, these will help
you get something working ASAP.

Additionally, take a look at the environment variables to see what you can configure, and explanations
of each variable.

[Examples](/docs/category/configuration-examples)

[All environment variables](/docs/configuration/environment-variables)

## Step 2: Deploy

Deploy the docker compose stack, and point all traffic to the container.
Now it's time to wrangle!
