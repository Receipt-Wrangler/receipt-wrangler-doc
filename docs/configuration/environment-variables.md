# Environment Variables

Receipt Wrangler uses a number of environment variables to configure the application. Below is a list of the available
environment variables and their default values.

:::info
Check out https://www.random.org/strings/ to generate random strings for the encryption key and secret key.

:::

## ENCRYPTION_KEY (Required)

The encryption key is required, and the application will fail to start, unless it is provided. The encryption key is
used to encrypt sensitive information, such as email passwords, and API Keys.

The application accepts any non-empty value, but for security you should provide a long, randomly generated key (16–32
characters is recommended). Internally, the provided key is hashed with SHA-256 and truncated to 128 bits, which is
then used to encrypt and decrypt data via AES-128 GCM.

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

## DB_ENGINE

The database engine that the application will use to connect to the database.

valid options are:

* sqlite
* postgresql
* mysql
* mariadb

## DB_FILENAME

The filename of the SQLite database the application will use (for example `wrangler.sqlite`). Required when `DB_ENGINE`
is `sqlite`; the file is stored in the `sqlite` directory.

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

:::note
`DB_USER`, `DB_PASSWORD`, `DB_HOST`, `DB_PORT`, and `DB_NAME` apply to the networked engines (`postgresql`, `mysql`,
`mariadb`). For `sqlite`, only `DB_FILENAME` is used.

:::

## REDIS_HOST (Required)

The Redis host that the application will use to connect to the Redis server. Redis is required: it backs the background
job queue (OCR, email polling, scheduled tasks), and the application will fail to start if it cannot connect.

## REDIS_PORT (Required)

The Redis port that the application will use to connect to the Redis server.

## REDIS_USER

The Redis user that the application will use to connect to the Redis server. Optional — leave unset if your Redis
server has no authentication configured.

## REDIS_PASSWORD

The Redis password that the application will use to connect to the Redis server. Optional — leave unset if your Redis
server has no authentication configured.

## Advanced

These have sensible defaults and are only needed for specialized setups (controlling the headless browser used for
some receipt rendering).

### CHROMIUM_BINARY_PATH

Path to the Chromium binary. Defaults to `/usr/bin/chromium`.

### CHROMIUM_SANDBOX

Whether Chromium runs with its sandbox enabled. Defaults to `false`.

### CHROMIUM_ALLOW_EXTERNAL_RESOURCES

Whether Chromium is allowed to load external resources while rendering. Defaults to `false`.
