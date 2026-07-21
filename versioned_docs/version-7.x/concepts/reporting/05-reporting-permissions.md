# Reporting Permissions

Reporting is governed by its own set of permissions, layered on top of the roles and group access you
already use elsewhere. This page explains every reporting permission and exactly how they combine to
decide what a person can do. For the full catalog of permission keys, see the
[Permissions Reference](../roles/04-permissions-reference.md); to configure roles, see
[Managing Roles](../roles/02-managing-roles.md).

## Application permissions

Reporting adds a family of **application** permissions, held through a person's application role. Each
reporting action comes as a pair: a **base** permission, and an **"…All"** counterpart that lifts the
per-group and per-template restrictions for that one action.

The base permissions are:

| Permission | Key | What it allows |
| --- | --- | --- |
| Access Reports | `app.reports.read` | Open the report builder and view saved report templates. |
| Save Report Templates | `app.reports.create` | Save a new report template. |
| Update Report Templates | `app.reports.update` | Change an existing template. |
| Delete Report Templates | `app.reports.delete` | Remove a template. |
| Duplicate Report Templates | `app.reports.duplicate` | Copy a template. |
| Generate Reports | `app.reports.generate` | Generate and download reports. |

Every base permission has an **"…All"** counterpart — `app.reports.readAll`, `app.reports.createAll`,
`app.reports.updateAll`, `app.reports.deleteAll`, `app.reports.duplicateAll`, and
`app.reports.generateAll`. An "…All" permission lets its holder perform that one action on **any**
template, skipping the per-group access check and the per-template restrictions described below.

:::info
Mind the spelling: the bypass permissions end in `All` with no separator — `app.reports.readAll`, not
`app.reports.read-all`.
:::

## The group permission

Reporting adds one **group** permission, held through a person's group role:

| Permission | Key | What it allows |
| --- | --- | --- |
| Read Reports | `group.reports.read` | Generate and download reports over that group's receipts. |

Think of `group.reports.read` as the **access ceiling** for a group: a report can only ever include a
group's receipts when the person running it has this permission there. Because a report covers one or
more groups, this is checked in **every** group the report touches.

## How access is decided

For an action on a **saved template** — viewing, generating, updating, deleting, or duplicating it —
Receipt Wrangler works through three layers, and the most restrictive one wins:

1. **The bypass.** If your application role grants the action's **"…All"** permission, you're allowed on
   any template, and the remaining layers are skipped.
2. **The base permission.** Otherwise, you must hold the matching base `app.reports.<action>` permission.
   Without it, you're denied.
3. **Per-group access and the template matrix.** Finally, for **every** group the template covers, you
   must hold `group.reports.read` there **and** your group role's [template matrix](#per-template-access)
   must allow that action.

:::info
An "…All" permission bypasses **both** the per-group `group.reports.read` ceiling **and** the
per-template matrix — but only for its own action. Holding `app.reports.readAll`, for instance, lets you
*view* every template, and grants nothing about generating, editing, deleting, or duplicating them.
:::

## Per-template access

By default, a group role can act on every template its group access allows. To narrow that, an
administrator can restrict a **group role** to specific templates and actions using the
**Report template access** matrix in the role editor — the rows are templates, the columns are
**View**, **Generate**, **Edit**, **Delete**, and **Duplicate**.

The matrix follows one important rule:

- **Leave it entirely empty for unrestricted access.** A group role with nothing checked can perform any
  action on every template its group access allows.
- **Check something to restrict.** As soon as any cell is checked for a role, that role becomes limited to
  exactly the template-and-action combinations you've checked, and loses access to everything else.

A restricted role stays restricted. If every template it was granted is later deleted, it doesn't quietly
revert to seeing everything — it sees nothing until you grant it access again. This is deliberate: turning
restriction on is an explicit choice, so it can't be undone by accident.

For a step-by-step of configuring the matrix, see
[Managing Roles → Report template access](../roles/02-managing-roles.md#report-template-access).

:::info
The matrix scopes *actions* on templates. It sits on top of the real data controls — a report still only
ever contains receipts the person running it can see, limited by `group.reports.read` and by the
category, tag, and paid-by restrictions on their group role.
:::

## Creating and ad-hoc reports

Two flows don't go through the per-template matrix, because there's no saved template to scope:

- **Creating a template** requires the **Save Report Templates** permission (`app.reports.create`, or
  `app.reports.createAll`) and, unless you hold `createAll`, `group.reports.read` in every group you
  attach. You can never point a template at a group whose receipts you can't read. The same rule applies
  when you change a template's groups on update.
- **Generating a one-off report** from the builder (without saving a template) requires
  `app.reports.generate` and `group.reports.read` in every group in scope.

**Duplicating a template** produces a new template that carries no per-template grants of its own. A role
with an unrestricted (all-empty) matrix can act on the copy right away, but a role that's restricted to
specific templates gains no access to the copy until an administrator grants it the new template's cells —
duplication never lifts an existing restriction.

## Viewing versus downloading

On the [Reports list](./03-report-templates.md) and the
[Report dashboard widget](./04-dashboard-widget.md), viewing and downloading are gated separately:

- **Viewing** a report (opening a template, or seeing the widget's rendered output) requires the
  template's **View** access — the `read` action above.
- **Downloading** a report requires the template's **Generate** access — the `generate` action above.

That's why a widget can render a report for you while showing no download button, and why the action
buttons on a template's row reflect only what you can actually do with it.

## Worked examples

- **View but not download.** A group role is granted **View** on a template but not **Generate**. Members
  can open it in the builder and see it on a dashboard, but the **Generate** and download actions never
  appear.
- **Restricted to one template.** A group role has **View** and **Generate** checked for a single
  template and nothing else. Members can see and run only that template — every other template is hidden
  from their list.
- **A reporting administrator.** An application role holds the "…All" permissions
  (`app.reports.readAll`, `app.reports.generateAll`, and so on). Members can view, generate, and manage
  every template across every group, regardless of any per-template matrix.

## Who has reporting to begin with

Reporting is available to administrators out of the box, but not to ordinary users by default. The
built-in **Legacy Admin** role holds every reporting permission, including the "…All" ones. The built-in
**Legacy User** role does **not** grant **Access Reports**, **Generate Reports**, or **Duplicate Report
Templates**, so a standard user won't see the **Reports** menu until you give them a custom application
role that includes those permissions. See [System roles](../roles/01-overview.md#system-roles).
