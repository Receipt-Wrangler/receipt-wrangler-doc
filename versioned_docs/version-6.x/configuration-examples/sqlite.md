# sqlite

Below are some examples for a sqlite based configuration.

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

  redis:
    image: redis:alpine
    environment:
      - REDIS_USERNAME=myuser
      - REDIS_PASSWORD=mypassword
```
