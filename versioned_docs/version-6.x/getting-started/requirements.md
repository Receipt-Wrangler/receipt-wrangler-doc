---
sidebar_position: 2
---

# Requirements

Before installing Receipt Wrangler, make sure you have the following prerequisites in place.

## Required

- **Docker and Docker Compose** — Receipt Wrangler is designed to run containerized. See [Installation](/docs/getting-started/installation) for setup details.
- **A supported database** — SQLite, PostgreSQL, MySQL, or MariaDB. See the [configuration examples](/docs/category/configuration-examples) for sample setups. Note: SQLite is not recommended for long-term use due to potential issues with column-specific updates.
- **Redis** — Used internally by the application. A Redis host and port must be provided. See [environment variables](/docs/configuration/environment-variables) for details.
- **ENCRYPTION_KEY and SECRET_KEY** — Required environment variables for encryption and JWT signing. The application will not start without them. See [environment variables](/docs/configuration/environment-variables) for details.

## Optional

- **AI provider** — For features like Magic Fill, Quick Scan, and AI-powered receipt processing. Supported providers include OpenAI, Google Gemini, or a self-hosted OpenAI-compatible LLM such as [Ollama](/docs/configuration/self-hosted-ai). See [AI concepts](/docs/concepts/ai) for more information.
- **IMAP-compatible email account** — For automatic receipt ingestion from email. See [email concepts](/docs/concepts/email) for setup instructions.
