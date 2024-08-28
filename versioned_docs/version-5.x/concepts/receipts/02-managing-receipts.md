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


