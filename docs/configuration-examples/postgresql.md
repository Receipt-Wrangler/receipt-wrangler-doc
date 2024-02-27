# postgresql

Below are some examples for a postgresql based configuration.

## Main config

```javascript title="config.prod.json"
{
  "secretKey": "secretKey",
  "aiSettings": {
    "type": "openAi",
    "url": "urlToLocallyHostedLLM",
    "key": "openAiKey"
  },
  "emailPollingInterval": 1800,
  "emailSettings": [
    {
      "host": "emailHost",
      "port": "emailPort",
      "username": "emailAddress",
      "password": "password/apiKey"
    }
  ],
  "features": {
    "enableLocalSignUp": true,
    "aiPoweredReceipts": true
  },
  "database": {
    "user": "wrangler",
    "password": "changeMe",
    "name": "wrangler",
    "host": "db",
    "port": 5432,
    "engine": "postgresql"
  }
}
```

## Docker compose microservices

```yaml title="docker-compose.yaml"
version: "3.5"
services:
  db:
    image: postgres
    restart: always
    environment:
      POSTGRES_USER: wrangler
      PGUSER: wrangler
      POSTGRES_PASSWORD: change_me
      POSTGRES_DB: wrangler
    volumes:
      - ./pgsql:/var/lib/pgsql
    healthcheck:
      test: ["CMD-SHELL", "pg_isready", "-d", "db_prod"]
      interval: 10s
      timeout: 10s
      retries: 5

  proxy:
    image: noah231515/receipt-wrangler-proxy:latest
    ports:
      - 9082:80
    depends_on:
      - api
      - frontend

  api:
    image: noah231515/receipt-wrangler-api:latest
    restart: always
    command: ./api --env prod
    ports:
      - 9080:8081
    volumes:
      - ./config:/go/api/config
      - ./data:/go/api/data
      - ./logs:/go/api/logs
    depends_on:
      db:
        condition: service_healthy

  frontend:
    image: noah231515/receipt-wrangler-desktop:latest
    restart: always
    ports:
      - 9081:80
```

## Docker compose monolithic

```yaml title="docker-compose.yaml"
services:
  db:
    image: postgres
    restart: always
    environment:
      POSTGRES_USER: wrangler
      POSTGRES_PASSWORD: change_me
      POSTGRES_DB: wrangler
    volumes:
      - ./pgsql:/var/lib/pgsql
    healthcheck:
      test: ["CMD-SHELL", "pg_isready", "-d", "db_prod"]
      interval: 10s
      timeout: 10s
      retries: 5

  wrangler:
    image: noah231515/receipt-wrangler:latest
    entrypoint: ./entrypoint.sh
    restart: always
    volumes:
      - ./config:/app/receipt-wrangler-api/config
      - ./data:/app/receipt-wrangler-api/data
      - ./logs:/app/receipt-wrangler-api/logs
    depends_on:
      db:
        condition: service_healthy
    ports:
      - 9082:80
```
