# sqlite

Below are some examples for a sqlite based configuration.

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
    "engine": "sqlite",
    "filename": "wrangler.sqlite"
  }
}

```

## Docker compose microservices

```yaml title="docker-compose.yaml"
version: "3.5"
services:
  api:
    image: noah231515/receipt-wrangler-api:latest
    restart: always
    working_dir: /go/api
    command: ./api --env prod
    ports:
      - 9080:8081
    volumes:
      - ./config:/go/api/config
      - ./data:/go/api/data
      - ./sqlite:/go/api/sqlite
      - ./logs:/go/api/logs
  proxy:
    image: noah231515/receipt-wrangler-proxy:latest
    ports:
      - 9082:80
    depends_on:
      - api
      - frontend

  frontend:
    image: noah231515/receipt-wrangler-desktop:latest
    restart: always
    ports:
      - 9081:80
```

## Docker compose monolithic

```yaml title="docker-compose.yaml"
services:
  wrangler:
    image: noah231515/receipt-wrangler:latest
    entrypoint: ./entrypoint.sh
    restart: always
    environment:
      DB_FILENAME: wrangler.sqlite
      DB_ENGINE: sqlite
    volumes:
      - ./config:/app/receipt-wrangler-api/config
      - ./data:/app/receipt-wrangler-api/data
      - ./sqlite:/app/receipt-wrangler-api/sqlite
      - ./logs:/app/receipt-wrangler-api/logs
    depends_on:
      db:
        condition: service_healthy
    ports:
      - 9082:80
```
