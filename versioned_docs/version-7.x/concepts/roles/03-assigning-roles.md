# Assigning Roles

Creating a role doesn't do anything on its own — a role only matters once it's assigned to someone.
Application roles are assigned to **users**, and group roles are assigned to **group members**.

## Assigning an application role

A user's application role is set when you create or edit the user. From the avatar menu, choose
**Manage Users**, then create a user or edit an existing one.

![the user form with the App Role selector](/img/roles/user-form-app-role.png)

The **App Role** selector lists every application role. New users start on the
[default application role](./01-overview.md#default-roles); change it here to give the user a different
level of access. The eye icon next to the selector previews exactly what the chosen role grants (see
[Previewing a role](#previewing-a-role) below).

See [Users](../users.md) for the rest of the user form.

## Assigning a group role

A member's group role is set when you add them to a group, or when you edit their membership. Open a
group, then add or edit a member to bring up the group member form.

![the group member form with the Role selector](/img/roles/group-member-form-role.png)

Pick the person in the **User** field and their group role in the **Role** field. The Role selector
lists every group role, and new members start on the
[default group role](./01-overview.md#default-roles). As with the user form, the eye icon previews
what the role grants.

See [Managing Groups](../groups/04-managing-groups.md) for more on group membership.

## Previewing a role

Both the user form and the group member form have a preview button next to the role selector. It opens
a read-only summary of the selected role — its scope, description, and every permission it grants,
grouped by resource — so you can confirm you're handing out the right level of access before saving.

![the role preview dialog](/img/roles/role-preview-dialog.png)

## Where role names appear

Once roles are assigned, their names show up wherever people are listed.

On the **Manage Users** page, the **Role** column shows each user's application role.

![the user list showing the Role column](/img/roles/user-list-app-role.png)

In a group's **Group Members** table, the **Group Role** column shows each member's group role.

![the group members table showing the Group Role column](/img/roles/group-members-role.png)
