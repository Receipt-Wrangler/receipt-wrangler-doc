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

Receipt Wrangler runs as a monolithic app — a single container that bundles the API and web interface — alongside the
database and Redis services it depends on.

[Check out the examples to get started.](/docs/category/configuration-examples)

[Check out the available environment variables as well.](/docs/configuration/environment-variables)

## Step 2: Deploy

Deploy the docker compose stack, and point all traffic to the `wrangler` container.
Now it's time to wrangle!
