# Managing Groups

To manage, navigate to manage groups as shown in the previous page. Then click on the name of the group, or the edit
pencil.

Upon clicking either the name or the edit pencil, the user will be navigated to the group details, where users can view
or edit group data.

## Group Details

Here group owners can change general group information, and group membership information.

![group details](/img/groups/edit_group_details.png)

### Group Name

This field will change the group's name. There are no constraints on the group name, other than it is a required field.

### Status

There are two options for this field:

**Active:** Active groups show up in the groups list on the sidebar  
**Archived:** Archived groups do not show up in the group list on the side, however, receipts in archived groups will
still count towards total owed amounts in the "Summary" dashboard widget.

### Group Members

Clicking on the blue plus icon next to the "Group Members" header, or clicking on the edit pencil of the group member
will display the respective form to add or edit a group member as shown below.
![group members](/img/groups/edit_group_member.png)

#### User

The user to add to the current group.

#### Role

**Owner:** Can add, edit, and delete receipts in the group, and can add and remove users from the group.  
**Editor:** Can add, edit, and delete receipts in the group, but cannot add or remove users from the group, or change
the group details or settings.  
**Viewer:** Can only view receipts in the group, but cannot add or edit receipts.

## Group Settings

:::info
Group settings are now only editable by Administrators. This is because group settings contains technical configuration,
which should not be done by users.
:::

Clicking on the "Group Settings" tab will navigate users to the group settings screen.

### Enable Email Integration

This field will enable the integration. After the email is enabled, a connection will be attempted to be made to the
configured email address on the next polling interval.

### Email to Read Receipts From field

The "Email to Read Receipts From" field must match a username from the email settings configured in the last step, this
will tell the api that this group is using this email.

### Subject Line Regexes

:::warning

If no subject line regexes are set, then any subject line is permissable.

:::

These regexes drive which emails are read for this group.

### Email Whitelist

:::warning

If no subject line regexes are set, or email whitelists are added, then ALL emails will be read.

:::

These emails will allow group owners to only accept emails from certain email addresses.

### Default Paid By

This is the user that will be assigned receipts that are uploaded via email.

### Default Status

This will be the status that will be set on receipts that are uploaded via email.

### Caveats

#### Email attachments

Currently, email attachments are required, since emails are processed via ocr/ai. If no attachment is found on the
email,
the email will not be processed.

#### Multiple attachments

Currently, there is no way to group multiple attachments into one receipt. So if 20 attachments are sent, then 20
separate receipts will be created.
