# Permissions Reference

This page lists every permission Receipt Wrangler recognizes. These are the building blocks you toggle
on and off when [creating a role](./02-managing-roles.md#permissions).

Permission keys follow the pattern `scope.domain.action` (sometimes with a sub-domain, e.g.
`app.receipt-processing-settings.read`). The scope is either `app` for
[application permissions](#application-permissions) or `group` for
[group permissions](#group-permissions). Most domains are split into the granular
`create` / `read` / `update` / `delete` actions, with a few standalone actions for things that don't
fit that pattern.

## Application permissions

These belong to **application** roles and govern what a person can do across the whole installation.

### User Management

| Permission | Key | What it allows |
| --- | --- | --- |
| Create Users | `app.users.create` | Create new user accounts. |
| Read Users | `app.users.read` | List and look up user accounts. |
| Update Users | `app.users.update` | Edit user profiles, reset passwords, and convert dummy users. |
| Delete Users | `app.users.delete` | Delete users individually or in bulk. |

### AI

| Permission | Key | What it allows |
| --- | --- | --- |
| Create AI Prompts | `app.prompts.create` | Create new AI prompt definitions. |
| Read AI Prompts | `app.prompts.read` | View the AI prompt library. |
| Update AI Prompts | `app.prompts.update` | Edit existing AI prompts. |
| Delete AI Prompts | `app.prompts.delete` | Remove AI prompts. |

### Catalog

| Permission | Key | What it allows |
| --- | --- | --- |
| Create Categories | `app.categories.create` | Create new categories. |
| Read Categories | `app.categories.read` | List and look up categories. |
| Update Categories | `app.categories.update` | Edit existing categories. |
| Delete Categories | `app.categories.delete` | Remove categories. |
| Create Tags | `app.tags.create` | Create new tags. |
| Read Tags | `app.tags.read` | List and look up tags. |
| Update Tags | `app.tags.update` | Edit existing tags. |
| Delete Tags | `app.tags.delete` | Remove tags. |
| Create Custom Fields | `app.custom-fields.create` | Create new custom field definitions. |
| Read Custom Fields | `app.custom-fields.read` | List and look up custom fields. |
| Delete Custom Fields | `app.custom-fields.delete` | Remove custom field definitions. |

### System

| Permission | Key | What it allows |
| --- | --- | --- |
| Read System Settings | `app.system-settings.read` | View system settings. |
| Update System Settings | `app.system-settings.update` | Edit system settings. |
| Restart Task Server | `app.system-settings.restart-task-server` | Restart the background task worker. |
| Create Receipt Processing Configs | `app.receipt-processing-settings.create` | Add new OCR/AI processing configurations. |
| Read Receipt Processing Configs | `app.receipt-processing-settings.read` | View and test OCR/AI processing configurations. |
| Update Receipt Processing Configs | `app.receipt-processing-settings.update` | Edit OCR/AI processing configurations. |
| Delete Receipt Processing Configs | `app.receipt-processing-settings.delete` | Remove OCR/AI processing configurations. |
| Create System Email | `app.system-emails.create` | Add inbound email integrations. |
| Read System Email | `app.system-emails.read` | View and test inbound email integrations. |
| Update System Email | `app.system-emails.update` | Edit inbound email integrations. |
| Delete System Email | `app.system-emails.delete` | Remove inbound email integrations. |
| Read System Tasks | `app.system-tasks.read` | Inspect the system-wide activity log. |
| Import Configuration | `app.imports.run` | Restore or seed the system from a configuration export. |

### Group Management

| Permission | Key | What it allows |
| --- | --- | --- |
| Create Groups | `app.groups.create` | Create new groups. |
| Read All Groups | `app.groups.read` | List and look up groups across the system, including ones you are not a member of. |
| Update Group System Settings | `app.groups.update-settings` | Edit system-level settings on any group. |

### Security

| Permission | Key | What it allows |
| --- | --- | --- |
| Create API Keys | `app.api-keys.create` | Issue API keys for yourself. |
| Read API Keys | `app.api-keys.read` | List your own API keys. |
| Read Any API Key | `app.api-keys.read-any` | List API keys belonging to other users. |
| Update API Keys | `app.api-keys.update` | Edit your own API keys. |
| Delete API Keys | `app.api-keys.delete` | Revoke your own API keys. |
| Delete Any API Key | `app.api-keys.delete-any` | Revoke API keys belonging to other users. |

### Access Control

| Permission | Key | What it allows |
| --- | --- | --- |
| Create Roles | `app.roles.create` | Create new application or group roles. |
| Read Roles | `app.roles.read` | List roles and view the permission catalog (required to open **Manage Roles**). |
| Update Roles | `app.roles.update` | Edit existing roles. |
| Delete Roles | `app.roles.delete` | Remove roles. |

### Account

These cover a person's own data, and are held by ordinary users so everyone can manage their own
account.

| Permission | Key | What it allows |
| --- | --- | --- |
| Read Notifications | `app.notifications.read` | View your own notifications and unread count. |
| Delete Notifications | `app.notifications.delete` | Dismiss your own notifications. |
| Read User Preferences | `app.user-preferences.read` | View your own user preferences. |
| Update User Preferences | `app.user-preferences.update` | Edit your own user preferences. |
| Read Own Account | `app.account.read` | Read your own profile, claims, groups, and app data. |
| Update Own Account | `app.account.update` | Edit your own profile. |
| Delete Own Account | `app.account.delete` | Delete your own account. |

### Receipts

| Permission | Key | What it allows |
| --- | --- | --- |
| Search Receipts | `app.receipts.search` | Search across receipts you can access. |

## Group permissions

These belong to **group** roles and govern what a member can do **inside a single group**.

### Group

| Permission | Key | What it allows |
| --- | --- | --- |
| View Group | `group.view` | See the group, its members, and metadata. |
| Update Group | `group.update` | Edit group name, settings, and receipt-handling configuration. |
| Delete Group | `group.delete` | Permanently delete the group. |
| Poll Inbound Email | `group.email.poll` | Trigger an inbound email poll for the group's inbox. |

### Receipts

| Permission | Key | What it allows |
| --- | --- | --- |
| Create Receipts | `group.receipts.create` | Upload images and create receipts. |
| Read Receipts | `group.receipts.read` | Read, list, and export receipts. |
| Update Receipts | `group.receipts.update` | Edit receipts and update status in bulk. |
| Delete Receipts | `group.receipts.delete` | Remove receipts. |
| Duplicate Receipts | `group.receipts.duplicate` | Create a copy of an existing receipt. |
| Magic Fill Receipts | `group.receipts.magic-fill` | Run AI-powered data extraction on a receipt image to pre-fill fields. |
| Quick Scan Receipts | `group.receipts.quick-scan` | Use the Quick Scan flow to rapidly capture and create receipts. |
| Create Comments | `group.comments.create` | Add comments to receipts. |
| Delete Comments | `group.comments.delete` | Remove comments. |

### Dashboards

| Permission | Key | What it allows |
| --- | --- | --- |
| Create Dashboards | `group.dashboards.create` | Create dashboards for the group. |
| Read Dashboards | `group.dashboards.read` | View dashboards. |
| Update Dashboards | `group.dashboards.update` | Edit dashboards. |
| Delete Dashboards | `group.dashboards.delete` | Remove dashboards. |
| Read Widgets | `group.widgets.read` | Read widget data (charts, summaries). |

### Activity

| Permission | Key | What it allows |
| --- | --- | --- |
| Read Activities | `group.activities.read` | View the activity feed for the group. |
| Rerun Activities | `group.activities.rerun` | Re-execute a failed or stale activity. |
