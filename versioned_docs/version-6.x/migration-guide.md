# 5.x to 6.x Migration Guide

Before upgrading to version 6.x, please read and follow along with the guide to ensure a smooth transition.

## What gets migrated?

No data is migrated during this process. The only thing that needs to be added is a redis instance.

## Steps to migrate

1. If using versioned containers, bump your version to v6.0, if using latest then no action is needed
2. Edit your docker compose to include Redis instance and include Redis environment variables.
   See [configuration examples](/docs/category/configuration-examples)
3. Pull the latest version of the container, and start or restart the container
4. Receipt Wrangler should not be running and able to connect to Redis, and the database. If not, then check the logs
   for errors, and double-check the environment variables.
