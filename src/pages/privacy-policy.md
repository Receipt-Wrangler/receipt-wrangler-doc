# Privacy Policy for Receipt Wrangler

**Developed by Noah Hall**

**Effective Date: 2024-03-01**

**Last updated: 2026-07-21**

## Introduction

Receipt Wrangler, an open-source receipt management and splitting application, is developed by Noah Hall and is offered at no cost. This policy is designed to transparently inform users about our practices regarding the collection, use, and disclosure of information.

## Information Collection and Use

Receipt Wrangler does not collect personal information. For enhanced functionality, while using our Service, we may request certain non-personal information which will be retained on your device and not collected by us. The only cookies used are essential for authentication. The mobile app additionally sends anonymous crash and error reports, which you can turn off — see [Crash and Error Reporting (Mobile App)](#crash-and-error-reporting-mobile-app).

## AI Powered Receipts and Data Transmission

For servers with AI Powered Receipts enabled, potentially identifiable information, such as partial credit card numbers, or names may be transmitted to OpenAI or to Google via Gemini for processing. Receipt Wrangler does not store this information; it only facilitates its transmission for service enhancement.

## Crash and Error Reporting (Mobile App)

The Receipt Wrangler **mobile app** sends anonymous crash and error reports so that bugs can be found and fixed. This applies only to the mobile app — the web interface and the Receipt Wrangler server do not send any crash or error reports.

Reports are processed by [GlitchTip](https://glitchtip.com), a hosted, open-source error-tracking service created by Burke Software and Consulting, acting on our behalf. The app uses the Sentry-compatible `sentry_flutter` SDK, configured to send diagnostics only.

### What a crash report includes

* The error itself: the exception type, its message, and the stack trace (the app's own source file names and line numbers).
* Basic device and operating system information, such as device model, OS name and version, screen size and orientation, language/locale, and time zone.
* App information: the app version and build number, and whether the app was in the foreground.
* A short automatic trail of technical events (such as app lifecycle changes) leading up to the error.

Because error messages are included verbatim, a failed network request may incidentally include the address of the Receipt Wrangler server your app is connected to.

### What a crash report never includes

* **Any receipt data** — no receipt images, merchants, amounts, line items, categories, tags, comments, or attachments.
* **Your identity** — no username, email address, user ID, authentication tokens, or password. The app never associates a report with an account.
* **Your IP address** — PII collection is disabled in the SDK, so no IP address is attached or inferred.
* **Screenshots or a capture of what is on screen**, and no view-hierarchy dump.
* **App logs** — the app's own log output is not attached to reports.
* **Usage or behavioral analytics** — there is no analytics or advertising SDK in the app, no advertising identifiers, no performance/usage tracing, and no session tracking. Crash and error reports are the only data the app transmits to us.

Crash reports are automatically deleted after 90 days.

### Turning it off

Crash reporting is on by default. To turn it off, open **Profile → Privacy** in the mobile app and switch off **"Crash & error reporting"**. The change takes effect immediately — no restart — and while it is off the reporting SDK is not started at all, so nothing is collected or transmitted.

## Log Data

Receipt Wrangler collets log data, such as various levels of debugging. This data is not transmitted off server.

## Service Providers

Third-party services may be used to facilitate our Service, provide the Service on our behalf, perform Service-related services, or assist in analyzing how our Service is used. These third parties have access to your Personal Information only to perform tasks on our behalf and are obligated not to disclose or use it for any other purpose.

The third-party services currently used are: GlitchTip for mobile crash and error reporting (see above), and, on servers with AI Powered Receipts enabled, OpenAI or Google Gemini for receipt data extraction.

## Security

We employ commercially acceptable means to protect your information, but no method of transmission over the internet or electronic storage is 100% secure.

## Links to Other Sites

Our Service may contain links to external sites not operated by us. We advise you to review the Privacy Policy of these websites.

## Children’s Privacy

We do not knowingly collect information from children. Parents are encouraged to monitor their children's Internet usage. If a child has provided information to us, please contact us.

## Changes to This Privacy Policy

Our Privacy Policy may be updated from time to time. Users are advised to review this page periodically for any changes.

## Contact Us

For questions or suggestions about our Privacy Policy, contact Noah Hall at [noah231515@gmail.com](mailto:noah231515@gmail.com).
