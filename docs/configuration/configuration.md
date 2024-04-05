# config.prod.json Setup

Receipt Wrangler has one main configuration file to set up. In a production environment, this file
is `config.prod.json`.

# Configuration

Sample config:

```json
{
  "secretKey": "secretKey",
  "aiSettings": {
    "type": "openAi",
    "url": "http://192.168.0.1:1234/v1/chat/completions",
    "key": "openAiKey",
    "model": "model",
    "numWorkers": 1
  },
  "emailPollingInterval": 1800,
  "emailSettings": [
    {
      "host": "emailHost",
      "port": "emailPort",
      "username": "emailAddress",
      "password": "password/apiKey"
    }
  ],
  "features": {
    "enableLocalSignUp": true,
    "aiPoweredReceipts": true
  },
  "database": {
    "rootPassword": "root",
    "user": "wrangler",
    "password": "changeMe",
    "name": "wrangler",
    "host": "localhost",
    "port": 3306,
    "engine": "sqlite",
    "filename": "wrangler.sqlite"
  }
}
```

## Misc

- secretKey: This key is used to sign jwts generated from the server.

## AiSettings

- aiSettings.type: Options are openAi, openAiCustom, gemini
- aiSettings.model: This value is currently only used when the type is set to openAiCustom. This field is optional, but
  allows the model to be explicit, instead of whichever model is currently loaded on the server.
- aiSettings.url: This value is only used if the type is set to openAiCustom.
  F.ex, http://192.168.0.200:3000/api/v1/chat/completions
- aiSettings.key: API key used for openAi, and gemini
- aiSettings.numWorkers: Applies to Quick Scan and defaults to 1. This value limits how many GoRoutines can run *per*
  quick scan request.
  For example, if this
  value is set to 2, and Jen and Bob quick scan 5 files each at the same time, then Jen and Bob will have at max two of
  their
  files each processed in parallel. GoRoutines are much lighter than threads, so this value can be higher. The value
  depends on memory resources, and instance size. If you have a small instance, a value between 5 or 10 could be fine.
  On a server with a lot of traffic, then a value like 1 or 2 would be more appropriate. If you're not sure, set it to 3
  and test it out. If the server runs out of memory, it may crash, and you'll need to lower the value.

## EmailSettings

- emailPollingInterval: This tells the API how often to check the configured email, in seconds
- emailSettings.host: Email provider's imap server
- emailSettings.port: Email provider's imap port
- emailSettings.username: Your email
- emailSettings.password: Your password, or API Key when 2fa is enabled

## Features

- features.enabledLocalSignUp: This field will enable local sign up. If set to false, then only admins can register
  users
- features.aiPoweredReceipts: This field will enable AI features, such as Magic Fill, Quick Scan, and Email Integration
  if it is setup

## Database

- database.rootPassword: This is the root password for the database
- database.user: This is the user that will be used to connect to the database
- database.password: This is the password for the user that will be used to connect to the database
- database.name: This is the name of the database
- database.host: This is the host of the database
- database.port: This is the port of the database (Only used for postgresql connections)
- database.engine: This is the engine of the database. Valid options are: sqlite, mysql, mariadb, and postgresql
- database.filename: This is the filename of the sqlite database. This is only used if the engine is set to sqlite
