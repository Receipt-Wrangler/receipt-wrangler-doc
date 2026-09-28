# Receipts Table

The receipts table is where you find, review and act on a group's receipts. From here you can filter and sort the
list, pick which columns to show, select receipts to work through or update in bulk, see who owes whom, and export
what you're looking at.

![the Household receipts table with the toolbar above the list of receipts](/img/receipts/table/receipts-table-overview.png)

## Opening the Receipts Table

Click the **Receipt List** button (the receipt icon) in the header. It opens the table for the group you currently
have selected.

To look at another group's receipts, open the sidebar with the **Toggle sidebar** button and click the group. That
takes you to the group's dashboard; click **Receipt List** from there to open its table.

The page is titled with the group's name followed by "Receipts", for example **Household Receipts**. If the group's
name already contains the word "receipt", the name is used on its own. Seeing the table requires the
**Read Receipts** permission (`group.receipts.read`) in the group. See the
[Permissions Reference](../roles/04-permissions-reference.md) for every permission mentioned on this page.

### The All group

The **All** group shows receipts from every group you belong to, under the title **All Receipts**. It works the same
way as a single group's table, with two differences:

* The filter dialog has an extra **Group** field, so you can narrow the list to one or more of your groups.
* The [Receipt Summary](#receipt-summary) borrows its layout from one of your groups, because the All group has no
  settings of its own.

## The Toolbar

The toolbar sits to the right of the page title.

![the toolbar with Add Receipt, the month stepper, the date field picker, the filter button and More actions](/img/receipts/table/toolbar.png)

From left to right:

| Control | What it does | When it's shown |
| --- | --- | --- |
| **Add Receipt** | Opens a blank receipt form. See [Adding Receipts](./02-managing-receipts.md#adding-receipts). | You hold **Create Receipts** (`group.receipts.create`). |
| Month stepper | Filters the table to one month. See [Filtering by Month](#filtering-by-month). | Always. |
| Date field picker | Chooses which date the month stepper filters on. Its tooltip is **Choose which date field to filter on**. | Always. |
| **Filter Receipts** (funnel icon) | Opens the filter dialog. A badge shows how many filters are applied. See [Filtering Receipts](#filtering-receipts). | Always. |
| **Reset filter** | Clears every filter at once. | At least one filter is applied. |
| **Start Queue** | Opens the selected receipts one after another. See [Selecting Receipts](#selecting-receipts). | More than one receipt is selected. |
| **More actions** (three dots) | Opens the menu below. | Always. |

### More actions

![the More actions menu with Quick Scan, Export all receipts and Configure Columns](/img/receipts/table/more-actions-menu.png)

| Menu item | What it does | When it's shown |
| --- | --- | --- |
| **Quick Scan** | Opens the Quick Scan dialog, which creates receipts from images using AI. See [AI](../ai.md). | You hold **Quick Scan Receipts** (`group.receipts.quick-scan`) and AI receipt processing is set up. |
| **Export all receipts** | Downloads the receipts that match your filters. See [Exporting Receipts](#exporting-receipts). | The table is showing at least one receipt. |
| **Configure Columns** | Chooses and orders the table's columns. See [Configuring Columns](#configuring-columns). | Always. |
| **Poll email(s)** | Asks Receipt Wrangler to check the group's email inbox for new receipts now, instead of waiting for the next scheduled check. | You hold **Poll Inbound Email** (`group.email.poll`), the group has [email integration](../groups/04-managing-groups.md#enable-email-integration) turned on, and AI receipt processing is set up. |
| **Bulk Status Update** | Changes the status of the selected receipts. See [Bulk Status Update](#bulk-status-update). | At least one receipt is selected and you hold **Update Receipts** (`group.receipts.update`). |

While receipts are selected, the menu also shows how many, for example **3 selected**, above the selection actions.

## Columns and Sorting

These columns are shown by default, in this order:

| Column | Shows |
| --- | --- |
| **Added At** | The date the receipt was added to Receipt Wrangler. |
| **Receipt Date** | The date on the receipt. |
| **Name** | The receipt's name. Click it to open the receipt. |
| **Paid By** | Who paid. |
| **Amount** | The receipt total. |
| **Categories** | The receipt's categories. |
| **Tags** | The receipt's tags. |
| **Status** | The status, as a colored chip. |
| **Resolved Date** | The date and time the receipt was resolved, if it has been. |

Two more kinds of column are available but hidden until you turn them on in [Configure Columns](#configuring-columns):

* **Comment** shows the receipt's first comment. Hover over it to read long comments in full.
* **Custom field columns**, one for each [custom field](../custom-fields/01-overview.md), named after the field.
  Values are shown in the field's format, for example `$18.00` for a currency field. These columns need the
  **Read Custom Fields** permission (`app.custom-fields.read`).

![the table with the Comment column and a Tip custom field column turned on](/img/receipts/table/comment-and-custom-columns.png)

### The Actions column

The last column, **Actions**, is shown when you hold **Update Receipts** (`group.receipts.update`) in the group. Each
row has:

* **Edit** (pencil): opens the receipt's edit form.
* **Duplicate**: asks you to confirm, then makes a copy of the receipt. Needs **Duplicate Receipts**
  (`group.receipts.duplicate`). See [Duplicating Receipts](./02-managing-receipts.md#duplicating-receipts).
* **Delete** (red bin): asks "Are you sure you would like to delete the receipt ...? This action is irreversible.",
  then deletes it. Needs **Delete Receipts** (`group.receipts.delete`).

### Sorting

Click a column header to sort by it, and click again to reverse the order. Every column can be sorted except
**Categories**, **Tags** and **Actions**. By default the table is sorted by **Added At**, newest first. Sorting by a
custom field keeps the receipts that have no value for it.

### Paging

The bottom of the table shows how many receipts match, for example "1 – 50 of 60". Use **Items per page** to show 5,
15, 25, 50 (the default) or 100 receipts, and the arrows to move between pages or jump to the first or last page.

## Filtering Receipts

Click **Filter Receipts** (the funnel icon) to open the **Filter Receipts** dialog.

![the Filter Receipts dialog with an Amount greater than $100 filter and a Status filter](/img/receipts/table/filter-dialog.png)

Each row is one field. Enter a value on the left and choose an **Operation** on the right. Only rows with a value
are applied, and a receipt has to match all of them. Click the check mark (**Apply filter**) to apply your changes,
or the **X** (**Cancel**) to close the dialog without changing anything. Applying takes you back to the first page.

| Field | Operations |
| --- | --- |
| **Receipt Date** | Greater than, Less than, Between, Within current month |
| **Name** | Contains, Equals |
| **Paid by** | Contains (paid by any of the people you pick) |
| **Group** (All group only) | Contains (in any of the groups you pick) |
| **Amount** | Equals, Greater than, Less than, Between |
| **Categories** | Contains (has any of the categories you pick) |
| **Tags** | Contains (has any of the tags you pick) |
| **Status** | Contains (has any of the statuses you pick: Open, Needs Attention, Resolved, Draft, Declined) |
| **Resolved Date** | Greater than, Less than, Between, Within current month |
| **Added At** | Greater than, Less than, Between, Within current month |

When you enter a value, the **Operation** fills in by itself: **Contains** for Name and the list fields, **Equals**
for Amount. Change it if you want a different comparison. For the date fields, pick the operation you want after
choosing a date. If you clear a value, its operation clears too. A row with a value can't be applied without an
operation.

The **Categories** and **Tags** lists only offer the categories and tags you're allowed to see in the group.

### Between

Choosing **Between** splits the value into two fields, for example **Start Amount** and **End Amount**. Fill in both.
If the start is later than the end, the dialog shows "Start Receipt Date is invalid." (or the same message for the
field you're using) and won't apply the filter until you fix it.

### Within current month

**Within current month** needs no value. The dialog shows the range it covers, from the first of the current month to
the end of today, and the range moves with the calendar: next month, the same filter shows next month's receipts.

### Applied filters

Each applied filter appears as a chip below the page title, describing the condition in words, for example
**Receipt Date between Sep 1, 2026 – Sep 30, 2026**, **Amount greater than $100.00** or
**Status contains Open, Needs Attention**. The badge on the funnel icon shows how many there are.

![three applied-filter chips below the page title](/img/receipts/table/filter-chips.png)

* To remove one filter, click the **x** on its chip. The table goes back to the first page.
* To remove them all, click **Reset filter** in the toolbar. This also sets the date field picker back to
  **Receipt Date**.

## Filtering by Month

The month stepper is the quickest way to look at one month of receipts. Its label shows what the date filter is
doing:

* the month and year, for example **September 2026**, when the table is filtered to one whole month;
* **All time** when there's no filter on that date field;
* **Custom** when there's a different kind of filter on it, such as **Greater than** or a range that isn't exactly one
  month. The chip below the title spells out what it is.

The arrows either side (**Previous month** and **Next month**) step one month back or forward. From **All time** or
**Custom**, they step from the current month, so **Previous month** shows last month.

Click the label (tooltip **Filter by month**) to open the month panel.

![the month panel with a year, a grid of months and the This month, Last month and All time shortcuts](/img/receipts/table/month-stepper-panel.png)

* Use the arrows beside the year (**Previous year** and **Next year**) to change year, then click a month.
* **This month** and **Last month** jump straight to those months.
* **All time** removes the date filter.

Picking a month filters the chosen date field to that month, from the 1st to the last day, and replaces any other
filter you had on that field. It shows up as a **Between** chip like any other filter.

:::tip
A month picked with the stepper, including **This month**, stays on that month after the calendar moves on. For a
filter that always shows the current month, use **Within current month** in the filter dialog instead.
:::

### Choosing the date field

By default the month stepper filters on **Receipt Date**. Click the date field picker next to it to switch to
**Resolved Date** or **Added At**. A check mark shows the current choice.

![the date field picker listing Receipt Date, Resolved Date and Added At](/img/receipts/table/date-field-picker.png)

Switching fields doesn't remove a filter you already set on the previous field: its chip stays, and the stepper
starts describing the new field instead. Remove the old filter from its chip if you no longer want it.

## Configuring Columns

Open **More actions** and choose **Configure Columns** to open the **Configure Table Columns** dialog.

![the Configure Table Columns dialog listing each column with a checkbox and drag handle](/img/receipts/table/configure-columns.png)

* Check a column to show it, or uncheck it to hide it. At least one column has to stay visible, so the last checked
  box can't be unchecked.
* Drag a column by its handle to change its position.
* Custom field columns carry a **Custom** badge. A newly created custom field is added to the end of the list,
  hidden.

Click the check mark (**Save column configuration**) to apply your changes, or the **X** to cancel. The circular arrow
(**Reset column configuration**) puts the built-in columns back in their default order and hides the Comment and
custom field columns; click the check mark to keep the result.

The **Actions** column isn't in the list. It's always last, and depends on your permissions.

## Selecting Receipts

Each row has a checkbox. The checkbox in the header selects every receipt on the current page. Changing page clears
the selection.

![three receipts selected, with the Start Queue button and the Selected Receipt summary showing](/img/receipts/table/selected-receipts.png)

Selecting receipts unlocks:

* the [Selected Receipt summary](#selected-receipt-summary), which appears above the table as soon as one receipt
  is selected;
* **Bulk Status Update** in the **More actions** menu (see [below](#bulk-status-update));
* **Start Queue**, once more than one receipt is selected. It offers **View Mode**, and **Edit Mode** if you hold
  **Update Receipts** (`group.receipts.update`), then opens the receipts one by one in the order you selected them.
  See [Receipt Queue](./04-receipt-queue.md).

## Bulk Status Update

Bulk Status Update changes the status of every selected receipt at once, and can leave the same comment on each.

1. Select the receipts.
2. Open **More actions** and choose **Bulk Status Update**.
3. Choose a **Status**. It starts on **Resolved**.
4. Optionally, type a **Comment**, for example how the receipts were settled.
5. Click the check mark to save, or the **X** to cancel.

![the Bulk Status Update dialog with Status set to Resolved and a comment](/img/receipts/table/bulk-status-update.png)

The table updates the receipts' **Status** and **Resolved Date** in place, and they stay selected. Bulk Status Update
needs **Update Receipts** (`group.receipts.update`) in the group of every selected receipt.

The new status also affects each receipt's items and shares, and its **Resolved Date**, the same way as changing the
status on the receipt form:

| New status | Items and shares | Resolved Date |
| --- | --- | --- |
| **Resolved** | All set to Resolved | Set to the current date and time (a receipt that already has one keeps it) |
| **Declined** | All set to Resolved | Cleared |
| **Draft** | All set to Draft | Cleared |
| **Open** | Unchanged | Cleared |
| **Needs Attention** | Unchanged | Cleared |

Because items and shares are never set back to Open, moving a receipt from Resolved or Draft back to Open leaves its
shares as they are. Edit the receipt to reopen them (see [Shares](./02-managing-receipts.md#shares)).

If you enter a comment, it's added to every selected receipt as a comment from you.

## Selected Receipt Summary

While at least one receipt is selected, the **Selected Receipt summary** card shows what is owed between you and the
other people on those receipts:

* **Users Owe Me** lists the people who owe you, for example "Jordan Rivera - $77.78". If nobody does, it reads
  "Nobody owes me!".
* **I Owe** lists the people you owe. If you owe no one, it reads "Phew, I don't owe anything!".

Only **Open** shares count, and only between you and someone else: shares charged to other people on receipts you
paid, and shares charged to you on receipts someone else paid. If you and another person owe each other across the
selection, the card shows the difference. Resolved and Draft shares, and plain items, aren't counted. See
[How shares work](./02-managing-receipts.md#how-shares-work).

## Receipt Summary

The Receipt Summary is a block of totals for the receipts in the table. It's off by default. Someone with
**Update Group** (`group.update`) turns it on in the group's **Group Receipt Settings** tab (see
[Managing Groups](../groups/04-managing-groups.md)). In its **Receipt Summary** section they check
**Show the receipt summary** and choose:

* **Summary position**: **Below the table** (the default) or **Above the table**;
* **Break down by status**: the statuses that get a row of their own;
* **Currency Fields to Total**: currency custom fields to total alongside the amount.

Everyone in the group sees the same summary.

![the Receipt Summary under a table showing 5 of 11 receipts, with totals for all 11](/img/receipts/table/receipt-summary.png)

The first row, **All Receipts**, gives the number of receipts, their **Total** amount, and a total for each chosen
currency field (**Tip** in the example above). Below it is one row per chosen status, for example
**Open Receipts (3 receipts)**. A status with no matching receipts still has a row, greyed out, so the block keeps its
shape as you filter.

The summary covers every receipt that matches your current filters, not just the page you're looking at. In the
example above, the table shows 5 receipts per page, but the summary totals all 11 September receipts. It updates when
you change the filters.

When the summary is shown above the table, it appears between the page title and the Selected Receipt summary.

### On the All group

The All group has no summary settings of its own, so it uses the settings of one of your groups that has the summary
turned on. A note above the totals names it, for example "Using the summary configuration from Household.". If more
than one of your groups has the summary turned on, a **Summary configuration:** picker lets you choose which group's
settings to use. The totals still cover the receipts from all your groups.

## Exporting Receipts

To export, open **More actions** and choose **Export all receipts**. Your browser downloads a file named `data.zip`.

The export contains every receipt that matches your current filters, across all pages, in the table's current sort
order. To export one month, pick it with the month stepper first. You need **Read Receipts** (`group.receipts.read`),
and only receipts you're allowed to see are included.

The zip holds two CSV files.

`receipts.csv` has one row per receipt:

| Column | Contents |
| --- | --- |
| Id | The receipt's ID. |
| Added At | The date the receipt was added. |
| Receipt Date | The date on the receipt. |
| Name | The receipt's name. |
| Paid By | The name of the person who paid. |
| Amount | The receipt total, as a plain number. |
| Status | The status, in capitals, for example `OPEN` or `NEEDS_ATTENTION`. |
| Categories | The receipt's categories, separated by commas. |
| Tags | The receipt's tags, separated by commas. |
| Resolved Date | The date the receipt was resolved, or empty. |

`items.csv` has one row per item or share on those receipts:

| Column | Contents |
| --- | --- |
| Id | The item's ID. |
| Receipt Id | The ID of the receipt it belongs to. |
| Receipt Name | That receipt's name. |
| Receipt Date | That receipt's date. |
| Name | The item's name. |
| Charged to User | For a share, the person it's charged to. Empty for a plain item. |
| Amount | The item's amount. |
| Status | The item's status, in capitals, for example `OPEN` or `RESOLVED`. |
| Categories | The item's categories, separated by commas. |
| Tags | The item's tags, separated by commas. |

Dates are written as `YYYY-MM-DD`. The export always has these columns, whatever you've chosen in Configure Columns.
Custom field values, comments and images aren't included.

## What the Table Remembers

The table keeps your settings in this browser, so they're still there when you reload the page, sign out, or come
back later:

* the page you're on and the number of items per page;
* the sort order;
* your filters, including the month stepper and the date field it's set to;
* your column configuration;
* on the All group, which group's summary settings you picked.

These settings belong to the browser, not to your account, and they aren't kept separately for each group. The same
filters, sort and columns apply whichever group's table you open, and anyone else who signs in on the same browser
sees them too. On a different browser or device, the table starts with its defaults.

Your selection isn't remembered.

## Permissions

These are group permissions, checked in the group you're viewing. The last two columns show what the built-in group
roles allow.

| To... | You need | Legacy Viewer | Legacy Editor and Legacy Owner |
| --- | --- | --- | --- |
| See the table, filter, sort, export, and see both summaries | **Read Receipts** (`group.receipts.read`) | Yes | Yes |
| Use **Add Receipt** | **Create Receipts** (`group.receipts.create`) | No | Yes |
| See the **Actions** column, use **Bulk Status Update**, and start a queue in **Edit Mode** | **Update Receipts** (`group.receipts.update`) | No | Yes |
| Duplicate a receipt | **Duplicate Receipts** (`group.receipts.duplicate`) | No | Yes |
| Delete a receipt | **Delete Receipts** (`group.receipts.delete`) | No | Yes |
| Use **Quick Scan** | **Quick Scan Receipts** (`group.receipts.quick-scan`) | No | Yes |
| Use **Poll email(s)** | **Poll Inbound Email** (`group.email.poll`) | Yes | Yes |

Custom field columns also need **Read Custom Fields** (`app.custom-fields.read`), which the built-in **Legacy User**
application role includes. Turning on the Receipt Summary needs **Update Group** (`group.update`).
