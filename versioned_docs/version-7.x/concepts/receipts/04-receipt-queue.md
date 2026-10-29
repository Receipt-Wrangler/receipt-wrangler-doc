# Receipt Queue

The receipt queue lets you work through several receipts one after another. Instead of opening a receipt, going back
to the list, and opening the next one, you pick the receipts up front and then step through them in order, either
just reading each one or editing and saving as you go.

A queue is handy whenever you have a batch of receipts to deal with at once, for example:

* reviewing receipts that were just added, to check their amounts, categories, and tags;
* settling up, marking each receipt **Resolved** as it's paid back;
* finishing off a set of **Draft** receipts.

## Starting a Queue

You can start a queue from the receipts table or from a dashboard's **Filtered Receipts** widget. Either way, you then
choose whether to work through the receipts in **View Mode** or **Edit Mode** (see
[View Mode and Edit Mode](#view-mode-and-edit-mode)).

### From the Receipts Table

1. Open the group's receipts table and select the receipts you want to work through (see
   [Selecting Receipts](./03-receipts-table.md#selecting-receipts)). It often helps to filter the table first, for
   example to only **Open** and **Draft** receipts.
2. Once more than one receipt is selected, a **Start Queue** button appears in the toolbar. Click it.
3. Choose **View Mode** or **Edit Mode**.

![the receipts table filtered to Open and Draft receipts, with three rows selected and the Start Queue button in the toolbar](/img/receipts/queue/start-queue-button.png)

![the Start Queue menu offering View Mode and Edit Mode](/img/receipts/queue/queue-mode-menu.png)

The queue follows the order in which you selected the receipts, not the order of the table. In the example above,
**Dell** was selected first, then **Dave & Buster's**, then **AMC Theatres**, so the queue opens on Dell. If you
select a whole page with the header checkbox instead, the queue follows the table's order.

### From a Dashboard

A **Filtered Receipts** widget (see [Managing Dashboards](../groups/02-managing-dashboards.md)) shows a **Start queue**
icon in its header whenever it lists more than one receipt. Click it and choose **View Mode** or **Edit Mode**. The
queue contains the widget's receipts in the same order the widget lists them.

![a Filtered Receipts widget named Receipts to Review, with the Start queue icon in its header](/img/receipts/queue/widget-start-queue.png)

:::note
The queue only includes the receipts the widget has loaded so far. A widget loads its receipts in batches as you
scroll its list, so if it matches a lot of receipts, scroll to the end of the list (until no more receipts load)
before you start the queue.
:::

## View Mode and Edit Mode

| Mode | What it does |
|---|---|
| **View Mode** | Opens each receipt read-only. You move through the queue with the arrows. |
| **Edit Mode** | Opens each receipt for editing. **Save & Next** saves the receipt and opens the next one. |

**Edit Mode** only appears in the menu if your group role grants **Update Receipts** (`group.receipts.update`) in the
group (see the [permissions reference](../roles/04-permissions-reference.md)). Without it, the menu only offers
**View Mode**.

## Moving Through the Queue

When the queue starts, the first receipt opens. It's the usual receipt page (see
[Managing Receipts](./02-managing-receipts.md)), with a few additions for the queue:

* A **Queue Details** section at the top shows where you are in the queue, for example **Receipt 2 of 3**.
* A bar at the bottom of the page has a previous arrow (←) on the left and a next arrow (→) on the right. The previous
  arrow is hidden on the first receipt, and the next arrow is hidden on the last one.
* The page's **Back** button is hidden while you're in a queue.

![a receipt open in a View Mode queue, showing Receipt 2 of 3 under Queue Details and the previous and next arrows at the bottom](/img/receipts/queue/view-mode.png)

### Keyboard Shortcuts

| Key | Action |
|---|---|
| Right Arrow | Go to the next receipt in the queue |
| Left Arrow | Go back to the previous receipt in the queue |

The arrow keys only move through the queue when nothing on the page is focused. If you've clicked into a field (even
a read-only field in View Mode), the keys act on that field instead. Click an empty part of the page first, and the
arrow keys will work again.

### Save & Next (Edit Mode)

In Edit Mode, the bottom bar also has a **Save & Next** button. Clicking it saves the receipt, shows
"Successfully updated receipt", and opens the next receipt in the queue. If the receipt can't be saved, for example
because a required field is empty, you stay on it until you fix the problem.

![the Edit Mode button bar with the previous arrow, the Save & Next button, and the next arrow](/img/receipts/queue/edit-mode-save-next.png)

You can still use the arrows or arrow keys in Edit Mode to skip past a receipt without saving it.

## Reaching the End of the Queue

On the last receipt the next arrow disappears, and what happens next depends on the mode:

* **Edit Mode**: the button reads **Save** instead of **Save & Next**. Clicking it saves the receipt and shows
  "Successfully updated receipt. Congratulations! You have reached the end of the queue." You stay on the last
  receipt.
* **View Mode**: there's no message. You've simply reached the last receipt.

![the last receipt in an Edit Mode queue after saving, with the end of the queue message at the top and only the previous arrow and Save button at the bottom](/img/receipts/queue/end-of-queue.png)

To leave the queue at any point, use the header navigation, for example the **Receipt List** or **Dashboard** icon.

## Tips and Caveats

:::warning
Moving with the arrows or the arrow keys doesn't save anything. In Edit Mode, if you change a receipt and then move to
another receipt without clicking **Save & Next** (or **Save**), your changes are discarded, and there's no warning.
:::

* **Opening Edit from View Mode leaves the queue.** The **Edit** (pencil) button in the page header opens that
  receipt's normal edit page, without the queue. When you save there, you land on the receipt's own page rather than
  the next receipt in the queue. If you want to edit receipts one after another, start the queue in **Edit Mode**.
* **Select in the order you want to work.** A queue from the receipts table follows your selection order, so select
  the receipts in the order you want to go through them.
