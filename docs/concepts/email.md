# Email

Email integration is a way for users to upload receipts to a group, as a different way to get receipts into the system.
Multiple images can be sent in attachements, and each image will be assumed to be a different receipt. If the image is
malformed (corrupted, not acutally an image), then the file will not be processed.

## Configuration

1. Modify config.prod.json. Check out [the Email configuration section](/docs/next/configuration#emailsettings) to see
   how to set it up.

All of the emails configured in emailSettings will be polled every polling interval, to read unread emails, and process
those that match the group settings, set up in the next step.

2. Modify group settings of the group that will be polling the configured email. Check
   out [the Group settings section](/docs/next/concepts/groups/managing-groups#group-setitings) to see how to set it up.
