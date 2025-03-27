# sqlite

:::warning

Although sqlite is easy to set up and use, it is not recommended for long term use, as it sometimes has issues with
updating column specific data such as indexes. This can result in bugs in the app that seem to linger forever due to
updates not being applied to the database.

:::

Below are some examples for a sqlite based configuration.

```yaml title="docker-compose.yaml"
services:
  redis:
    image: redis:alpine
    restart: always
    environment:
      - REDIS_USERNAME=myuser
      - REDIS_PASSWORD=mypassword
    healthcheck:
      test: [ "CMD", "redis-cli", "ping" ]
      interval: 10s
      timeout: 10s
      retries: 5

  wrangler:
    image: noah231515/receipt-wrangler:latest
    entrypoint: ./entrypoint.sh
    restart: always
    environment:
      - ENCRYPTION_KEY=encryptionKey
      - SECRET_KEY=secretKey
      - DB_ENGINE=sqlite
      - DB_FILENAME=wrangler.sqlite
      - REDIS_HOST=redis
      - REDIS_PORT=6379
      - REDIS_USERNAME=myuser
      - REDIS_PASSWORD=mypassword
    depends_on:
      redis:
        condition: service_healthy
    volumes:
      - ./data:/app/receipt-wrangler-api/data
      - ./sqlite:/app/receipt-wrangler-api/sqlite
      - ./logs:/app/receipt-wrangler-api/logs
    ports:
      - 9082:80
```
