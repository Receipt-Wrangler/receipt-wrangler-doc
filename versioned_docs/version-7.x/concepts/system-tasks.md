# System Tasks

System tasks are Receipt Wrangler's log of the work it has done. That covers background work, such as reading receipt
emails or running AI on an uploaded image, and actions people trigger, such as editing a receipt or checking a
connection. Each task records when it ran, who started it, whether it worked, and what happened.

The **System Tasks** page is where you go to troubleshoot:

- **AI processing**: follow each step of a Quick Scan or Magic Fill (the text OCR read, the prompt used and the AI's
  raw response) and see which step failed.
- **Email imports**: see which receipt emails were read and how each receipt in them was processed.
- **Receipt edits**: see exactly what changed each time a receipt was saved.
- **Failed uploads**: preview or download the original file behind a failed Quick Scan or email upload.

## Opening System Tasks

Click the user avatar, choose **System Settings**, then select the **System Tasks** tab.

To see the tab, your application role needs the **Read System Tasks** permission (`app.system-tasks.read`); see the
[Permissions Reference](./roles/04-permissions-reference.md). The built-in **Legacy Admin** role includes it and
**Legacy User** doesn't, so ordinary users don't see this page unless you give them a role that includes it. See
[System roles](./roles/01-overview.md#system-roles).

The list isn't limited to your own groups. It shows tasks from every group, plus tasks that don't belong to a group,
such as connectivity checks and API key deletions.

:::note
Because the list covers every group, anyone with **Read System Tasks** can read task details for the whole
installation, including the full before-and-after contents of edited receipts. Only give it to people who should see
that.
:::

## The task list

![The System Tasks page, filtered to four task types and sorted oldest first](/img/system-tasks/system-tasks-page.png)

| Column | What it shows |
| --- | --- |
| **Started At** | When the task started. |
| **Ended At** | When the task finished. |
| **Type** | What kind of task it is. See [Task types](#task-types). |
| **Ran By** | The person who started the task, or **System** for work the app did on its own. |
| **Description** | The task's result or error message. Some types add a button that opens more detail; see [Task details](#task-details). |
| **Status** | An icon only: a green check mark means **Succeeded** and a red exclamation mark means **Failed**. See [Statuses](#statuses). |
| **Source File** | Preview and download buttons for the original file of a failed upload. See [Source files](#source-files). |
| (last column) | An arrow that expands the row, on tasks made up of several steps. |

Tasks are listed newest first by **Started At**, 50 to a page. Click a column heading to sort by that column, and click
it again to reverse the order. Use the controls under the table to move between pages or to show 5, 15, 25, 50 or 100
tasks per page.

The list doesn't update itself while you have it open. To load tasks that have run since then, select
**Refresh System Tasks**, the right-most button above the table.

## Filtering the list

Select **Filter System Tasks** (the funnel button) to narrow down the list.

![The Filter System Tasks dialog with two types and a Started At date range](/img/system-tasks/filter-dialog.png)

Each field in the dialog has an **Operation** next to it:

| Field | What you pick | Operations |
| --- | --- | --- |
| **Type** | One or more task types. | **Contains** |
| **Ran By** | **System**, one or more people, or both. | **Contains** |
| **Started At** | A date. | **Equals**, **Greater than**, **Less than**, **Between** |
| **Ended At** | A date. | **Equals**, **Greater than**, **Less than**, **Between** |

When you enter a value, the operation is filled in for you: **Contains** for **Type** and **Ran By**, **Equals** for
dates. Change it if you need a different one. **Between** swaps the date for two pickers, such as **Start Started At**
and **End Started At**, and the start date can't be later than the end date.

Dates match whole days:

- **Equals**: tasks on that day.
- **Greater than**: tasks after that day. The day itself isn't included.
- **Less than**: tasks before that day.
- **Between**: tasks from the start day through the end day, including both.

A task has to match every field you fill in. Within **Type** or **Ran By**, it only has to match one of the values you
picked.

The buttons at the bottom of the dialog are **Apply filter** (check mark), **Cancel** (X) and **Reset filter**
(circular arrow). **Reset filter** only clears the dialog's fields. The list doesn't change until you apply.

### Applied filters

![Two applied-filter chips under the System Tasks heading](/img/system-tasks/filter-chips.png)

Each filtered field shows up as a chip under the page heading, such as "Type contains Quick Scan, Magic Fill". Select
a chip's X to remove just that field. While a filter is active, the funnel button shows how many fields are in use,
and a **Reset filter** button next to it clears them all at once.

Your browser remembers the filter, so it's still applied the next time you open the page.

## Task types

The **Type** column shows these types. The **Type** filter offers the same list.

| Type | Created when | Ran By |
| --- | --- | --- |
| **Quick Scan** | Someone uploads a receipt with [Quick Scan](./ai.md#quick-scan). | The person |
| **Magic Fill** | Someone uses [Magic Fill](./ai.md#magic-fill) on the receipt form. | The person |
| **Email Read** | The app reads a receipt email from a [system email](./system-settings/04-system-email.md) inbox. The description holds the email's details, such as sender, subject and attachments. | System |
| **Email Upload** | The app processes a receipt from one of those emails. | System |
| **HTML to PDF** | The app turns an email's HTML body into a PDF so it can be processed, for groups that have **Process Email Body Text** turned on. | System |
| **System Email Connectivity Check** | Someone selects **Check Email Connectivity** on a system email. | The person |
| **Receipt Processing Settings Connectivity Check** | Someone checks the connectivity of [Receipt Processing Settings](./system-settings/02-receipt-processing-settings.md). The description holds the result or the error. | The person |
| **Updated Receipt** | Someone saves changes to a receipt. See [Receipt changes](#receipt-changes). | The person |
| **Prompt Generated** | The app builds the AI prompt during a Quick Scan, Magic Fill or email upload. It appears as its own row and as the **Prompt Used** step inside that task. | System |
| **API Key Deleted** | Someone deletes an [API key](./api-keys.md). The description names the key and its owner. | The person |

Three more types never appear as rows of their own. They're the steps you see when you expand a task:
**OCR Processing**, **Chat Completion** and **Receipt Uploaded**. See [Steps of a task](#steps-of-a-task).

## Statuses

Every task and every step is either **Succeeded** or **Failed**. When a step fails, the task it belongs to is marked
**Failed** too. So a failed Quick Scan can show a green check mark on its OCR step and a red exclamation mark on its
chat completion step, which tells you the AI request is what went wrong.

## Task details

### Steps of a task

Tasks made up of several steps have an arrow in the last column. Select it to expand the row, then select a step to
open it. Each step shows its own status icon, a **Started at** and **Ended at** time, and its raw output.

![An expanded Quick Scan row with its OCR and chat completion steps open](/img/system-tasks/expanded-quick-scan.png)

Quick Scan, Magic Fill and Email Upload tasks have these steps:

| Step | What it shows |
| --- | --- |
| **Raw OCR Processing Details** | The text OCR read from the image, exactly as it came out. |
| **Prompt Used:** *prompt name* | The prompt sent to the AI, named after the prompt your receipt processing settings use. |
| **Raw Chat Completion Details** | The AI's raw response, or the error if the request failed. |
| **Receipt Uploaded** | The receipt that was created, if processing succeeded. |

An **Email Read** task has an **Email Upload Details** section for each time the email's receipt was processed, naming
the receipt processing settings that were used. Each one holds the steps above.

### Full descriptions

The **Description** column shortens long text. For very long descriptions, such as the prompt text on a
**Prompt Generated** row, select **View full description** (the open-in-new icon) to read it all in a **Description**
dialog. **Copy description** copies the text to your clipboard.

![The Description dialog showing a generated prompt](/img/system-tasks/full-description.png)

### Receipt changes

An **Updated Receipt** row sums up the edit in its description: **Changed:** followed by the fields that changed, or
**No changes** if the save didn't change anything. Fields use their stored names, such as `name`, `amount`,
`categories`, `receiptItems` and `customFields`. Record-keeping values such as timestamps are left out.

![Two Updated Receipt rows with their change summaries and View changes buttons](/img/system-tasks/updated-receipt-rows.png)

Select **View changes** (the open-in-new icon) to compare the receipt before and after that save. The dialog is titled
**Receipt update:** followed by the receipt's name.

![The receipt update dialog showing Before and After with Changes only selected](/img/system-tasks/receipt-update-diff.png)

- **Before** and **After** show the whole receipt as it was saved, each with the time it was saved. Changed lines are
  highlighted, and the exact text that changed is marked.
- The counts at the top show how many lines were added (**+**) and removed (**−**).
- **All lines** (the default) shows the whole receipt. **Changes only** shows the changed lines with a little context
  and folds everything else into "⋯ *n* unchanged lines". Its badge shows how many lines changed.
- **Copy before and after as JSON** (the copy icon) copies both versions to your clipboard.

The dialog compares the full records, so bookkeeping values such as `updatedAt` show up as changed too. The summary in
the table ignores them.

## Source files

When a Quick Scan or an email upload fails, Receipt Wrangler keeps the uploaded file for a while. That way you can see
what went wrong, try again, or type the receipt in by hand. While the file is kept, the task's **Source File** column
has two buttons:

- **Preview source file** (the eye icon) opens the file in a viewer titled with its file name. Drag to move around,
  scroll to zoom, and double-click to fit it back in the window. Drag a corner handle to resize the image.
- **Download source file** (the download arrow) saves the original file under its original name.

![The source file preview dialog showing an uploaded receipt image](/img/system-tasks/source-file-preview.png)

The buttons only appear when all of these are true:

- The task is a **Quick Scan** or **Email Upload**, and it failed. Successful uploads and other types never show them.
- You have the **Read Activities** permission (`group.activities.read`) in the task's group. The built-in
  **Legacy Viewer**, **Legacy Editor** and **Legacy Owner** group roles all include it.
- The file is still being kept.

### How long files are kept

An administrator sets this under **System Settings** > **Temporary Files** > **Keep failed uploads for**, in hours or
days. The default is 30 days. It can be anywhere from 24 hours to 8760 hours (1 year). After that the file is removed
and the preview and download buttons disappear. See [System Settings](./system-settings/01-system-settings.md).

![The Temporary Files section of System Settings, set to keep failed uploads for 30 days](/img/system-tasks/temporary-files-setting.png)

### Retrying a failed upload

The System Tasks page doesn't have a rerun button. To retry a failed Quick Scan or email upload, use **Rerun activity**
on an **Activity** widget on the group's [dashboard](./groups/02-managing-dashboards.md). That needs the
**Rerun Activities** permission (`group.activities.rerun`) in the group.

## System tasks on other pages

Two other pages have a **System Tasks** section that lists only the tasks for the item you're looking at:

- A [Receipt Processing Settings](./system-settings/02-receipt-processing-settings.md) page lists the Quick Scans,
  Magic Fills and email uploads that used those settings, plus their connectivity checks.
- A [System Email](./system-settings/04-system-email.md) page lists that email's connectivity checks and the emails
  read from it.

These tables have the same columns and expandable rows as the System Tasks page, but no filter and no **Source File**
column. To filter these tasks or open a failed upload's file, use the System Tasks page.
