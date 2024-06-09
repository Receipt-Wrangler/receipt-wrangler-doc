# System Emails

System Emails allow Administrators to set up emails to read from to ingest receipts into Receipt Wrangler.

TO access system emails, log in as an administrator, and then click on the avatar menu, and then click the "System
Settings" button, as shown below.
Then click on the "System Emails" tab.

![System Settings](/img/system-settings/system-settings-arrow.png)

## Viewing System Emails

Once the user has navigated to the system emails tab, they will be presented with a table containing the existing system
emails.

### Header Buttons

#### Add System Email

This allows the user to add a new system email.

![System Emails](/img/system-emails/table.png)

Each of the columns can be sorted by clicking on the column header, either ascending or descending, except for the
actions column.

### Actions

### Edit

This allows the user to edit the system email.

### Check Connectivity

This allows the user to check the connectivity of the system email. The result is stored as a system task.

### Delete

This allows the user to delete the system email, as long as it is not used in any group settings. Otherwise, a snackbar
will be displayed that informs the user what the system email is currently related to.

## Managing System Emails

To manage system emails, click on the name hyperlink of the system email you wish to view, or click the edit button in
the actions column.

The following form will be displayed:

![System Emails](/img/system-emails/form-edit.png)

## Header Buttons

- Check Connectivity: This allows the user to check the connectivity of the system email. The result is stored as a
  system
  task, unless it is being created, then a system task will not be created.

## Fields

### Host

This is the host of the email server, specifically the IMAP server. This can be found by googling the email provider's
IMAP settings.

### Port

This is the port of the email server, specifically the IMAP server. This can be found by googling the email provider's
IMAP settings.

### Username

This is the username of the email account that will be used to read emails from, for example: demo@gmail.com.

### Password

This is the password of the email account that will be used to read emails from. This password is stored encrypted in
the database using AES 128 encryption, and it is never exposed in the UI, or transmitted to the frontend.

## System Tasks

### System Email Connectivity Check

This task is either a true or false. If succeeded, the API was able to connect to the email server using the provided
credentials. If failed, the API was not able to connect to the email server using the provided credentials, and the
resulting error is stored in the task.

### Email Read

This task is generated when an email was polled, and a receipt was found, and attempted to be ingested.

This data is captured, and stored in the description field of the task.

An example of the captured data is shown below:

```json
{
  "date": "2021-09-01T00:00:00Z",
  "subject": "Receipt from Amazon",
  "to": "configuredSystemEmail@test.com",
  "fromName": "Jack Doe",
  "fromEmail": "John Doe",
  "attachments": [
    {
      "filename": "receipt.pdf",
      "fileType": "application/pdf",
      "size": 12345
    }
  ],
  "groupSettingsIds": [
    1,
    2,
    3
  ]
}
```

Additionally, the task stores the resulting processing task, and the resulting receipt, if the receipt was successfully,
the same data as the Receipt Processing Settings would show. Check out
the [Receipt Processing Settings](/concepts/system-settings/receipt-processing-settings) documentation for more
information.

