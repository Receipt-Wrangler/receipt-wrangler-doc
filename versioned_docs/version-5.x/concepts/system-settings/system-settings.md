# System Settings

System settings are where app-wide configurations are stored.

To access to system settings, log in as an administrator, and then click on the avatar menu, and then click the
"System Settings" button, as shown below.

![System Settings](/img/system-settings/system-settings-arrow.png)

## Managing System Settings

Once the user has navigated to the system settings page, they will be presented with the following screen to view,
to view/edit the system settings.

![System Settings](/img/system-settings/system-settings-form.png)

### Enable Local Sign Up

This field determines whether users can sign up for an account. If checked, users can sign up for an account. Otherwise,
user accounts will need to be created by an administrator.

### Debug OCR

This field determines whether OCR debugging is enabled. When enabled, OCR timing information will be logged, and the
processed image will be stored in the temp directory for debugging purposes. This is primarily for developers.

### Number of Workers

Applies to Quick Scan and defaults to 1. This value limits how many GoRoutines can run *per*
quick scan request.
For example, if this
value is set to 2, and Jen and Bob quick scan 5 files each at the same time, then Jen and Bob will have at max two of
their
files each processed in parallel.

GoRoutines are much lighter than threads, so this value can be higher. The value
depends on memory resources, and instance size. If you have a small instance, a value between 5 or 10 could be fine.
On a server with a lot of traffic, then a value like 1 or 2 would be more appropriate. If you're not sure, set it to 3
and test it out. If the server runs out of memory, it may crash, and you'll need to lower the value.

### Email polling interval in seconds

This field determines how often enabled email integrations are polled for new emails. The default value is 1800 seconds,
or
30 minutes.

### Receipt Processing Settings

This field contains the Receipt Processing Settings used by the app globally. Setting this field allows email
integrations to be used, as well as quick scans, and magic fill.

### Fallback Processing Settings

This field contains the Fallback Processing Settings used by the app globally. These fallback settings are used when the
primary Receipt Processing Settings fail to process a receipt, then the fallback settings are used.
