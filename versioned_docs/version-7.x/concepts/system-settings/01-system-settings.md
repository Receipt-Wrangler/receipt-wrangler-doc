# System Settings

System settings are where app-wide configurations are stored.

To access to system settings, log in as an administrator, and then click on the avatar menu, and then click the
"System Settings" button, as shown below.

![System Settings](/img/system-settings/system-settings-arrow.png)

## Managing System Settings

Once the user has navigated to the system settings page, they will be presented with the following screen to view,
to view/edit the system settings.

![System Settings](/img/system-settings/system-settings-form.png)

To change a setting, click the pencil icon next to the page title, make your changes, and click **Save**. Viewing this
page needs the **Read System Settings** permission (`app.system-settings.read`), and changing it needs **Update System
Settings** (`app.system-settings.update`). See the [permissions reference](../roles/04-permissions-reference.md).

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
- **Email Receipt Image Cleanup (retired)** — no longer used. Temporary file cleanup moved to **System Clean Up**.
- **System Clean Up** — periodic system maintenance: it expires old sign-in tokens and removes temporary files (see
  [Temporary Files](#temporary-files)).

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

## Session

The **Session** section sets how long someone can be away from Receipt Wrangler before they have to log in again. It
applies to both the web app and the mobile app.

![The Session section of System Settings, set to stay signed in for 1 day](/img/system-settings/session-section.png)

| Field                  | What it does                                                               |
|------------------------|----------------------------------------------------------------------------|
| **Stay signed in for** | How long a signed-in user can be inactive before they must log in again.   |
| **Unit**               | **Hours** or **Days**.                                                     |

- The value is a whole number. The default is 24 hours, which the form shows as **1** **Days**.
- The allowed range is 1 to 720 hours, or 1 to 30 days.

This is an inactivity window, not a fixed session length. While someone uses the app, their session keeps renewing
itself, so anyone who comes back within the window is still signed in. Only someone who has been away longer than the
window has to log in again. Lower it for tighter security, or raise it so people stay signed in longer.

Saving a new value doesn't sign anyone out. Each session switches to the new value the next time it renews.

:::note
Changing **Unit** doesn't convert the number. If you switch **1** **Days** to **Hours**, the setting becomes 1 hour, so
check both fields before you save.
:::

MCP connectors have their own sign-in lifetime, [Connector sign-in lasts](#connector-sign-in-lasts), in the MCP Server
section. The **Session** setting doesn't affect it.

## Temporary Files

When a Quick Scan or an email upload fails, Receipt Wrangler keeps the uploaded file. That way you can retry the upload,
or preview and download the original and enter the receipt by hand. The **Temporary Files** section sets how long those
files are kept.

![The Temporary Files section of System Settings, set to keep failed uploads for 30 days](/img/system-settings/temporary-files-section.png)

| Field                       | What it does                                  |
|-----------------------------|-----------------------------------------------|
| **Keep failed uploads for** | How long the file of a failed upload is kept. |
| **Unit**                    | **Hours** or **Days**.                        |

- The value is a whole number. The default is 720 hours, which the form shows as **30** **Days**.
- The allowed range is 24 to 8760 hours (1 year), or 1 to 365 days.
- As with **Session**, changing **Unit** doesn't convert the number.

The time counts from when the file was uploaded. After that, the file is removed at the next hourly cleanup, and the
**Preview source file** and **Download source file** buttons for that task disappear. A file isn't removed while its
task is still waiting to run or being retried. See [Source files](../system-tasks.md#source-files) on the System Tasks
page.

Successful uploads don't wait for this setting. A successful Quick Scan removes its file right away, and a successful
email upload's file is removed within a few hours.

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

### Connector sign-in lasts

This field determines how long a connected MCP client stays authorized before it has to sign in again, in **Hours** or
**Days**. The default is 24 hours, and the allowed range is 1 to 720 hours (30 days). Like [Session](#session), it's an
inactivity window: a client that keeps using the connector stays signed in.

It's kept separate from **Session** on purpose, so a long sign-in window for people doesn't also extend access for
third-party clients.

![The Connector sign-in lasts field in the MCP Server section, set to 1 day](/img/system-settings/mcp-connector-sign-in.png)

## Mobile App Setup

The Receipt Wrangler mobile app, on the
[Google Play Store](https://play.google.com/store/apps/details?id=io.receiptwrangler) and the
[Apple App Store](https://apps.apple.com/us/app/receipt-wrangler/id6475374843), needs your server's address before
anyone can log in. **Mobile App Setup** puts that address in a QR code, so people can scan it with their phone instead
of typing it.

![The Mobile App Setup section with Show login QR code checked and a Mobile Server URL filled in](/img/system-settings/mobile-app-setup-section.png)

| Field                  | What it does                                                                               |
|------------------------|--------------------------------------------------------------------------------------------|
| **Show login QR code** | Shows the setup QR code on the login page and in the **About** dialog. Off by default.     |
| **Mobile Server URL**  | The address the mobile app connects to. It's what goes into the QR code.                   |

**Mobile Server URL** is required while **Show login QR code** is on. Use the full API address, such as
`https://receipts.example.com/api`. The address must:

- start with `http://` or `https://` and include a host name. A path such as `/api` is fine.
- not contain a username or password, as in `https://name:password@receipts.example.com/api`.

Enter the address that people's phones can reach, the same one they would type into the app. Don't use `localhost`: on
a phone, that points to the phone itself.

To turn the QR code on:

1. Open **System Settings** and click the pencil icon.
2. In **Mobile App Setup**, check **Show login QR code**.
3. Enter the **Mobile Server URL**.
4. Click **Save**.

To hide the QR code again, uncheck **Show login QR code** and click **Save**. You can leave the URL filled in.

:::warning
An `http://` address is accepted, for example for a server on your home network, but the phone's connection to it isn't
encrypted. Use `https://` for any server that can be reached from outside your home network.
:::

### Where the QR code appears

When **Show login QR code** is on, the QR code appears in two places:

- **Under the Login form**, below the heading **Set up the mobile app**, with the caption "Scan with your phone to open
  the app and connect it to this server." It's also under the **Sign Up** form when
  [Enable Local Signup](#enable-local-signup) is on.
- **In the About dialog**, in a **Mobile App** section. Click your avatar, then **About**. Anyone who is signed in can
  open it, so someone already using the web app can set up their phone from there.

![The login page with the Set up the mobile app QR code under the Login button](/img/system-settings/login-page-qr.png)

![The About dialog with the Mobile App section showing the setup QR code](/img/system-settings/about-dialog-mobile-app.png)

### What happens when someone scans it

1. The phone opens the Receipt Wrangler app.
2. The app shows the **Connect to Server** screen with **Server URL** already filled in.
3. The user checks the address and taps **Connect**.
4. The user logs in with their username and password as usual.

Scanning never connects or logs in on its own. The user always sees the address and taps **Connect** themselves. If
the app is already logged in, scanning doesn't change anything.

:::tip
The **Server URL** field on the app's **Connect to Server** screen has its own scan button (**Scan server QR code**). It
reads this setup QR code, or any QR code that holds just a server URL.
:::

### What's in the QR code

The QR code holds only the server URL. It never contains usernames, passwords or tokens.

It's a `receiptwrangler.io/app/setup` link with your **Mobile Server URL** added after a `#`. Browsers don't send the
part after `#` to receiptwrangler.io, so the address stays on the phone.

Anyone who can open your login page can see the QR code, and so your **Mobile Server URL**. Don't turn it on if that
address should stay private.
