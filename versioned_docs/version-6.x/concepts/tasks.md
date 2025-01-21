# Tasks

System Tasks are records of actions taken by the system, or initiated by a user.

Only a few types of entities are associated with system tasks, such as:

* [System Email](/docs/concepts/system-settings/system-email)
* [Receipt Processing Settings](/docs/concepts/system-settings/receipt-processing-settings)

System tasks allows administrators get a better idea of what the system is doing, and what the results are. They are
very useful in debugging AI and OCR issues.

Check out the documentation for these entities above, for more information on their associated system tasks.

## Tasks Implementation

New in version 6, Receipt Wrangler uses the [asynq](https://github.com/hibiken/asynq) library to queue, and execute
tasks. These tasks will produce a System Task, which can be viewed the associated entities' page (for example a
system email, receipt processing setting's page).

asynq uses Redis to queue and execute tasks when there is an available worker to process them.

Additionally, any failed tasks such as quick scans, or receipts processed via email will be retried up to a maximum of 3
times, and failed quick scans can be re-run by users with appropriate permissions via
the [activity widget](/docs/concepts/groups/managing-dashboards#widgets).


