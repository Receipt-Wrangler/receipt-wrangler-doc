# config.prod.json Setup

Receipt Wrangler has one main configuration file to set up. In a production environment, this file is `config.prod.json`.

# Configuration

Sample config:

```json
{
  "secretKey": "secretKey",
  "aiSettings": {
    "type": "openAi",
    "url": "urlToLocallyHostedLLM",
    "key": "openAiKey"
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

- aiSettings.type: Options are openAi, gemini, or llamaGpt
- aiSettings.url: This value is only used if the the type is set to llamaGpt. F.ex, http://192.168.0.200:3000/api/v1/chat/completions
- aiSettings.key: API key used for openAi, and gemini

## EmailSettings

- emailPollingInterval: This tells the API how often to check the configured email, in seconds
- emailSettings.host: Email provider's imap server
- emailSettings.port: Email provider's imap port
- emailSettings.username: Your email
- emailSettings.password: Your password, or API Key when 2fa is enabled

## Features

- features.enabledLocalSignUp: This field will enable local sign up. If set to false, then only admins can register users
- features.aiPoweredReceipts: This field will enable AI features, such as Magic Fill, Quick Scan, and Email Integration if it is setup

## Database

- database.rootPassword: This is the root password for the database
- database.user: This is the user that will be used to connect to the database
- database.password: This is the password for the user that will be used to connect to the database
- database.name: This is the name of the database
- database.host: This is the host of the database
- database.port: This is the port of the database (Only used for postgresql connections)
- database.engine: This is the engine of the database. Valid options are: sqlite, mysql, mariadb, and postgresql
- database.filename: This is the filename of the sqlite database. This is only used if the engine is set to sqlite