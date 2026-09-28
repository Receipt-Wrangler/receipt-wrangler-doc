# Managing Dashboards

A dashboard is a page of widgets that shows the parts of a group you care about most: who owes whom, the receipts
that still need work, where the money goes, and what has happened in the group lately.

Dashboards are **personal**. Each person builds their own dashboards for each group they're in, and other members of
the group never see them. You only ever see your own, so two people in the same group can set up completely different
dashboards without getting in each other's way.

The **All** group has dashboards of its own, too. Widgets on an All group dashboard combine the receipts and activity
of all your groups (see [The All Group](#the-all-group)).

## Opening Dashboards

Click the **Dashboard** icon at the left of the header to open the dashboards of the group you're in. Selecting a group
in the sidebar also opens that group's dashboards.

![the Household Dashboards page with two dashboard chips and four widgets](/img/groups/dashboards/dashboard-overview.png)

The page is titled after the group, for example **Household Dashboards**. Under the title is one chip per dashboard.
Click a chip to switch to that dashboard. The first time you open the page, the first dashboard is shown.

The widgets fill the page in the order they were added, from left to right and then down.

If you don't have any dashboards in the group yet, the page reads "Use the Add Dashboard button to create a dashboard
for this group."

To open dashboards, your group role needs **Read Dashboards** (`group.dashboards.read`). See the
[Permissions Reference](../roles/04-permissions-reference.md). Without it, the header has no **Dashboard** icon, and
selecting the group takes you to its receipts table instead.

## Adding a Dashboard

1. Click **Add Dashboard**. The **Add a Dashboard** form opens.
2. Enter a **Dashboard Name**. It's required.
3. Add the widgets you want (see [Adding Widgets](#adding-widgets)). You can also save the dashboard empty and add
   widgets later.
4. Click **Save** (the check mark).

The message "Dashboard successfully created" appears, and the new dashboard gets a chip. If you already had a
dashboard open, it stays open. Click the new chip to switch to it.

To close the form without creating anything, click **Cancel** (the **X**).

![the Edit Dashboard form with a Dashboard Name and a list of four widgets](/img/groups/dashboards/dashboard-form.png)

### Adding Widgets

The **Widgets** section of the form lists the dashboard's widgets. Each row shows the widget's name and its type, with
**Edit** (pencil) and **Delete** (trash can) buttons.

To add a widget:

1. Click **Add Widget** (the **+** next to **Widgets**).
2. Enter a **Name**. It's shown as the widget's title on the dashboard.
3. Choose a **Type** (see [Widget Types](#widget-types)).
4. Fill in the settings for that type, if it has any. For example, a **Filtered Receipts** widget has a filter, and a
   **Pie Chart** has a **Group By**.
5. Click **Done** (the check mark). To discard the new widget instead, click **Cancel** (the **X**).

![the widget editor with the Type list open, showing the five widget types](/img/groups/dashboards/widget-type-list.png)

While a widget is open in the editor, **Add Widget** and the other rows' buttons are turned off. Finish the open widget
before you save the dashboard. If you click **Save** while one is still open, the form tells you "Please finish editing
the open widget before submitting".

Widgets appear on the dashboard in the order you added them, and each new widget goes at the end. They can't be
reordered. To move a widget, delete it and add it again.

## Editing a Dashboard

1. Click the dashboard's chip to open it.
2. Click **Edit** (the pencil next to **Add Dashboard**). The form opens, titled with the dashboard's name.
3. Make your changes:
   * Change the **Dashboard Name**.
   * Add widgets as described above.
   * To change a widget, click its **Edit** button, change its fields, and click **Done**. Choosing a different
     **Type** clears the widget's settings, so you set it up again from scratch.
   * To remove a widget, click its **Delete** button. There's no confirmation, and the row disappears right away.
4. Click **Save**. The message "Dashboard successfully updated" appears.

Nothing you change in the form, including removing a widget, takes effect until you click **Save**. If you click
**Cancel** instead, the dashboard stays as it was.

## Deleting a Dashboard

1. Click the dashboard's chip to open it.
2. Click **Delete** (the trash can next to **Add Dashboard**).
3. A **Delete Dashboard** dialog asks you to confirm, naming the dashboard. Click **Confirm** (the check mark).

The message "Successfully deleted dashboard" appears, and the page switches to your first remaining dashboard.
Deleting a dashboard deletes its widgets too. It can't be undone.

You can only edit or delete your own dashboards, which are also the only ones you can see. The buttons need
**Update Dashboards** (`group.dashboards.update`) and **Delete Dashboards** (`group.dashboards.delete`) in the group.

## Widget Types

| Type | What it shows | Settings | Permission needed to see its data |
| --- | --- | --- | --- |
| **Filtered Receipts** | A list of the receipts that match a filter. See [Filtered Receipts](#filtered-receipts). | A receipt filter | **Read Receipts** (`group.receipts.read`) |
| **Group Summary** | Who owes you and whom you owe in the group. See [Group Summary](#group-summary). | None | **Read Receipts** (`group.receipts.read`) |
| **Activity** | Recent uploads, Quick Scans and receipt edits in the group. See [Activity](#activity). | None | **Read Activities** (`group.activities.read`) |
| **Pie Chart** | Spending split by category, tag or payer. See [Pie Chart](#pie-chart). | **Group By** and an optional filter | **Read Widgets** (`group.widgets.read`) |
| **Report** | A saved report template, rendered in the widget. See [Report Dashboard Widget](../reporting/04-dashboard-widget.md). | The **Report** template to show | Access to the template |

Anyone who can create or edit dashboards can add the first four types. **Report** only appears in the **Type** list if
your application role has **Access Reports** (`app.reports.read`) or **Read All Report Templates**
(`app.reports.readAll`).

## Group Summary

The **Group Summary** widget sums up the money owed between you and the other members of the group.

![a Group Summary widget listing two people under Users Owe Me and one under I Owe](/img/groups/dashboards/group-summary.png)

* **Users Owe Me** lists the people who owe you, for example "Jordan Rivera - $77.78". If nobody does, it reads
  "Nobody owes me!".
* **I Owe** lists the people you owe. If you owe no one, it reads "Phew, I don't owe anything!".

Only **Open** shares count: shares charged to other people on receipts you paid, and shares charged to you on receipts
someone else paid. If you and another person owe each other, the widget shows the difference. Resolved and Draft
shares aren't counted. See [How shares work](../receipts/02-managing-receipts.md#how-shares-work).

The Group Summary has no settings of its own beyond its name.

## Filtered Receipts

The **Filtered Receipts** widget lists the receipts that match a filter you set up, so you can keep an eye on exactly
the receipts you care about, such as everything that's still **Open**, or this month's **Groceries**.

![the widget editor for a Filtered Receipts widget filtered to Open and Needs Attention receipts](/img/groups/dashboards/filtered-receipts-config.png)

The filter has the same fields and operations as the receipts table's filter (see
[Filtering Receipts](../receipts/03-receipts-table.md#filtering-receipts)): **Receipt Date**, **Name**, **Paid by**,
**Amount**, **Categories**, **Tags**, **Status**, **Resolved Date** and **Added At**. A receipt has to match every field
you fill in. **Within current month** is handy here: a widget with a **Receipt Date** filter set to
**Within current month** always shows the current month's receipts.

On the dashboard:

* Each row shows the receipt's name in bold, its amount and who paid it (for example "$45.05 paid by Jordan Rivera"),
  and its status.
* Receipts are listed with the newest receipt date first. The widget loads 25 at a time, and loads more as you scroll
  to the end of its list.
* Click a receipt to open it.
* If no receipts match, the widget reads "No receipts found".

When the widget lists more than one receipt, a **Start queue** button appears in its header. Click it to work through
the widget's receipts one after another, in **View Mode** or **Edit Mode**. See
[Receipt Queue](../receipts/04-receipt-queue.md#from-a-dashboard).

## Activity

The **Activity** widget is a feed of what has happened in the group: receipts added, Quick Scans, email uploads and
receipt edits. It's also where you retry a failed Quick Scan or email upload.

![an Activity widget with a failed Quick Scan and three successful Updated Receipt rows](/img/groups/dashboards/activity-widget.png)

### What it lists

The widget shows four kinds of activity:

| Type | What it means |
| --- | --- |
| **Receipt Uploaded** | Someone added a receipt. |
| **Quick Scan** | Someone uploaded a receipt with [Quick Scan](../ai.md#quick-scan). |
| **Email Upload** | Receipt Wrangler processed a receipt from an email. |
| **Updated Receipt** | Someone saved changes to a receipt. |

Newest activity comes first. The widget loads 25 rows at a time and loads more as you scroll to the end of its list.
If there's nothing to show, it reads "No activities found".

Each row shows:

* a date block with the day the activity started;
* the type, in bold;
* who did it, for example "Done by Admin", or "Done by System" for work Receipt Wrangler did on its own;
* a **Succeeded** or **Failed** chip;
* how long ago it started, for example "2 hours ago";
* for a failed upload, the source file and rerun buttons described below.

Click a row to open the receipt it's about. Rows without a receipt, such as a failed Quick Scan, don't open anything.

The widget has no settings beyond its name. For the full log, with every step of each task and what changed in each
edit, see [System Tasks](../system-tasks.md).

### Who sees what

Everyone who can see the widget sees the same group activity, whoever did it. The exception is a group with
**Isolate members** turned on (see [Isolate members](./04-managing-groups.md#isolate-members)), where members can't see each other.
There, a member only sees:

* their own activity;
* the activity of members whose role can see, and be seen by, all members;
* the work Receipt Wrangler did on its own ("Done by System").

Members whose role can see all members still see everything.

### Source files

When a Quick Scan or email upload fails, Receipt Wrangler keeps the uploaded file for a while. While it's kept, the
row has two buttons:

* **Preview source file** (the eye icon) opens the file in a viewer titled with its file name. Click **Close** when
  you're done.
* **Download source file** (the download arrow) saves the original file.

![the source file preview showing an uploaded grocery receipt](/img/groups/dashboards/activity-preview.png)

Successful uploads and other activity types don't have these buttons. How long files are kept is set by an
administrator. See [Source files](../system-tasks.md#source-files).

### Rerunning a failed upload

**Rerun activity** (the circular arrow) sends a failed Quick Scan or email upload through processing again, using the
same file. It's useful once you've fixed whatever made it fail, such as the AI settings.

The button only appears when all of these are true:

* The row is a failed **Quick Scan** or **Email Upload**.
* Receipt Wrangler has stopped retrying it. A failed upload is retried automatically a few times first, so one upload
  can show up as several **Failed** rows, and the button only appears after the last automatic try.
* The files it needs are still kept.
* You have **Rerun Activities** (`group.activities.rerun`) in the group.

Click it and the message "Activity has been successfully queued." appears, and the button disappears from that row.
The rerun shows up as a new row at the top of the list. The widget doesn't refresh by itself, so reload the page to see
it.

### Permissions

The widget needs **Read Activities** (`group.activities.read`) in the group, and so do the preview and download
buttons. Rerunning needs **Rerun Activities** too. The built-in **Legacy Viewer** group role includes Read Activities,
and **Legacy Editor** and **Legacy Owner** include both.

## Pie Chart

The **Pie Chart** widget shows how the group's spending splits up by category, by tag or by who paid.

### Setting up a Pie Chart

![the widget editor for a Pie Chart grouped by Paid By, with the Receipt Date filter set to Within current month](/img/groups/dashboards/pie-chart-config.png)

* **Group By** (required): **Categories** (the default), **Tags** or **Paid By**. This decides what each slice
  stands for.
* **Filter (Optional)**: click the arrow to open it. It has the same fields as the
  [Filtered Receipts](#filtered-receipts) filter: **Receipt Date**, **Name**, **Paid by**, **Amount**, **Categories**,
  **Tags**, **Status**, **Resolved Date** and **Added At**. Leave it empty to chart every receipt in the group.

For example, **Group By** **Paid By** with **Receipt Date** set to **Within current month** shows who paid for what
this month.

### How the values are worked out

* Each receipt counts with its full amount. Items and shares don't split it up.
* A receipt with several categories or tags counts in full in each of them. So a **Categories** or **Tags** chart can
  add up to more than the group actually spent.
* Every status counts, including **Draft** and **Declined**, unless you filter by **Status**.
* Receipts with no category go into an **Uncategorized** slice, and receipts with no tag into an **Untagged** slice.
* If your role limits which categories or tags you can see, the ones you can't see are grouped into a
  **(Restricted)** slice, so the chart still accounts for all the spending without naming them.
* With **Paid By**, each slice is a person, shown by their display name.

### Reading the chart

![a Pie Chart widget with a tooltip showing Professional Services: $8,427.82 (34.4%)](/img/groups/dashboards/pie-chart-tooltip.png)

* The widget's header shows its name and a badge with the grouping, such as **Categories**.
* Slices bigger than 5% show their percentage.
* Hover over a slice to see its name, amount and percentage, for example "Professional Services: $8,427.82 (34.4%)".
* The legend under the chart names every slice. Click a legend entry to hide its slice, and click it again to bring
  it back.
* If no receipts match, the widget reads "No data available".

The Pie Chart needs **Read Widgets** (`group.widgets.read`) in the group. It's the only widget that uses this
permission.

## The All Group

Dashboards on the **All** group work like any other dashboards, but their widgets look across all your groups:

* **Filtered Receipts** lists matching receipts from all your groups.
* **Group Summary** adds up what's owed across the groups where you can read receipts.
* **Activity** shows the activity of all your groups. Each row names its group, for example "Quick Scan in Household".
* **Pie Chart** combines the groups where you have **Read Widgets**.

## Permissions

| To... | You need |
| --- | --- |
| See dashboards and the header's **Dashboard** icon | **Read Dashboards** (`group.dashboards.read`) |
| Add a dashboard | **Create Dashboards** (`group.dashboards.create`) |
| Edit your dashboards | **Update Dashboards** (`group.dashboards.update`) |
| Delete your dashboards | **Delete Dashboards** (`group.dashboards.delete`) |
| See Filtered Receipts and Group Summary data | **Read Receipts** (`group.receipts.read`) |
| See the Activity widget and its source files | **Read Activities** (`group.activities.read`) |
| Rerun a failed upload | **Rerun Activities** (`group.activities.rerun`) |
| See Pie Chart data | **Read Widgets** (`group.widgets.read`) |
| Add a Report widget | **Access Reports** (`app.reports.read`) or **Read All Report Templates** (`app.reports.readAll`) |

The group permissions are checked in the dashboard's group. The built-in **Legacy Viewer**, **Legacy Editor** and
**Legacy Owner** group roles include all four dashboard permissions, **Read Widgets** and **Read Activities**. Only
**Legacy Editor** and **Legacy Owner** include **Rerun Activities**.
