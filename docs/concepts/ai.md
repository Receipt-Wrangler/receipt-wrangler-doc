# AI

Receipt Wrangler can use AI to turn receipt images into receipts. An OCR engine reads the text off the image and AI
parses that text into a receipt. Or, when **Use Vision?** is checked in the receipt processing settings, a
vision-capable AI model reads the image directly, without OCR. There are a couple of workflows which the user can use
to create receipts quicker with AI.

## Configuration

Check out [the AI configuration section](/docs/concepts/system-settings/receipt-processing-settings) to learn how to
configure
AI.

## Features

### Quick Scan

The first workflow is quick scan. Quick scan is in two places:

* The receipts table: open the **More actions** menu (the three dots) and click **Quick Scan**.
  <br/> ![the receipts table's More actions menu with Quick Scan](/img/receipts/table/more-actions-menu.png)
* The sidebar: click the add button (**+**), then the **Quick Scan** button between **Add Receipt** and **Add Group**.
  <br/> ![the sidebar add menu with the Quick Scan button marked](/img/receipts/receipt-sidebar-quick-scan.png)

Both only appear when AI receipt processing is set up and your group role grants **Quick Scan Receipts**
(`group.receipts.quick-scan`). See the [Permissions Reference](./roles/04-permissions-reference.md). On the receipts
table this is checked for the table's group, and on the sidebar for the group selected in the sidebar.

Clicking on either of these buttons will display the following dialog:
![the empty Quick Scan dialog with Select images to upload and the Upload Images button](/img/ai/quick-scan-empty.png)

From here, the user may upload an image, or many images, with the **Upload Images** button. Many common image formats
are supported, as well as .HEIC and .PDF single and multi page files are supported.

Once an image/pdf is uploaded, then the following carousel will display. Each image gets its own set of fields. With
more than one image, use the **Navigate left** and **Navigate right** arrows to move between them. **Remove Current
Image** (the red trash can) takes the image you are looking at out of the scan.
![the Quick Scan dialog with two images, Weekend Trip picked, and Paid By and Status](/img/ai/quick-scan-dialog.png)

Once the checkmark (**Submit Scans**) is clicked, Receipt Wrangler sends the images to be parsed using AI. The scan
can't be submitted until every image has its required fields filled in.

This allows users to quickly scan several receipts. Submitting doesn't create the receipts straight away: a
"Successfully queued image for processing" message appears (or "images" for more than one), the dialog closes, and
each image is processed in the background. When an image has been parsed, a receipt is created and saved with the
values from AI and the dialog. You can follow each scan, and see why one failed, on the
[System Tasks](./system-tasks.md) page or in a dashboard's [Activity](./groups/02-managing-dashboards.md#activity)
widget.

Defaults for the group, paid by and status can be set in your
[Quick scan defaults](./user-settings.md#quick-scan-defaults), to make the process even quicker.

Each image has the following fields.

#### Group

This field determines which group the scanned receipt will belong to. It's always required, and until a group is
picked it's the only field shown for that image. Once a group is picked, the group's
[Quick Scan settings](./groups/05-group-receipt-settings.md#quick-scan) decide which of the fields below are shown and
which are required.

#### Paid By

This field determines which user will be set as the paid by. It only lists the members of the picked group. It is
possible for this field to be overridden by a prompt that specifies this value. If the group doesn't show this field,
or it's left empty, the group's default paid by is used.

#### Status

This field determines which status the scanned receipt will belong to. It is possible for this field to be overridden by
a prompt that specifies this value. If the group doesn't show this field, or it's left empty, the group's default
status is used.

#### Categories, Tags and Comment

These fields are hidden unless the group turns them on. Categories and tags picked here are added to any the AI
chooses. The **Comment** is added to the new receipt as a comment from you.

### Magic Fill

The next workflow is Magic Fill. Magic Fill is a way to quickly fill in a receipt from the receipt page. While you are
adding or editing a receipt that has at least one image, click the **Magic fill** button in the header of the form's
**Images** section. It reads the image that is currently shown, so move to the image you want first.

![the Magic fill button and its tooltip in the Images section header](/img/ai/magic-fill-button.png)

This will fill in the receipt with the values from AI, but doesn't save it right away. This allows users a chance to
modify data as needed before saving.

The **Magic fill** button only appears in add and edit mode, and only when AI receipt processing is set up. It's
disabled unless your group role grants **Magic Fill Receipts** (`group.receipts.magic-fill`). For the other buttons
in that section, see [Images](./receipts/02-managing-receipts.md#images).

### Email Integration

The last workflow is using the Email Integration. The Email Integration lets users send in receipts via a configured
email and have them essentially Quick Scanned into the system
automatically. [Check out the documentation](/docs/concepts/email) to see how to configure it. A group's Quick Scan
settings don't apply to receipts created by email (see
[Email receipts](./groups/05-group-receipt-settings.md#email-receipts)).
