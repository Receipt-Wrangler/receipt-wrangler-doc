# 4.x to 5.x Migration Guide

Before upgrading to version 5.x, please read and follow along with the guide to ensure a smooth transition.

## What gets migrated?

The data that is eligible to be migrated from the config is:

- aiSettings: aiSettings will get migrated to Receipt Processing Settings, and will be set as the global settings to use
  in system settings.
- emailSettings: Valid email settings will be migrated to the new system email settings, and any Group Settings that
  used
  the configured email will also be updated to use the newly imported system email.
- emailPollingInterval: The email polling interval will be migrated to the new system settings.
- features: aiPoweredReceipts does not get migrated, as this value is now derived from whether there is a receipt
  processing settings set in system settings, but enableLocalSignUp will be migrated.

## Steps to migrate

1. The database configuration has moved from the config file, to environment variables. So we need to move the db
   credentials from config.prod.json, to environment variables. Take a look at
   the [example docker compose files](/docs/category/configuration-examples) for examples depending on your db
   configuration. In the end it should look very similar to one of the examples.
2. Back in the docker compose file, add the ENCRYPTION_KEY, and SECRET_KEY environment variables. These are required for
   the app to start. Check out the
   [configuration documentation](/docs/configuration/environment-variables) for more information on these variables.
3. Pull the latest version of all the of the containers. If you are using versioned containers, the latest version will
   be the  ``v5.0.0`` tag.
4. Start the docker compose stack, and check the logs to ensure everything is starting correctly.
5. Before leaving the terminal, copy the contents of, "config.prod.json"  and save it to a json file, we will be using
   this later.
6. Log in to the desktop app as an administrator.
7. Click on user avatar menu, then on "Imports" as pictured
   below: ![User Avatar](/img/migration/menu-with-arrow-on-import.png)
8. Click on the upload button, and select your config file from
   earlier. ![Import Dialog](/img/migration/import-dialog.png)
9. Your file contents will now appear in the dialog, please confirm that the content is
   correct. If so, click the green check mark button at the bottom of the
   dialog. ![Uploaded Config](/img/migration/uploaded-config.png)
10. Your settings should now be imported, and you can now start using the app. Check the System Settings by clicking the
    avatar menu, and everything that you had configured should show up in their respective places. Check out
    the [System Settings](/docs/concepts/system-settings) documentation to learn more about this new area of the app.
