# About

The **About** dialog shows links to the Receipt Wrangler project and which version of Receipt Wrangler your server is
running. It's handy when you report a problem.

## Opening the About dialog

Click your avatar at the top of the sidebar and choose **About**, the item just above **Logout**. If the sidebar is
closed, open it first with the **Toggle sidebar** button in the header.

![the avatar menu with About highlighted, just above Logout](/img/about/avatar-menu.png)

Everyone who is signed in can open it. It doesn't need any permission.

![the About dialog with its Project and Build sections, on a server where Version and Build Date are unknown](/img/about/about-dialog.png)

## Project

Links to the project, each opening in a new tab:

| Link | Where it goes |
| --- | --- |
| **Documentation** | This documentation site, https://receiptwrangler.io |
| **Source Code** | The project on GitHub, https://github.com/Receipt-Wrangler |
| **Reddit** | The community, https://reddit.com/r/receiptwrangler |

## Build

**Build** tells you which build of Receipt Wrangler your server is running:

| Field | What it shows |
| --- | --- |
| **Version** | The server's version. Release Docker images show their release tag, such as `v7.3.0`. Images built from the main branch show `latest`. |
| **Build Date** | When the server's image was built, shown as a date such as "Oct 29, 2026". |

Both values come from the server, from its `VERSION` and `BUILD_DATE` environment variables. When one isn't set, as when
you run Receipt Wrangler from source, the dialog shows "unknown" for it.

## Mobile App

When an administrator has turned on the login QR code, the dialog has a third section, **Mobile App**. It shows a QR
code with the caption "Scan with your phone to open the app and connect it to this server." Scan it with your phone to
connect the mobile app to this server without typing its address.

The section only appears while **Show login QR code** is on. See
[Mobile App Setup](./system-settings/01-system-settings.md#mobile-app-setup).

## Closing the dialog

The dialog has no close button. Press **Esc**, or click anywhere outside it.
