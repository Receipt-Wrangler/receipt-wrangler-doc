# System Settings

System settings are where app-wide configurations are stored.

To access to system settings, log in as an administrator, and then click on the avatar menu, and then click the
"System Settings" button, as shown below.

![System Settings](/img/system-settings/system-settings-arrow.png)

## Managing System Settings

Once the user has navigated to the system settings page, they will be presented with the following screen to view,
to view/edit the system settings.

![System Settings](/img/system-settings/system-settings-form.png)

## General Settings

### Enable Local Signup

This field determines whether users can sign up for an account. If checked, users can sign up for an account. Otherwise,
user accounts will need to be created by an administrator.

### Debug OCR

This field determines whether OCR debugging is enabled. When enabled, OCR timing information will be logged, and the
processed image will be stored in the temp directory for debugging purposes. This is primarily for developers.

### Receipt Processing Settings

This field contains the Receipt Processing Settings used by the app globally. Setting this field allows email
integrations to be used, as well as quick scans, and magic fill.

### Fallback Processing Settings

This field contains the Fallback Processing Settings used by the app globally. These fallback settings are used when the
primary Receipt Processing Settings fail to process a receipt, then the fallback settings are used.

### PDF rasterization DPI

This field determines the DPI (dots per inch) used when rasterizing PDF receipts into images for OCR. It defaults to
`300`. A higher value produces a sharper image (better OCR accuracy) at the cost of more memory and processing time. The
value may be `0` (use the default) or between `72` and `1200`.

### Task Concurrency

This field determines how many background tasks the app processes concurrently across its job queues. It defaults to
`10`. Lower it on small instances to reduce memory usage; raise it on larger instances to process more work in parallel.

### Email polling interval in seconds

This field determines how often enabled email integrations are polled for new emails. The default value is 1800 seconds,
or 30 minutes.

### Task Queue Configuration

The app processes background work (Quick Scan, email polling, email receipt processing, image cleanup, and system
cleanup) across several named queues. Each queue has a configurable **priority** — a relative weight that determines how
much of the available task concurrency a queue receives, so higher-priority queues are favored when work is contended.
The queues are:

- **Quick Scan** — processes Quick Scan requests.
- **Email Polling** — polls configured system emails for new messages.
- **Email Receipt Processing** — processes receipts ingested from email.
- **Email Receipt Image Cleanup** — cleans up temporary images created during email ingestion.
- **System Clean Up** — periodic system maintenance tasks.

## Currency Settings

### Previews

This shows a quick preview of how the currency will be displayed throughout the app.

### Symbol Display

This field determines what the currency symbol is. By default, this value is "$", it can be changed to any
string, such as "USD", "CAD", "£", or even an empty string, etc.

### Symbol Position

Symbol position determines where the currency symbol is placed. The options are:

- Start, f.ex $ 100.50
- End f.ex 100.50 $

### Thousandths Separator

This field determines what the thousandths separator is. The options are:

- , (Comma), f.ex 1,000
- . (Dot) f.ex 1.000

### Decimal Separator

This field determines what the decimal separator is. The options are:

- , (Comma), f.ex 100,50
- . (Dot) f.ex 100.50

### Hide Decimal Places

This field determines whether the decimal places are hidden or not. If checked, the decimal places will be hidden,
otherwise they will be shown.

## MCP Server

Receipt Wrangler can expose itself as an OAuth 2.1-protected [MCP](https://modelcontextprotocol.io/) server, so AI
clients such as Claude can securely read your receipts, groups, and other data. The server is off by default and can be
toggled at runtime — no restart required.

### Enable MCP Server

This field determines whether the MCP server is enabled. It is disabled by default. When enabled, the MCP endpoint is
served at `<Public URL>/mcp`.

### Public URL

This is the externally reachable base URL of your Receipt Wrangler instance (for example,
`https://receipts.example.com`). It is **required** when the MCP server is enabled, and is used to advertise the OAuth
and MCP endpoints to clients. Provide the bare origin (scheme and host); any path is ignored.
