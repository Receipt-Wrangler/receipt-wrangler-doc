# Environment Variables

Receipt Wrangler uses a number of environment variables to configure the application. Below is a list of the available
environment variables and their default values.

:::info
Check out https://www.random.org/strings/ to generate random strings for the encryption key and secret key.

:::

## ENCRYPTION_KEY (Required)

The encryption key is required, and the application will fail to start, unless it is provided. The encryption key is
used to encrypt sensitive information, such as email passwords, and API Keys.

The provided key must be at least one character long, and ideally randomly generated. Internally, the provided keys are
transformed using the MD5
hashing algorithm, thus, every key input will have an output of 128 bits which is then used to encrypt and decrypt via
AES-128 bit encryption.

:::warning
This encryption key cannot currently be rotated. If this key is changed, all encrypted data will not be accessible and
will result
in errors since the encrypted data will not be able to be decrypted.

The records with encrypted data will need to deleted and recreated if this happens.

However, if the key is set back to the correct key, the data will be accessible again.

:::

## SECRET_KEY (Required)

This is the secret key used to sign, and verify JWT tokens. This key is required, and the application will fail to
start, unless it is provided.

The provided key should be between 16 and 32 characters long, randomly generated.

## DB_USER

The database user that the application will use to connect to the database.

## DB_PASSWORD

The database password that the application will use to connect to the database.

## DB_HOST

The database host that the application will use to connect to the database.

## DB_PORT

The database port that the application will use to connect to the database.

## DB_NAME

The database name that the application will use to connect to the database.

## DB_ENGINE

The database engine that the application will use to connect to the database.

valid options are:

* sqlite
* postegresql
* mysql
* mariadb

## DB_FILIENAME

The filename of the SQLite database that the application will use to connect to the database.

## REDIS_HOST (Required)

The Redis host that the application will use to connect to the Redis server.

## REDIS_PORT (Required)

The Redis port that the application will use to connect to the Redis server.

## REDIS_USER

The Redis user that the application will use to connect to the Redis server.

## REDIS_PASSWORD

The Redis password that the application will use to connect to the Redis server.
