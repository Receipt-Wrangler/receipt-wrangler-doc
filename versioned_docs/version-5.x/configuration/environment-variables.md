# Environment Variables

Receipt Wrangler uses a number of environment variables to configure the application. Below is a list of the available
environment variables and their default values.

## #ENCRYPTION_KEY (Required)

The encryption key is required, and the application will fail to start, unless it is provided. The encryption key is
used to encrypt sensitive information, such as email passwords, and API Keys.

## #SECRET_KEY (Required)

This is the secret key used to sign, and verify JWT tokens. This key is required, and the application will fail to
start, unless it is provided.

## #DB_USER

The database user that the application will use to connect to the database.

## #DB_PASSWORD

The database password that the application will use to connect to the database.

## #DB_HOST

The database host that the application will use to connect to the database.

## #DB_PORT

The database port that the application will use to connect to the database.

## #DB_NAME

The database name that the application will use to connect to the database.

## #DB_ENGINE

The database engine that the application will use to connect to the database.

valid options are:

* sqlite
* postegresql
* mysql
* mariadb
