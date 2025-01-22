# sqlite

Below are some examples for a sqlite based configuration.

## Docker compose microservices (deprecated)

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
      - ./data:/go/api/data
      - ./sqlite:/go/api/sqlite
      - ./logs:/go/api/logs
    environment:
      - ENCRYPTION_KEY=encryptionKey
      - SECRET_KEY=secretKey
      - DB_ENGINE=sqlite
      - DB_FILENAME=wrangler.sqlite
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
      - ENCRYPTION_KEY=encryptionKey
      - SECRET_KEY=secretKey
      - DB_ENGINE=sqlite
      - DB_FILENAME=wrangler.sqlite
    volumes:
      - ./data:/app/receipt-wrangler-api/data
      - ./sqlite:/app/receipt-wrangler-api/sqlite
      - ./logs:/app/receipt-wrangler-api/logs
    ports:
      - 9082:80
```
