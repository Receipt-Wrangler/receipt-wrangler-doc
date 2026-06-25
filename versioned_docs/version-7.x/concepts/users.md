# Users

Below we'll go over users, and their role in Receipt Wrangler.

## Overview

Users are how people can log in, and interact with various things in Receipt Wrangler.

## Managing Users

Managing users requires an application role that grants the user-management permissions — the built-in
**Legacy Admin** role, or any role you create that includes the `app.users.*` permissions (see
[Roles & Permissions](./roles/01-overview.md)). To manage users, click on the user avatar as shown
below, and click, "Manage Users".
![wrangler-avatar-menu](/img/wrangler-avatar-menu.png)

After clicking manage users, takes us to the users table, where various actions can be performed on users.

![wrangler-avatar-menu](/img/users/user-table.png)

### Create/Edit User

To create a user, click on the "Create User" button.
To edit a user, click on the edit pencil icon.

After clicking on create, or edit, the respective form will appear as shown below.

![wrangler-avatar-menu](/img/users/user-form.png)

### Username

The username of the user. The username is used for authentication purposes, and can only be changed by an admin.

### Displayname

The display name of the user. This is the name that will be shown in the application and can be changed by users
themselves.

### Password

The password of the user. This is used for authentication purposes, and currently can only be changed by an admin.

### App Role

The application role assigned to the user, which determines what they can do across the app. Pick from
the application roles defined on the [Roles](./roles/01-overview.md) page; new users start on the
configured default application role. Use the preview button next to the selector to see exactly what a
role grants before saving.

See [Roles & Permissions](./roles/01-overview.md) to learn how roles work and how to create your own.

### Dummy User

This field is used to represent a person that is not actually using Receipt Wrangler.  
For example:  
Jim Bob and Jeff all go on a vacation to Mexico, but Jim is the only Receipt Wrangler User.
Jim can create dummy users for Bob and Jeff and add them to his groups so that he can represent Bob and Jeff in Jim's
receipts.

As a result, dummy users do not have passwords set, and are blocked from logging in.
They can be converted from a dummy user to a regular user, but not a regular user to a dummy user.

To convert a dummy user to a regular user, click on the person icon in the actions column.

![wrangler-avatar-menu](/img/users/convert-dummy.png)

After clicking on the person icon, the following dialog will appear, where the user may set the password of the user.
Upon saving, the user will be converted and will be allowed to login.
![wrangler-avatar-menu](/img/users/dummy-password-set.png)

## Password Set

To set a user's password, click on the triple asterisk icon.
This will open the following dialog, where the user's password can be set.
![wrangler-avatar-menu](/img/users/set-password.png)

### Password

Password to set for the user.

## Delete User

To delete a user, click on the delete icon. This will open a dialog to confirm the deletion of the user.
Once confirmed, the user will be deleted.

Deleting a user is quite destructive, and it will remove the following:

* The user from all the groups it was in
* The user's groups where it was the only member
* All the receipts where the user paid
* The user's receipt items that may exist on other receipts

The user's comments will remain intact, however.
![wrangler-avatar-menu](/img/users/delete-user.png)

