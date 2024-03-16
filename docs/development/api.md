# API

Receipt Wrangler API is a Go application. Below we'll go through on setting it up in a development environment, and walk
through some of the important technologies.

## Prerequisites

* Debian environment (highly recommended)
* Go https://go.dev/doc/install
* Python 3.8+ https://www.python.org/downloads/

## Setup

1. Clone the repository https://github.com/Receipt-Wrangler/receipt-wrangler-api.git
2. Install tesseract dependencies. If you are running a debian derivative (recommended),
   run `sudo sh set-up-tesseract-env.sh`, otherwise see https://github.com/otiai10/gosseract for other installation
   details.
3. Install OpenAPI generator https://openapi-generator.tech/docs/installation (I personally use the jar installation)
4. Set up a db instance however you like. Sqlite is the easiest route to go. Otherwise, docker is recommended.
   Example mariadb docker
   command: `docker run --name receipt-wrangler-db -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_USER=wrangler -e MYSQL_PASSWORD=123456 -e MYSQL_DATABASE=wrangler -p 9001:3306 -d library/mariadb`.
5. Add a config.dev.json, and configure as needed. See the [config documentation](/docs/configuration) for more details.
6. In the terminal navigate to the root project directory
7. Run `go run .`

## Running the application

Once the application is running it will be running on `http://0.0.0.0:8081`, and will accept connections from the mobile
app, and desktop app.

## Tech overview

This project uses:

- Go for API
- Python for Imap client
- mariadb/mysql/postgresql/sqlite
- GORM as the ORM (currently no migration tracking. Any needed data backpops/fixes are done after deployment via
  endpoint)
- Overall, no framework is used for the API
- Uses built in test runner
- Uses OpenAPI 3.0, maintained by hand to generate clients. Example command to generate
  client: `java -jar swagger-codegen-cli.jar generate -i ./receipt-wrangler-api/swagger.yml -o ./receipt-wrangler-core/projects/core/src/lib/api/ -l typescript-angular`

