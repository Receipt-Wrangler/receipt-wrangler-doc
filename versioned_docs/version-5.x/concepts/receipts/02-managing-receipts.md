# Managing Receipts

## Viewing Receipts

Receipts can be viewed by in a few main ways.

* Configuring a dashboard and clicking on a receipt (TODO: add images)
* Navigating to the receipt list and clicking on a receipt (TODO: add images)

You are only allowed to view receipts that you have access to. To view receipts, you must be a user in the group that
the receipt is associated with.

To edit receipts, you must be at least an editor in the group.

## Adding Receipts

Receipts can be added by:

* Navigating to the receipt list, and clicking on the add button (TODO: add images)
* Clicking the add button on the sidebar, then clicking on add receipt (TODO: add images)

## Managing Receipts

Once a user has navigated to a receipt, the following screen will show. (TODO: add receipt form image)

### Name

This field is the name of the receipt, only used to help users identify what the receipt is.

### Amount

This field is the total amount paid for the receipt.

### Categories

This field lets users associate categories to receipts. This allows users to broadly group receipts, which can be later
filtered on, for example: "Food", "House", "Vacation", "Bills", ect. If the category that the user wants does not exist,
it will be created upon creating/updating the receipt.

### Tags

This field lets users associate tags to receipts. This allows users to group receipts in a more granular way, which can
be later filtered on, for example: "Delivery", "Grubhub", "Gas Bill", "Electricity Bill", ect. If the tag that the user
wants does not exist, it will be created upon creating/updating the receipt.

### Date

Date of the receipt.

### Group

Group that this receipt belongs to.

### Paid by

Which user in Receipt Wrangler paid for this receipt?

### Status

Status of the receipt. These are for the user to define, but below a description will be given for the intended use and
how each behaves.
The options are:

* Draft: Initial state of the receipt. When the receipt status is changed to this status, all the receipt items' status
  will be set to
  draft
  as well.
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

### Shares

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


