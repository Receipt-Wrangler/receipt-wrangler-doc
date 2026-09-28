# Group Receipt Settings

The **Group Receipt Settings** tab controls how receipts are entered and summarized in a group: which parts of the
receipt form show, which custom fields new receipts start with, the receipt summary on the receipts table, and which
fields Quick Scan asks for.

## Opening Group Receipt Settings

Open the group as described in [Managing Groups](./04-managing-groups.md), then click the **Group Receipt Settings**
tab.

| To | You need |
| --- | --- |
| View the tab | **View Group** (`group.view`) in the group, or **Read All Groups** (`app.groups.read`) |
| Edit and save it | **Update Group** (`group.update`) in the group |
| See and change **Default Custom Fields** and **Currency Fields to Total** | **Read Custom Fields** (`app.custom-fields.read`), as well |

See the [Permissions Reference](../roles/04-permissions-reference.md) for all permissions. **Read All Groups** on its
own lets you view the tab, but not edit it.

The tab opens in view mode, with every setting greyed out. If you can edit, click the edit pencil next to the page
title, change the settings, and click **Save**. The app shows "Receipt settings updated successfully" and goes back
to view mode.

## Settings

The **Settings** section hides parts of the receipt form for this group, so members only see what the group uses. For
example, a group that doesn't use tags can hide them everywhere on the form. All of these are off by default.

![the Settings section in view mode, with Hide Receipt Tags, Hide Item Tags and Hide Share Tags checked](/img/groups/settings/receipt-settings-hide.png)

| Setting | What it hides on the receipt form |
| --- | --- |
| **Hide Images** | The whole **Images** section, including uploading images and **Magic Fill**. |
| **Hide Receipt Categories** | The receipt's **Categories** field. |
| **Hide Receipt Tags** | The receipt's **Tags** field. |
| **Hide Item Categories** | **Categories** on [items](../receipts/02-managing-receipts.md#items). |
| **Hide Item Tags** | **Tags** on items. |
| **Hide Share Categories** | **Categories** on [shares](../receipts/02-managing-receipts.md#shares). |
| **Hide Share Tags** | **Tags** on shares. |
| **Hide Comments** | The **Comments** section. It also hides the comment field in Quick Scan (see [Comment](#comment)). |

The form uses the settings of the group picked in its **Group** field, as soon as the group is picked.

These settings only change what the receipt form shows in the web app. They don't delete anything: values already on
a receipt are kept, and show again if you turn the setting off. The receipts table and export aren't affected, so
their **Categories** and **Tags** columns still show. Quick Scan has its own settings (see [Quick Scan](#quick-scan));
of the settings above, only **Hide Comments** changes it.

## Default Custom Fields

Default custom fields are added to the group's receipts for you, so members don't have to remember them. To set them
up, pick one or more existing custom fields in **Default Custom Fields**. To create a custom field, see
[Managing Custom Fields](../custom-fields/03-managing-custom-fields.md).

![Default Custom Fields with Tip selected, and Also add them to quick scan and email created receipts checked](/img/groups/settings/default-custom-fields.png)

On the receipt form:

* the fields are added, empty, as soon as the group is picked. They also show, empty, on the group's existing
  receipts until someone fills them in;
* they're never required, and you can remove them like any other custom field;
* if you switch a receipt to another group, a default field you left empty is removed. A field you filled in stays.

**Also add them to quick scan and email created receipts** is off by default. When it's checked, the same fields are
added, empty, to the receipts that Quick Scan and email integration create. A field the AI already filled in isn't
added twice.

This section only shows for users whose application role grants **Read Custom Fields** (`app.custom-fields.read`).
The fields are also only added to the receipt form for those users. For everyone else, receipts are created without
them. The built-in **Legacy User** and **Legacy Admin** roles both grant it.

## Receipt Summary

The **Receipt Summary** section adds a block of totals to the group's receipts table. It covers every receipt that
matches the table's filters, not just the page on screen, and everyone in the group sees it.

| Setting | What it does |
| --- | --- |
| **Show the receipt summary** | Turns the summary on. Off by default. |
| **Summary position** | **Below the table** (the default) or **Above the table**. |
| **Break down by status** | Adds a row for each checked status: **Open**, **Needs Attention**, **Resolved**, **Draft** or **Declined**. None are checked by default. |
| **Currency Fields to Total** | Currency custom fields to total alongside the amount. Only currency fields can be picked. Needs **Read Custom Fields**. |

To see what the summary looks like, see [Receipt Summary](../receipts/03-receipts-table.md#receipt-summary) on the
Receipts Table page.

## Quick Scan

The **Quick Scan** section chooses which fields the [Quick Scan](../ai.md#quick-scan) dialog asks for when this group
is picked for an image, and which of them must be filled in.

![the Quick Scan section with Paid By shown but optional, Status hidden, and their defaults below them](/img/groups/settings/quick-scan-settings.png)

Each field has two checkboxes: **Show** puts the field in the dialog, and **Require** makes it required. **Require**
only counts when **Show** is checked.

| Field | Shown by default | Required by default |
| --- | --- | --- |
| **Paid By** | Yes | Yes |
| **Status** | Yes | Yes |
| **Categories** | No | No |
| **Tags** | No | No |
| **Comment** | No | No |

Categories and tags picked in the dialog are added to any the AI chooses.

### Default Paid By and Default Status

Every receipt needs a paid by and a status. So when **Paid By** or **Status** isn't both shown and required, a default
appears under it. You must choose the default before you can save.

* **Default Paid By**: **Uploader**, the person running the Quick Scan, or **Specific user**. For **Specific user**,
  choose a group member in **Default Paid By User**.
* **Default Status**: the status the receipt gets.

The default is used when the field is hidden, or left empty in the dialog. If the AI returns a paid by or status
itself, for example because a custom prompt asks for one, the AI's value is used instead.

### Comment

The **Comment** field adds a comment to the new receipt, written by the person running the scan. It can be up to 500
characters. It depends on two other things:

* While **Hide Comments** is checked in [Settings](#settings), the **Comment** checkboxes are greyed out and Quick Scan
  has no comment field. Your choices are kept, and apply again when **Hide Comments** is turned off.
* Members whose group role doesn't grant **Create Comments** (`group.comments.create`) never see the field, even when
  it's required, so they can still scan.

:::warning
Requiring a comment blocks Quick Scan in older versions of the mobile app, released before the comment field was
added, until those users update. The section shows this warning when **Require** is checked.
:::

### What the dialog shows

Until you pick a group for an image, the Quick Scan dialog only shows **Group**. Once a group is picked, the fields that
group shows appear. The scan can't be submitted until every image has its required fields filled in.

![the Quick Scan dialog after picking Weekend Trip, showing Paid By, Categories and a required Comment](/img/groups/settings/quick-scan-dialog.png)

### Your own Quick scan defaults

Each user can set their own Quick scan defaults, a default group, paid by and status, in their
[user settings](../user-settings.md#quick-scan-defaults). They work together with the group's settings:

* Your defaults pre-fill each image you add. If you have no default group but belong to only one group, that group is
  picked.
* If the picked group doesn't show a field, your pre-filled value is cleared and the group's default is used.
* Otherwise, what's in the dialog wins: a value there, pre-filled or chosen, is used over the group's default.

### Email receipts

These Quick Scan settings don't apply to receipts created by email. Those use the **Default Paid By** and
**Default Status** in the group's email settings instead (see
[Managing Groups](./04-managing-groups.md#default-paid-by)).
