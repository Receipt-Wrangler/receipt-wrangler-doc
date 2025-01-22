# postgresql

Below are some examples for a postgresql based configuration.

```yaml title="docker-compose.yaml"
services:
  db:
    image: postgres
    restart: always
    environment:
      - POSTGRES_USER=wrangler
      - POSTGRES_PASSWORD=change_me
      - POSTGRES_DB=wrangler
    volumes:
      - ./pgsql:/var/lib/pgsql
    healthcheck:
      test: [ "CMD-SHELL", "pg_isready", "-d", "db_prod" ]
      interval: 10s
      timeout: 10s
      retries: 5

  wrangler:
    image: noah231515/receipt-wrangler:latest
    entrypoint: ./entrypoint.sh
    restart: always
    volumes:
      - ./data:/app/receipt-wrangler-api/data
      - ./logs:/app/receipt-wrangler-api/logs
    environment:
      - ENCRYPTION_KEY=encryptionKey
      - SECRET_KEY=secretKey
      - DB_USER=wrangler
      - DB_PASSWORD=changeMe
      - DB_NAME=wrangler
      - DB_HOST=db
      - DB_PORT=5432
      - DB_ENGINE=postgresql
    depends_on:
      db:
        condition: service_healthy
    ports:
      - 9082:80

  redis:
    image: redis:alpine
    environment:
      - REDIS_USERNAME=myuser
      - REDIS_PASSWORD=mypassword
```
