# Managing Receipts

## Viewing Receipts

Receipts can be viewed by in a few main ways.

* Configuring a dashboard and clicking on a receipt ![receipt-dashboard](/img/receipts/receipt-dashboard-receipts.png)
* Navigating to the receipt table and clicking on a
  receipt ![receipt-table-receipt](/img/receipts/receipt-table-receipt.png)

Users are only allowed to view receipts that you have access to. To view receipts, you must be a user in the group that
the receipt is associated with.

To edit receipts, you must be at least an editor in the group.

## Adding Receipts

Receipts can be added manually by:

* Navigating to the receipt tale, and clicking on the add
  button ![receipt-table-add](/img/receipts/receipt-table-add.png)
* Clicking the add button on the sidebar, then clicking on add
  receipt. <br/> ![receipt-sidebar-add](/img/receipts/receipt-sidebar-add.png)

If AI is configured, then receipts can be added via AI as well. Check out the [AI section](/docs/concepts/ai).

## Managing Receipts

Once a user has navigated to a receipt, the following screen will show. ![receipt-form](/img/receipts/receipt-form.png)

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

User who paid for the receipt.

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

### Quick Actions

Quick actions meant for users to be able to quickly split the receipts in different ways. Clicking the split icon will
open quick actions.  
![quick-actions-icon](/img/receipts/receipt-shares.png)

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

### How items work

The Items feature lets you break down your receipt into individual line items, giving you a detailed view of exactly
what was purchased. This is especially helpful when you need to track specific purchases, split costs differently for
certain items, or maintain accurate records.

#### Adding Items

You can add items to your receipt in several ways:

* Click the **Add Item** button (plus icon) in the Items section header
* Use the keyboard shortcut **Ctrl+I** for quick access
* When editing an item, pressing **Enter** in the last field automatically creates a new item row

Each item includes these fields:

* **Name** - What you purchased (e.g., "Coffee", "Sandwich", "Gas")
* **Amount** - How much that specific item cost
* **Categories** - Assign categories to individual items for more detailed tracking (optional, based on group settings)
* **Tags** - Add tags for even more specific organization (optional, based on group settings)

#### Sync Amount with Items

When you check the "Sync with items" checkbox next to the receipt amount, the total receipt amount automatically updates
based on the sum of all your items. This helps ensure your itemized amounts always match your receipt total, preventing
discrepancies in your records.

#### Splitting Items

Sometimes you might share a specific item with someone else. The split button next to each item lets you divide that
item's cost between multiple people. For example, if you and a friend split an appetizer, you can split just that item
while keeping other items assigned to specific people.

#### Managing Multiple Items

The Items section shows you:

* The total number of items on your receipt
* The combined total of all items
* An expandable list where you can view and edit each item

Items automatically calculate their contribution to the receipt total, making it easy to see where your money went on
each purchase.

### How shares work

Shares represent how the receipt cost is divided among group members. Think of shares as "who owes what" - they track
each person's portion of the receipt and help you manage repayments between group members.

#### Understanding Shares vs Items

While **items** break down what was purchased on a receipt, **shares** determine who pays for those purchases. You can
have detailed items and then assign shares to show how the total cost is split between people. Each share can also have
its own categories and tags for more detailed expense tracking.

#### Creating and Managing Shares

You can add shares in several ways:

* Click the **Add Share** button (plus icon) to manually add a share
* Use **Quick Actions** for automated splitting options
* Each share shows the person's total amount and what percentage of the receipt they're responsible for

Each share includes:

* **Shared with** - The group member responsible for this portion
* **Name** - A description of what this share covers
* **Amount** - How much this person owes
* **Categories** - Categorize individual shares (optional, based on group settings)
* **Tags** - Add tags to shares for detailed tracking (optional, based on group settings)
* **Status** - Track whether this share has been paid/resolved

#### How Payment Tracking Works

Let's use 3 users as an example.
The example users we will use:  
Jim with a share of: $30  
Bill with a share of: $10  
Bob with a share of: $10

Let's say our receipt was paid for by Jim, with a total amount of $50.
Since Jim paid for the receipt, this means that Bill and Bob owe Jim $10 each.

When Bill pays
his $10 to Jim, you can set his share to resolved. Bill's resolved shares won't count towards what he owes in future calculations. Bob will still show that he owes Jim $
10 since his share is not resolved.

#### Bulk Actions for Shares

For each person's shares, you can:

* View their total amount owed and percentage of the receipt
* Click the checkmark icon to resolve all of that person's shares at once
* See how many individual shares they have
* Expand or collapse their share details for easier management

### Comments

The comments section is a place where users can add notes about the receipt.

### Images

In the images section, users can perform multiple actions per image. Below is the image section in edit mode. In view
mode some of the buttons below will appear, but not all of them. We will go over the buttons from left to right.
![receipt-image](/img/receipts/receipt-image.png)

#### Upload Image(s)

This button will allow users to upload an image, or multiple images to the receipt.

#### Download Image

This button will download a single image that is currently selected in the image section.

#### Hide Images

This button will hide all the images in the image section.

#### Expand Image

This button will expand the image(s) in the image section.

#### Show Fullscreen Image

This button will show an image in fullscreen mode.

#### Zoom In

This button will zoom into the image that is currently selected.

#### Zoom Out

This button will zoom out of the image that is currently selected.

#### Magic Fill (AI Required)

This button will perform magic fill. This will send the image to the configured AI to read the receipt and fill in the
form with the data that it found.

#### Remove Image

This button will remove an image from the image section.

