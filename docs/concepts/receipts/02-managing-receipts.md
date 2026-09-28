# Managing Receipts

## Viewing Receipts

Receipts can be viewed in a few main ways.

* Configuring a dashboard and clicking on a receipt ![receipt-dashboard](/img/receipts/receipt-dashboard-receipts.png)
* Navigating to the receipt table and clicking on a
  receipt ![receipt-table-receipt](/img/receipts/receipt-table-receipt.png)

Users are only allowed to view receipts that you have access to. To view receipts, you must be a user in the group that
the receipt is associated with.

To edit receipts, your group role must allow editing receipts (such as the **Legacy Editor** or **Legacy Owner** role).

## Adding Receipts

Receipts can be added manually by:

* Navigating to the receipt table, and clicking on the **Add Receipt**
  button. <br/> ![the receipts table toolbar with the Add Receipt button](/img/receipts/table/toolbar.png)
* Clicking the add button on the sidebar, then clicking on add
  receipt. <br/> ![receipt-sidebar-add](/img/receipts/receipt-sidebar-add.png)

If AI is configured, then receipts can be added via AI as well. Check out the [AI section](/docs/concepts/ai).

## Managing Receipts

Once a user has navigated to a receipt, the following screen will show. ![receipt-form](/img/receipts/receipt-form.png)

:::note
A group can hide some parts of the receipt form, such as images, comments, or the categories and tags on receipts,
items and shares. If a section described below is missing, check the group's
[Group Receipt Settings](../groups/05-group-receipt-settings.md).
:::

### Audit Details

When you view or edit a saved receipt, the **Audit Details** section at the top of the form shows its history at a
glance. It doesn't appear while you are adding a new receipt.

![Audit Details showing Added by, Added at, Updated at and Resolved at](/img/receipts/form/audit-details.png)

| Line | What it shows |
| --- | --- |
| **Added by** | The user who added the receipt. For a duplicated receipt, this is the user who made the copy. |
| **Added at** | When the receipt was added. |
| **Updated at** | When the receipt was last changed. |
| **Resolved at** | When the receipt was resolved. Only shown when the receipt has a resolved date. |

Each time you save the receipt form, the save is recorded as an **Updated Receipt** task. You can see what changed,
with the receipt's values before and after the save, on the [System Tasks](../system-tasks.md) page.

### Name

This field is the name of the receipt, only used to help users identify what the receipt is.

### Amount

This field is the total amount paid for the receipt.

#### Sync with items

While you are adding or editing a receipt, a **Sync with items** checkbox sits next to the **Amount** field. When it's
checked, **Amount** becomes read-only and always equals the total of the receipt's [Items](#items). It updates as you
add or remove items. Shares aren't counted, only items.

![the Amount field with Sync with items checked](/img/receipts/form/sync-with-items.png)

The checkbox isn't saved with the receipt. It starts unchecked every time you open the form, so check it again if you
want the amount to follow the items.

When **Sync with items** is unchecked, the amounts you enter can't add up to more than the receipt's **Amount**:

* If the items add up to more than the receipt total, the item's **Amount** field shows "Item sum cannot be larger
  than receipt total".
* If the shares add up to more than the receipt total, the share's **Amount** field shows "Share sum cannot be larger
  than receipt total". Shares split from an item are checked against that item's amount instead.

The receipt can't be saved until the amounts are corrected.

### Categories

This field lets users associate categories to receipts. This allows users to broadly group receipts, which can be later
filtered on, for example: "Food", "House", "Vacation", "Bills", etc. If the category that the user wants does not exist,
type its name and pick the **Add** option, for example **Add Vacation**. It will be created upon creating/updating the
receipt. The **Add** option only appears if your application role grants **Create Categories**
(`app.categories.create`). Without it, you can only pick existing categories.

### Tags

