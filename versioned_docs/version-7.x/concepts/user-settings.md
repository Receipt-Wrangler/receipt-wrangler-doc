# User Settings

User Settings is where you manage your own account: the name and avatar color other people see, a few preferences that
change how the app works for you, your API keys, and deleting your account.

## Opening User Settings

Click your avatar at the top of the sidebar and choose **User Settings**. If the sidebar is closed, open it first with
the **Toggle sidebar** button in the header.

![the avatar menu with User Settings](/img/user-settings/avatar-menu.png)

The page has three tabs. Each one needs its own permission in your application role:

| Tab | What it's for | To see it | To edit it |
| --- | --- | --- | --- |
| **User Profile** | Your display name and avatar color, and deleting your account | **Read Own Account** (`app.account.read`) | **Update Own Account** (`app.account.update`) |
| **User Preferences** | Quick Scan defaults, how option lists behave, and your header shortcuts | **Read User Preferences** (`app.user-preferences.read`) | **Update User Preferences** (`app.user-preferences.update`) |
| **API Keys** | Keys that let scripts and other apps use Receipt Wrangler as you | **Read API Keys** (`app.api-keys.read`) | See [API Keys](./api-keys.md) |

You only see the tabs your role allows, and User Settings opens on the first of them. If your role allows none of
them, the avatar menu has no **User Settings** entry. The built-in **Legacy User** and **Legacy Admin** roles include
all of these permissions. See the [Permissions Reference](./roles/04-permissions-reference.md) for the full list.

### Viewing and editing

**User Profile** and **User Preferences** open in view mode, with every field read-only. To change something:

1. Click the pencil (**Edit**) next to the page title. You only see it if your role lets you edit that tab.
2. Make your changes.
3. Click **Save** at the bottom of the page.

After saving, the page goes back to view mode.

## User Profile

![the User Profile tab in view mode](/img/user-settings/user-profile-view.png)

The **User Details** section has three fields:

| Field | What it does |
| --- | --- |
| **Username** | The name you log in with. It's always read-only here. In edit mode, hovering it shows "Only system admin may change your username." |
| **Displayname** | The name everyone sees in the app, for example as **Paid By** on receipts and next to your comments. It's required. |
| **Default avatar color** | The background color of your avatar. Type a hex color such as `#27b1ff`, or click the color swatch to pick one. |

Your avatar is the circle with the first letter of your display name. It sits at the top of the sidebar, where it
opens the avatar menu and shows your display name when you hover it. It also appears next to your comments on
receipts.

When you save, you see "User profile successfully updated", and your new name and color show straight away.

![the User Profile tab in edit mode, with the tooltip on the read-only Username field](/img/user-settings/user-profile-edit.png)

### Username and password

You can't change your own username or password in User Settings. Ask an administrator: they change both from
**Manage Users**, as described on the [Users](./users.md) page.

## User Preferences

![the User Preferences tab in view mode, with Quick scan defaults, Selection preferences and one shortcut](/img/user-settings/user-preferences-view.png)

Saving this tab shows "User preferences successfully updated".

### Quick scan defaults

These fields pre-fill [Quick Scan](./ai.md#quick-scan), so you don't have to pick the same values for every receipt you
scan. The section only appears when AI receipt processing is set up on your server.

| Field | What it pre-fills |
| --- | --- |
| **Group** | The group each scanned receipt goes into. You can pick any of your groups except **All**. |
| **Default Paid By** | Who paid. It stays read-only until you pick a **Group**, and it only lists that group's members. Clearing the **Group** clears it too. |
| **Status** | The receipt's status: **Open**, **Needs Attention**, **Resolved**, **Draft** or **Declined**. Leave it blank for no default. |

Each time you add an image in Quick Scan, its **Group**, **Paid By** and **Status** fields start with these values. You
can still change them for each image before you submit. If you haven't set a default group and you belong to only one
group, Quick Scan picks that group for you.

A group's own Quick Scan settings come first. If the group hides the **Paid By** or **Status** field in Quick Scan,
your default for that field isn't used, and the receipt gets the group's default instead. See
[Group Receipt Settings](./groups/05-group-receipt-settings.md#quick-scan).

The mobile app uses the same defaults for its Quick Scan. You set them here, in the web app.

### Selection preferences

**Close the option list after each selection?** changes how multi-select fields behave: the ones that show your
choices as chips, such as categories, tags, users and groups.

* **Off** (the default): the list of options stays open after you pick one, so you can pick several in a row.
* **On**: the list closes after each pick.

This setting only affects the web app.

### Shortcuts

Shortcuts are your own links, shown as icon buttons in the header after the **Dashboard** and **Receipt List**
buttons. Hover a shortcut to see its name. Click it to open its address in the same browser tab.

![the header with a shopping cart shortcut and its name, Household receipts, shown as a tooltip](/img/user-settings/header-shortcut.png)

To add a shortcut:

1. Click the pencil to edit the page, then click **+** (**Add shortcut**) next to **Shortcuts**. An **Add Shortcut**
   card opens.
2. Fill in all three fields:
   * **Name**: shown when you hover the shortcut.
   * **Url**: the address to open. To link to a page in Receipt Wrangler, copy its address from your browser's address
     bar. The part after the server name works too, such as `/receipts/group/9`.
   * **Icon**: start typing to search the icons by name, such as "chart" or "cart", and pick one.
3. Click the check button (**Save**) on the card. The shortcut is saved and appears in the header.

To close the card without adding the shortcut, click the **X** button (**Cancel**) instead.

![the Shortcuts section in edit mode, with an Add Shortcut card filled in below an existing shortcut](/img/user-settings/shortcut-add-card.png)

To change a shortcut, edit the page, click the pencil (**Edit**) on the shortcut's row, change the fields, and click
the check button. To remove one, edit the page, click the trash can (**Delete**) on its row, then click **Save**.

Shortcuts only appear in the web app.

## Delete Account

At the bottom of the **User Profile** tab, the **Danger Zone** has a **Delete Account** button. You see it if your role
has the **Delete Own Account** permission (`app.account.delete`).

![the Danger Zone with the Delete Account button](/img/user-settings/danger-zone.png)

To delete your account:

1. Click **Delete Account**. The **Delete Account** dialog opens.
2. Enter your **Password**. The eye button shows what you typed.
3. Click the check button (**Delete Account**).

![the Delete Account dialog asking for your password](/img/user-settings/delete-account-dialog.png)

If the password is wrong, you see "Error deleting account." and the dialog opens again, so you can try again or click
the **X** button (**Cancel**). When the password is right, your account is deleted and you're logged out. You land on
the login page with the message "Your account has been successfully deleted".

:::warning
Deleting your account can't be undone, and it removes more than your login. It permanently deletes:

* every receipt where you're the **Paid By**, in every group, including groups you share with other people;
* your shares on other people's receipts;
* every group where you're the only member, such as your own **My Receipts** group, with all of its receipts;
* your dashboards, API keys, notifications and preferences, including your shortcuts.

Your comments stay on their receipts, but without an author. Groups you share with others stay, without you as a
member.
:::

The last administrator can't delete their account. Here an administrator is anyone whose application role includes
**Read Users** (`app.users.read`), like the built-in **Legacy Admin** role. If you're the only one, give another user
such a role first.

Administrators can also delete other users' accounts from **Manage Users**. See
[Delete User](./users.md#delete-user).

## API Keys

The **API Keys** tab lists your API keys, which let scripts and other apps use Receipt Wrangler as you. For creating,
editing and deleting keys, and what administrators can see there, see [API Keys](./api-keys.md).
