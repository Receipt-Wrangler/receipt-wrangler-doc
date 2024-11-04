# Networking

## Working with Traefic (Thanks to u/rmath3ws!)

For those that are using Traefic and Receipt Wrangler, there may be some issues with using Traefic that have not been
addressed yet in Receipt Wrangler. Below is a link to discussion in the Receipt Wrangler subreddit that may help
configuration.

Original thread: https://www.reddit.com/r/receiptwrangler/comments/1gc7qus/receipt_wrangler_and_reverse_proxy/
Additionally, here is an example config with Traefic labels defined.

```yaml title="docker-compose.yaml"
services:
  db:
    image: library/mariadb:10
    restart: unless-stopped
    environment:
      - MYSQL_ROOT_PASSWORD=<>
      - MYSQL_USER=<>
      - MYSQL_PASSWORD=<>
      - MYSQL_DATABASE=<>
    volumes:
      - ./mariadb:/var/lib/mysql
    #    networks:
    #      - proxynet
    healthcheck:
      test: [ "CMD", "mysqladmin", "ping", "--silent" ]
      interval: 10s
      timeout: 10s
      retries: 5

  wrangler:
    image: noah231515/receipt-wrangler:latest
    entrypoint: ./entrypoint.sh
    restart: unless-stopped
    volumes:
      - ./data:/app/receipt-wrangler-api/data
      - ./sqlite:/app/receipt-wrangler-api/sqlite
    environment:
      - ENCRYPTION_KEY=<>
      - SECRET_KEY=<>
      - DB_USER=<>
      - DB_PASSWORD=<>
      - DB_NAME=<>
      - DB_HOST=db
      - DB_PORT=3306
      - DB_ENGINE=mariadb
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.wrangler.entrypoints=http"
      - "traefik.http.routers.wrangler.rule=Host(`wrangler.example.com`)"
      - "traefik.http.middlewares.wrangler-https-redirect.redirectscheme.scheme=https"
      - "traefik.http.routers.wrangler.middlewares=wrangler-https-redirect"
      - "traefik.http.routers.wrangler-secure.entrypoints=https"
      - "traefik.http.routers.wrangler-secure.rule=Host(`wrangler.example.com`)"
      - "traefik.http.routers.wrangler-secure.tls=true"
      - "traefik.http.routers.wrangler-secure.service=wrangler"
      - "traefik.http.services.wrangler.loadbalancer.server.port=80"
      - "traefik.docker.network=proxy"
    depends_on:
      db:
        condition: service_healthy
    ports:
      - 9082:80
#    networks:
#      - proxynet
#networks:
#  proxynet:
#    external: true

```
