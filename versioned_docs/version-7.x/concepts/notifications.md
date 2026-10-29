# Notifications

Notifications are short alerts inside Receipt Wrangler about activity in your groups, such as someone commenting on a
receipt or adding a new one. They collect behind the bell in the header until you clear them.

## The bell

The bell is at the right of the header, between the **Search receipts** box and the Receipt Wrangler logo.

![the header with the notifications bell showing a badge of 5](/img/notifications/bell-badge.png)

The red badge on the bell shows how many notifications you have. Notifications aren't marked as read or unread, so the
number counts every notification you haven't cleared. When you have none, the bell has no badge.

The number doesn't refresh by itself. It updates:

* when you sign in or reload the page;
* each time you open the notifications panel;
* when you clear your notifications with **Mark all as read**.

A notification that arrives while you have the app open shows up the next time you open the panel or reload the page.
Moving between pages in the app doesn't update the number.

## The notifications panel

Click the bell to open the notifications panel below it. To close it, click the bell again, click anywhere outside
the panel, or press **Esc**.

![the notifications panel with two Comment Added and three Receipt Uploaded notifications](/img/notifications/panel.png)

Each notification shows:

* its type in bold, such as **Comment Added** or **Receipt Uploaded**;
* what happened, for example "Jordan Rivera has added a comment to a receipt in group Household.";
* the date it was sent, for example "Oct 29, 2026".

Click a notification to open the receipt it's about. The notification stays in the list, and the panel stays open
until you click outside it, so you can open the next one.

### Mark all as read

**Mark all as read**, at the top of the panel, removes all of your notifications at once. There's no confirmation and
no undo: the notifications are deleted, not kept as read. The list empties and the badge disappears from the bell.

When you have no notifications, the panel reads "All caught up!" and **Mark all as read** is turned off.

![the empty notifications panel reading All caught up!, with Mark all as read turned off](/img/notifications/empty.png)

## What you're notified about

There are two kinds of notification:

| Notification | Sent when | Who gets it |
| --- | --- | --- |
| **Comment Added** | Someone comments on a receipt. | The other members of the receipt's group. |
| **Receipt Uploaded** | A receipt is added to a group, by hand, with Quick Scan or by email. | The members of the group, except the person who added it. |

You aren't notified about your own comments, or about the receipts you add yourself.

### Comment Added

You get **Comment Added** when another member of one of your groups comments on a receipt in that group. It reads, for
example, "Casey Morgan has added a comment to a receipt in group Household." The text doesn't name the receipt. Click
the notification to open it and read the comment.

In a group with **Isolate members** turned on, a member who can't see the comment's author isn't notified about their
comments. Supervisors, and users whose application role lets them see every member, are still notified. See
[Isolate members](./groups/04-managing-groups.md#isolate-members).

### Receipt Uploaded

You get **Receipt Uploaded** when a receipt is added to one of your groups:

* by hand, with **Add Receipt**, with or without images (see
  [Adding Receipts](./receipts/02-managing-receipts.md#adding-receipts));
* with [Quick Scan](./ai.md#quick-scan);
* from an email (see [Email](./email.md)).

It reads, for example, "The receipt: Farmers Market has been uploaded to the group Household. Check it out!"

Everyone in the group gets it except the person who added the receipt. A receipt that arrives by email wasn't added by
a person, so every member of the group gets one.

## What doesn't send a notification

* **Duplicating a receipt.** The copy doesn't send **Receipt Uploaded**, and the comments copied onto it don't send
  **Comment Added**. See [Duplicating Receipts](./receipts/02-managing-receipts.md#duplicating-receipts).
* **Comments added while creating a receipt**, on the **Add Receipt** form or in Quick Scan. The new receipt sends
  **Receipt Uploaded** only. Comments added to the receipt after it's saved do send **Comment Added**.
* **Editing a receipt**, including changing its status. A
  [Bulk Status Update](./receipts/03-receipts-table.md#bulk-status-update) doesn't send one either, even when it leaves
  a comment.
* **Failed Quick Scans and email uploads.** Look for these in [System Tasks](./system-tasks.md) and in a dashboard's
  [Activity](./groups/02-managing-dashboards.md#activity) widget, where you can also retry them.

## Other things to know

* Notifications only appear in the web app. Receipt Wrangler doesn't send email or push notifications, and the mobile
  app has no notifications screen.
* Notifications stay until you clear them with **Mark all as read**, or until your account is deleted (see
  [Delete Account](./user-settings.md#delete-account)).

## Permissions

Two application permissions control notifications. See the
[Permissions Reference](./roles/04-permissions-reference.md).

| Permission | What it does |
| --- | --- |
| **Read Notifications** (`app.notifications.read`) | Shows the bell and lets you see your notifications. Without it, the header has no bell. |
| **Delete Notifications** (`app.notifications.delete`) | Lets you clear your notifications with **Mark all as read**. |

The built-in **Legacy User** role, the default application role for new accounts, and **Legacy Admin** both include
both permissions.
