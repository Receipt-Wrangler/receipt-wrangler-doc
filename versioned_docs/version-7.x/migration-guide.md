# 6.x to 7.x Migration Guide

Before upgrading to version 7.x, please read along with the guide so you know what to expect.

## What changed in 7.x

Version 7.x replaces Receipt Wrangler's fixed roles with a configurable **roles and permissions**
system. Where older versions had two hard-coded application roles (Admin and User) and three group
roles (Owner, Editor, and Viewer), administrators can now build their own roles from granular
permissions, at both the application and group level. See
[Roles & Permissions](./concepts/roles/01-overview.md) for a full tour.

## Are there any breaking changes?

**No.** The upgrade is automatic and preserves everyone's access exactly.

:::info
You do not need to reassign anyone or change any configuration. When you start version 7.x, Receipt
Wrangler migrates your existing users and group members onto equivalent **Legacy** roles, so everyone
keeps the same access they had on 6.x.
:::

## What gets migrated?

No receipt, group, or user data is changed. Only the role model is upgraded, and it happens
automatically on first startup:

1. Receipt Wrangler creates five built-in **Legacy** roles whose permissions reproduce the old fixed
   roles **exactly**. They are marked as **System** roles, so they can't be edited or deleted.
2. Every existing user is assigned the matching Legacy **application** role, and every existing group
   member is assigned the matching Legacy **group** role.

Each old role maps onto its Legacy equivalent like this:

| Before (6.x) | After (7.x) | Scope |
| --- | --- | --- |
| Admin | **Legacy Admin** | Application |
| User | **Legacy User** | Application |
| Owner | **Legacy Owner** | Group |
| Editor | **Legacy Editor** | Group |
| Viewer | **Legacy Viewer** | Group |

### What the Legacy roles grant

The Legacy roles carry the same capabilities the old roles did:

- **Legacy Admin** — every application permission. A full administrator, exactly like the old Admin
  role.
- **Legacy User** — a standard user: create groups, search receipts, create categories and tags, and
  manage their own account, API keys, notifications, and preferences. No administration. This matches
  what an old User could do.
- **Legacy Owner** — every group permission. Full control of the group, exactly like the old Owner
  role.
- **Legacy Editor** — add, edit, delete, and duplicate receipts, run Quick Scan, and everything a
  viewer can do. This matches the old Editor role.
- **Legacy Viewer** — read receipts, work with dashboards, comment, run Magic Fill, and poll email,
  but not add or edit receipts. This matches the old Viewer role.

For the exact permission each Legacy role includes, see the
[Permissions Reference](./concepts/roles/04-permissions-reference.md).

## What's different after upgrading

- **You can now build your own roles.** Open **Manage Roles** from the avatar menu to create custom
  application and group roles, then assign them to users and members. The Legacy roles remain
  available as a safe baseline.
- **The "a group must have an owner" rule is gone.** Group access is now governed entirely by group
  roles and permissions, so there is no special owner that a group is required to keep.
- **Defaults preserve old behavior.** New accounts are given the **Legacy User** application role and
  group creators are given the **Legacy Owner** group role, so people and groups created after the
  upgrade behave just like they did before. An administrator can change these defaults at any time.

## Steps to migrate

1. If you use versioned containers, bump your version to `v7.0`. If you use `latest`, no change is
   needed.
2. Pull the latest version of the container, and start or restart the container.
3. On startup, Receipt Wrangler seeds the Legacy roles and assigns them to your existing users and
   group members automatically — there is no manual migration step.
4. Log in and confirm everything looks right. Existing users should be able to do exactly what they
   could before. To start using the new system, open **Manage Roles** and explore or create roles —
   see [Roles & Permissions](./concepts/roles/01-overview.md).
