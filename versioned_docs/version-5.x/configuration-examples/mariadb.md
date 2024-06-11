# mariadb

Below are some examples for a mariadb/mysql based configuration.

## Docker compose microservices

```yaml title="docker-compose.yaml"
version: "3.5"
services:
  db:
    image: library/mariadb:10
    restart: always
    command: --sql-mode="ANSI_QUOTES"
    environment:
      - MYSQL_ROOT_PASSWORD=change_me
      - MYSQL_USER=wrangler
      - MYSQL_PASSWORD=change_me
      - MYSQL_DATABASE=wrangler
    volumes:
      - ./mariadb:/var/lib/mysql
    healthcheck:
      test: [ "CMD", "mysqladmin", "ping", "--silent" ]
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
    working_dir: /go/api
    command: ./api --env prod
    ports:
      - 9080:8081
    volumes:
      - ./data:/go/api/data
      - ./logs:/go/api/logs
    environment:
      - ENCRYPTION_KEY=encryptionKey
      - SECRET_KEY=secretKey
      - DB_USER=wrangler
      - DB_PASSWORD=changeMe
      - DB_NAME=wrangler
      - DB_HOST=db
      - DB_PORT=3306
      - DB_ENGINE=mariadb
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
    image: library/mariadb:10
    restart: always
    environment:
      - MYSQL_ROOT_PASSWORD=change_me
      - MYSQL_USER=wrangler
      - MYSQL_PASSWORD=change_me
      - MYSQL_DATABASE=wrangler
    volumes:
      - ./mariadb:/var/lib/mysql
    healthcheck:
      test: [ "CMD", "mysqladmin", "ping", "--silent" ]
      interval: 10s
      timeout: 10s
      retries: 5

  wrangler:
    image: noah231515/receipt-wrangler:latest
    entrypoint: ./entrypoint.sh
    restart: always
    volumes:
      - ./data:/app/receipt-wrangler-api/data
      - ./sqlite:/app/receipt-wrangler-api/sqlite
    environment:
      - ENCRYPTION_KEY=encryptionKey
      - SECRET_KEY=secretKey
      - DB_USER=wrangler
      - DB_PASSWORD=changeMe
      - DB_NAME=wrangler
      - DB_HOST=db
      - DB_PORT=3306
      - DB_ENGINE=mariadb
    depends_on:
      db:
        condition: service_healthy
    ports:
      - 9082:80
```
