# Managing Groups

To manage, navigate to manage groups as shown in the previous page. Then click on the name of the group, or the edit
pencil.

Upon clicking either the name or the edit pencil, the user will be navigated to the group details, where users can view
or edit group data.

A group's page has up to three tabs:

![the Group Details, Group Receipt Settings and Group AI Settings tabs above a group's details](/img/groups/settings/group-tabs.png)

| Tab | What it holds | Who can view it | Who can edit it |
| --- | --- | --- | --- |
| **Group Details** | The group's name, status, member isolation and members. | Members with **View Group** (`group.view`), and anyone with **Read All Groups** (`app.groups.read`) | Members with **Update Group** (`group.update`) |
| **Group Receipt Settings** | What the receipt form and Quick Scan show, default custom fields and the receipt summary. See [Group Receipt Settings](./05-group-receipt-settings.md). | Same as Group Details | Members with **Update Group** (`group.update`) |
| **Group AI Settings** | The group's email integration and AI prompts. Only shown when AI receipt processing is set up. | Anyone with **Update Group System Settings** (`app.groups.update-settings`) | Same as view |

Each tab opens in view mode. If you can edit it, click the edit pencil next to the page title, make your changes, and
click **Save**. For the full list of permissions, see the [Permissions Reference](../roles/04-permissions-reference.md).

## Group Details

Here, members whose group role allows it can change general group information and group membership.

![group details](/img/groups/edit_group_details.png)

### Group Name

This field will change the group's name. There are no constraints on the group name, other than it is a required field.

### Status

There are two options for this field:

**Active:** Active groups show up in the groups list on the sidebar  
**Archived:** Archived groups do not show up in the group list on the side, however, receipts in archived groups will
still count towards total owed amounts in the "Summary" dashboard widget.

### Isolate members

When **Isolate members** is checked, the members of this group can't see each other in it. Each member sees only
themselves and the group's supervisors. It's off by default. Nothing is deleted while it's on, so everything shows
again when you turn it off.

![Isolate members checked on Group Details, with its help text](/img/groups/settings/isolate-members.png)

While the group is isolated, a member doesn't see the other members:

* in the **Group Members** list on this page;
* in the group's user pickers, such as **Paid By** on the receipt form, so they can only pick themselves or a
  supervisor;
* through receipts. A receipt paid by a hidden member is left out of the receipts table, search, dashboards, exports
  and reports, even when the member has a share on it;
* in names on the receipts they can see, such as **Added by**;
* in comments and activity. Comments written by a hidden member, and tasks a hidden member ran, don't appear, and the
  member isn't notified about their comments;
* in amounts owed. Money owed between the member and a hidden member in this group isn't counted.

**Supervisors** are the exception. A supervisor is a member whose group role has
**Members with this role can see, and be seen by, all members** checked, in the role's **Member visibility** section
(see [Managing Roles](../roles/02-managing-roles.md)). Supervisors see every member of the group, and every member sees
them. None of the built-in group roles are supervisor roles.

Two more things to know:

* Users whose application role grants **Read Users** (`app.users.read`), such as **Legacy Admin**, still see every
  member. The other members don't see them, though, unless their group role is a supervisor role.
* Isolation only applies inside this group. Two members who also share a group that isn't isolated see each other in
  that group, but still not in this one.

### Group Members

Clicking on the blue plus icon next to the "Group Members" header, or clicking on the edit pencil of the group member
will display the respective form to add or edit a group member as shown below.
![group members](/img/groups/edit_group_member.png)

#### User

The user to add to the current group.

#### Role

The group role assigned to the member, which determines what they can do in this group. Pick from the
group roles defined on the [Roles](../roles/01-overview.md) page; new members start on the configured
default group role. Use the preview button next to the selector to see exactly what a role grants.

Receipt Wrangler ships with three built-in group roles — **Legacy Owner** (full control of the group),
**Legacy Editor** (add, edit, and delete receipts), and **Legacy Viewer** (read-only) — and
administrators can create their own. See [Roles & Permissions](../roles/01-overview.md) for the full
list of group permissions.

<a id="group-settings"></a>

## Group AI Settings

:::info
The **Group AI Settings** tab only appears when AI receipt processing is set up in
[System Settings](../system-settings/01-system-settings.md#receipt-processing-settings). It's only available to
administrators — specifically, anyone whose application role grants **Update Group System Settings**
(`app.groups.update-settings`). This is because these settings contain technical configuration, which should not be
done by regular members.
:::

Clicking on the **Group AI Settings** tab will navigate users to the group's settings. The tab has two sections:
**Email Settings**, which holds the email integration fields below, and [AI Settings](#ai-settings).

### Enable Email Integration

This field will enable the integration. After the email is enabled, a connection will be attempted to be made to the
configured email address on the next polling interval.

### Process Email Body Text

When this is checked, Receipt Wrangler also reads the text in the body of each email, not just its attachments. This
helps with receipts that arrive in the email itself, such as order confirmations. It can only be checked while
**Enable Email Integration** is checked.

![Process Email Body Text checked under Enable Email Integration, with its help text](/img/groups/settings/process-email-body-text.png)

With it checked:

* the body text is sent to the AI along with each attachment;
* an email with no attachments is still read, from its body alone;
* when the email has a formatted (HTML) body, the body is also turned into a PDF. The PDF is read with the email and
  added to the new receipt's images. This shows as an **HTML to PDF** task on the [System Tasks](../system-tasks.md)
  page.

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

If no email whitelist is set, then emails from any sender are read. Once one or more addresses are added to the whitelist, only emails from those addresses are read.

:::

These let the group accept emails only from certain email addresses.

### Default Paid By

This is the user that will be assigned receipts that are uploaded via email.

### Default Status

This will be the status that will be set on receipts that are uploaded via email.

### Caveats

#### Email attachments

When [Process Email Body Text](#process-email-body-text) is off, email attachments are required, since emails are
processed via ocr/ai. If no attachment is found on the email, the email will not be processed. To read emails that
have the receipt in their body, check **Process Email Body Text**.

#### Multiple attachments

Currently, there is no way to group multiple attachments into one receipt. So if 20 attachments are sent, then 20
separate receipts will be created. When **Process Email Body Text** is checked, the email's body is read with each of
them.

### AI Settings

The **AI Settings** section lets the group use its own prompts instead of the ones set in System Settings. Pick from
the prompts under System Settings → **Prompts** (see [Prompts](../system-settings/03-prompts.md)). Clear a field to
go back to the system's prompt.

![AI Settings with a group specific prompt and a fallback group specific prompt selected](/img/groups/settings/ai-settings.png)

#### Group specific prompt

The prompt used to read this group's receipts. It replaces only the prompt: the AI provider, model and OCR engine
still come from the receipt processing settings selected in System Settings (see
[Receipt Processing Settings](../system-settings/02-receipt-processing-settings.md)). When this field is empty, the
prompt of those settings is used.

#### Fallback group specific prompt

The prompt used when the fallback runs, that is, when processing one of this group's receipts with the main settings
fails. It only applies when System Settings has
[Fallback Processing Settings](../system-settings/01-system-settings.md#fallback-processing-settings); without them,
this field is ignored. As with the group specific prompt, everything else comes from the fallback settings.

#### Where the group's prompts are used

* **Quick Scan**: the group picked for each image.
* **Email integration**: the group whose email settings read the email.
* **Magic Fill** on a receipt that has already been saved: the receipt's group.

To check which prompt ran, open the task on the [System Tasks](../system-tasks.md) page. Its **Prompt Used** step is
named after the prompt.
