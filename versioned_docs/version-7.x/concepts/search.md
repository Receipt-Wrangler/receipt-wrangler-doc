# Search

The search box finds receipts by name across all of your groups, so you can jump straight to a receipt without opening
its group first.

## Finding a receipt

The search box is in the header, to the left of the notifications bell. It reads **Search receipts** and is there on
every page once you're signed in.

1. Click the box and type part of the receipt's name. Results show up as you type, from the first letter.
2. Click a result to open the receipt.

![the search box with "Blue" typed and a list of matching receipts below it](/img/search/search-results.png)

Each result reads "date - name (group)", for example "Oct 23, 2026 - Blue Plate Catering #9493 (Household)". The date
is the receipt's date, and the group is the group the receipt belongs to.

The list shows up to 100 receipts, newest receipt date first. Scroll it to see more. If the receipt you want isn't
there, type more of its name to narrow the list.

When no receipt matches, the list doesn't open. There's no "no results" message.

## What it searches

Search only looks at receipt **names**, and it matches any part of the name. For example, "Plate" finds
"Blue Plate Catering".

It doesn't search amounts, items, comments, categories, tags or who paid. To find receipts by those, use the filters in
the [Receipts Table](./receipts/03-receipts-table.md#filtering-receipts).

## Which receipts you can find

Search covers every group where your group role has **Read Receipts** (`group.receipts.read`). It doesn't matter which
group is selected in the sidebar: you get the same results from **My Receipts**, **All** or any other group. All of
the built-in group roles include **Read Receipts**.

In a group with [Isolate members](./groups/04-managing-groups.md#isolate-members) turned on, receipts paid by members
who are hidden from you don't appear in search, just as they don't appear in the group's receipts table.

## Permissions

To use search, your application role needs **Search Receipts** (`app.receipts.search`). Without it, the header has no
search box.

The built-in **Legacy User** and **Legacy Admin** roles include it. **Legacy User** is the default role for new
accounts, so everyone can search unless an administrator gives them a role without it. When you build a new
application role, the **Administrator** template includes **Search Receipts**, and the **User Manager** and
**Read Only** templates don't. See the [Permissions Reference](./roles/04-permissions-reference.md) for the full list.

## In the mobile app

The mobile app has its own **Search** tab in the bottom navigation. It needs the same **Search Receipts** permission.