This field lets users associate tags to receipts. This allows users to group receipts in a more granular way, which can
be later filtered on, for example: "Delivery", "Grubhub", "Gas Bill", "Electricity Bill", etc. If the tag that the user
wants does not exist, type its name and pick the **Add** option, for example **Add Grubhub**. It will be created upon
creating/updating the receipt. The **Add** option only appears if your application role grants **Create Tags**
(`app.tags.create`). Without it, you can only pick existing tags.

### Date

Date of the receipt.

### Group

Group that this receipt belongs to.

### Paid by

User who paid for the receipt.

### Status

Status of the receipt. These are for the user to define, but below a description will be given for the intended use and
how each behaves.

A new receipt starts as **Open**, and you can change it before saving. Receipts created by
[Quick Scan](../ai.md#quick-scan) or by email get their status from the scan or from the group's settings instead.

The options are:

* Draft: The receipt is still being worked on, for example its data isn't complete yet. When the receipt status is
  changed to this status, all the receipt items' status will be set to draft as well.
* Open: Receipt data is complete and is ready to be resolved. When the receipt status is changed to this status, the
  receipt
  items'
  status will remain unchanged.
* Resolved: The receipt has been resolved in some way, i.e the users who owe the user who paid have paid, or have
  settled the payment in some other way. When the receipt status is changed to this status, the receipt items' status
  will
  change to resolved.
* Needs Attention: The receipt has an issue that needs to be addressed. When the receipt is changed to this status, the
  receipt items' status will remain unchanged.
* Declined: The receipt is closed without being resolved, for example an expense the group decided not to split or pay
  back. When the receipt status is changed to this status, the receipt items' status will change to resolved, just like
  Resolved, so nobody owes anything for it. Unlike Resolved, no resolved date is recorded, and a receipt that was
  resolved before loses its resolved date.

### Items

Items are the receipt's line items, such as the products on a grocery receipt. They are different from
[shares](#shares):

* A **share** belongs to a user of the group and decides who owes whom.
* An **item** belongs to nobody. It records what was bought and never counts toward what anyone owes.

Items don't have a status of their own in the form. Only shares have a **Status** field.

The **Items** section sits above **Shares** on the form. Its panel header shows how many items the receipt has and
their **Total**, for example **Items (6)** and **Total: $31.78**. Click the header to expand or collapse the list. Each
item shows its **Name**, **Amount**, **Categories** and **Tags**. When a receipt in view mode has no items, the section
reads **No items for this receipt**.

![the Items section with its count, total and item cards](/img/receipts/form/items-section.png)

#### Adding items

While you are adding or editing a receipt, click the **Add item** button (**+**) next to the **Items** heading to open
the Add Item form. When you edit a saved receipt that already has items, the **+** button in the Items panel header
opens it too.

![the Add Item form with Name, Amount, Categories and Tags fields](/img/receipts/form/add-item-form.png)

Fill in the item's **Name** and **Amount**, and optionally its **Categories** and **Tags**. Name and Amount are
required. Then click one of the buttons:

| Button | What it does |
| --- | --- |
| **Add Item** | Adds the item and keeps the form open, cleared and ready for the next item. |
| **Add & Done** | Adds the item and closes the form. |
| **Cancel** | Closes the form without adding anything. |

You can also use the keyboard while the form is open:

| Key | Action |
| --- | --- |
| **Ctrl+Enter** | Add the item and keep the form open, like **Add Item**. |
| **Escape** | Cancel and close the form. |
| **Tab** | Move to the next field. |

Items you add are part of the form. They are saved when you save the receipt.

#### Split Item

When you edit a saved receipt, each item has **Split Item** and **Remove Item** buttons in its top-right corner.

**Split Item** opens the [Quick Actions](#quick-actions) dialog, set up to split **the item's amount** rather than the
receipt's. Choose **Split Evenly**, **Split Evenly With Portions** or [Split by Percentage](#split-by-percentage), pick
the users, and click the **Split** check mark.

The shares it creates appear under **Shares** like any other share, with a banner showing where they came from:
**Split from: Coffee beans ($13.99)**. Shares split from an item can't add up to more than that item's amount.

![a share with a Split from banner naming the item it was split from](/img/receipts/form/split-shares.png)

#### Remove Item

The **Remove Item** button removes the item from the receipt straight away, without asking first. Any shares that were
split from the item are removed with it. Nothing is saved until you save the receipt.

### Shares

Shares are grouped by user. Each user gets a panel whose header shows their name, how many shares they have, and
**Total amount owed: $X (Y% of total)**: the sum of their shares, and what part of the receipt's **Amount** that sum
is. Shares split from an item are included. Click a panel's header to open it and see that user's shares.

#### Shared with (On add)

Who the share belongs to. This user will be a user of the group that the receipt is assigned to.

#### Name

Name of the share.

#### Amount

Total amount of the share.

#### Status

* Draft
* Open
* Resolved

The intended meaning of each status is the same as receipt statuses above.

### Quick Actions

Quick actions meant for users to be able to quickly split the receipts in different ways. Clicking the split icon will
open quick actions.  
![quick-actions-icon](/img/receipts/receipt-shares.png)

The same dialog opens from an item's [Split Item](#split-item) button, where it splits that item's amount instead of
the whole receipt.

#### Split Evenly

Splitting evenly allows users to split the receipt evenly between any number of users in the group. Simply select the
users to split
between, then shares will be added for each user.

![split-evenly](/img/receipts/receipt-split-evenly.png)

#### Split Evenly With Portions

Splitting evenly with portions allows users to split evenly, but adding a custom amount to a user's share.
For example, if we have two users: Admin and Sadie. Let's say they went to the grocery store together.

Admin and Sadie pay for stuff that they both use, but Admin also really wants to get a pair of shoes at the store too.
This
item is for Admin specifically, and Sadie doesn't want to pay for this. In this case, Admin will add the pair of shoes
to his
portion so that Sadie doesn't pay for it, and then the rest will be split evenly.

![split-evenly-with-portions](/img/receipts/receipt-split-evenly-with-portion.png)

#### Split by Percentage

Splitting by percentage gives each selected user a set percentage of the amount being split: the receipt's **Amount**
from the Shares section, or the item's amount when you use [Split Item](#split-item).

After you pick the **Users to Split Between**, each user gets a row with preset buttons: **25%**, **50%**, **75%** and
**100%**. For any other value, check **Custom** and type it into **Custom Percentage**.

![Split by Percentage with one user at 75% and another at a custom 25%](/img/receipts/form/split-by-percentage.png)

Click the **Split** check mark to add one share per user, named after the user and percentage, for example
**Jordan Rivera's 75% Portion**. A user left at 0% gets no share. The percentages must add up to more than 0 and no
more than 100. Otherwise the dialog shows "Total percentage must be greater than 0!" or "Total percentage cannot
exceed 100!" and adds nothing. If the percentages add up to less than 100, the rest of the amount isn't assigned to
anyone.

### How shares work

The shares section is one of the most important areas of a receipt. They represent what a user is paying for. Really,
this is itemization. Shares can be
assigned to other users within the group. The shares dictate who owes who money.

Let's use 3 users as an example.
The example users we will use:  
Jim with a share of: $30  
Bill with a share of: $10  
Bob with a share of: $10

Let's say our receipt was paid for by Jim, with a total amount of $50.
Since Jim paid for the receipt, this means that Bill and Bob owe Jim $10 each.

If Bill pays his $10 to Jim, then we can set his item(s) to resolved. Bill's resolved shares, or draft shares will not
count towards him in the calculations used to calculate how much he owes other users.

Bob will still show that he owes Jim $10 since his share is not resolved.

### Comments

The comments section is a place where users can add notes about the receipt.

### Images

In the images section, users can perform multiple actions per image. Below is the image section in edit mode. In view
mode some of the buttons below will appear, but not all of them. We will go over the buttons from left to right.
![the Images section header in edit mode with its eight buttons](/img/receipts/form/image-toolbar.png)

Apart from **Upload Image(s)**, the buttons only appear once the receipt has at least one image.

| Button | Viewing | Editing | Adding |
| --- | --- | --- | --- |
| **Upload Image(s)** | No | Yes | Yes |
| **Download Image** | Yes | Yes | No |
| **Hide Images** / **Show Images** | Yes | Yes | Yes |
| **Show Fullscreen Image** | Yes | Yes | Yes |
| **Zoom In**, **Zoom Out** | Yes | Yes | Yes |
| **Magic fill** | No | Yes | Yes |
| **Remove Image** | No | Yes | Yes |

#### Upload Image(s)

This button will allow users to upload an image, or multiple images to the receipt. While you are editing a saved
receipt, the images are uploaded straight away ("Successfully uploaded image(s)"), without saving the form. While you
are adding a receipt, they are uploaded when you save it.

#### Download Image

This button will download a single image that is currently selected in the image section. It's only shown for saved
receipts, not while you are adding one.

#### Hide Images

This button will hide all the images in the image section. It then becomes **Show Images**, which shows them again.

#### Show Fullscreen Image

This button will show an image in fullscreen mode. Click **Close** (the cross in the top-right corner) to go back to
the form.

#### Zoom In

This button will zoom into the image that is currently selected.

#### Zoom Out

This button will zoom out of the image that is currently selected.

#### Magic Fill (AI Required)

The **Magic fill** button will perform magic fill. This will send the image that is currently selected to the
configured AI to read the receipt and fill in the form with the data that it found. The receipt isn't saved until you
save it. The button only appears while adding or editing a receipt, and only when AI receipt processing is set up. It's
disabled unless your group role grants **Magic Fill Receipts** (`group.receipts.magic-fill`). See
[Magic Fill](../ai.md#magic-fill).

#### Remove Image

This button will remove the image that is currently selected from the image section. It doesn't ask you to confirm.
While you are editing a saved receipt, the image is deleted straight away ("Image successfully removed"), without saving
the form.

## Duplicating Receipts

Duplicating makes a new receipt from an existing one, which saves retyping a receipt that repeats, such as a weekly
grocery run. You can duplicate a receipt from two places:

* **The receipts table:** click the **Duplicate** button in the receipt's row, in the **Actions** column of the
  [receipts table](./03-receipts-table.md).
* **The receipt form:** while viewing a receipt, click the **Duplicate** button in the form's header, after the
  **Edit** button. The button is only shown in view mode.

Either way, a **Duplicate Receipt** dialog asks you to confirm: "Are you sure you would like to duplicate the receipt
Mountain Fuel Stop?" Click the check mark to confirm, or the cross to cancel.

![the Duplicate Receipt confirmation dialog](/img/receipts/form/duplicate-confirm.png)

Where you end up depends on where you started:

* From the **table**, a "Receipt successfully duplicated" message appears and the copy opens in view mode.
* From the **form**, you stay on the original receipt. A message reads "Receipt successfully duplicated. Click
  navigate to view duplicated receipt." Click **Navigate** to open the copy. The message disappears after a few
  seconds.

![the success message with its Navigate button, above the form header](/img/receipts/form/duplicate-snackbar.png)

The copy is named after the original with " duplicate" added, for example **Mountain Fuel Stop duplicate**. It stays
in the same group as the original. The copy gets:

* the original's **Amount**, **Date**, **Paid by**, **Status** and resolved date;
* its **Categories** and **Tags**;
* copies of its images;
* its items, and the shares that weren't split from an item, with their statuses;
* its comments, each still shown under its original author.

The copy's **Added by** is you, and its **Added at** is the time you made the copy. Check the copy and change what's
different, such as the date or amount.

To duplicate receipts, your group role needs the **Duplicate Receipts** permission (`group.receipts.duplicate`). See the
[Permissions Reference](../roles/04-permissions-reference.md). Without it, the table doesn't show the **Duplicate**
button and the form's **Duplicate** button is disabled.
