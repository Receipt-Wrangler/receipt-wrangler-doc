# API Keys

API Keys provide a secure way to authenticate and interact with Receipt Wrangler programmatically. This page covers how to manage API keys and use them for automation and integrations.

## Overview

API Keys are authentication tokens that allow external applications, scripts, or services to interact with Receipt Wrangler without requiring user login credentials. They provide a secure alternative to username/password authentication for automated workflows.

### Key Features

- **Secure Authentication**: API keys use HMAC-based validation for enhanced security
- **User-scoped Access**: Each API key is associated with a specific user and inherits their permissions
- **Usage Tracking**: Last used timestamps help monitor API key activity
- **Admin Management**: Administrators can view and manage all API keys across the system

### API Key Format

Receipt Wrangler API keys follow this structure:
```
rw.1.<base64-id>.<base64-secret>
```

- `rw`: Prefix indicating Receipt Wrangler API key
- `1`: Version number for future compatibility
- `<base64-id>`: Base64-encoded unique identifier
- `<base64-secret>`: Base64-encoded secret for HMAC validation

## Managing API Keys

### Accessing API Keys

To manage your API keys:

1. Log into Receipt Wrangler
2. Click on your avatar in the top-right corner
3. Select "Settings" from the dropdown menu
4. Navigate to the "API Keys" section

**For Administrators**: Admin users can view and manage API keys for all users by using the filter options.

### Creating API Keys

To create a new API key:

1. Navigate to the API Keys section in Settings
2. Click the "Create API Key" button (+ icon)
3. Fill out the API key form:
   - **Name**: A descriptive name for the API key (required)
   - **Description**: Optional description explaining the key's purpose
4. Click "Create API Key"

**Important**: The full API key will only be displayed once after creation. Make sure to copy and store it securely before closing the dialog.

### Viewing API Keys

The API Keys table displays:

- **Name**: The descriptive name of the API key
- **Description**: Optional description (shows "-" if not provided)
- **Created By**: The user who created the API key
- **Created At**: When the API key was created
- **Last Used At**: When the API key was last used (shows "Never" if unused)
- **Actions**: Edit and delete options

#### Admin View

Administrators have additional capabilities:

- **Filter Button**: Access filtering options to view API keys from all users
- **All API Keys View**: When filtered to show all keys, the header changes to "All API Keys"
- **Enhanced Management**: Can delete any user's API keys

### Editing API Keys

To edit an existing API key:

1. Locate the API key in the table
2. Click the edit (pencil) icon in the Actions column
3. Update the name or description as needed
4. Click "Update API Key"

**Note**: Only the name and description can be modified. The actual key value cannot be changed - you must create a new key if needed.

### Deleting API Keys

To delete an API key:

1. Locate the API key in the table
2. Click the delete (trash) icon in the Actions column
3. Confirm the deletion in the dialog

**Important Considerations**:
- Deleting an API key is permanent and cannot be undone
- Any applications using the deleted key will immediately lose access
- Administrators can delete any user's API keys
- API key deletions are tracked in system tasks for audit purposes

## Using API Keys

### Authentication

To authenticate using an API key, include it in the `Authorization` header of your HTTP requests:

```bash
curl -H "Authorization: rw.1.<base64-id>.<base64-secret>" \
     https://your-receipt-wrangler-instance.com/api/receipts
```

### Permissions

API keys inherit the permissions of their associated user:

- **User Role**: API keys have the same access level as the user who created them
- **Group Access**: API keys can only access groups that the user is a member of
- **Admin Privileges**: API keys created by administrators have administrative access

All API keys have full read and write access to resources that the associated user can access.

### Usage Tracking

Receipt Wrangler automatically tracks API key usage:

- **Last Used At**: Updated each time the API key is used for authentication
- **Asynchronous Updates**: Usage tracking happens in the background to avoid impacting request performance
- **Never Used**: Keys that haven't been used will show "Never" in the Last Used At column

## Admin Features

### Filtering API Keys

Administrators can filter the API keys view:

1. Click the filter icon in the API Keys section
2. Choose between:
   - **My API Keys**: Shows only your own API keys (default)
   - **All API Keys**: Shows API keys from all users

### System Task Tracking

API key operations are tracked in system tasks:

- **Creation**: Not currently tracked in system tasks
- **Updates**: Not currently tracked in system tasks
- **Deletion**: Creates a system task with details about the deleted key

System tasks provide an audit trail for administrative actions.

## Security Best Practices

### Storage and Handling

- **Secure Storage**: Store API keys in secure credential managers or environment variables
- **Never Commit**: Never commit API keys to version control systems
- **Limited Exposure**: Only share API keys with authorized personnel
- **Environment Variables**: Use environment variables for API keys in scripts and applications

### Monitoring and Maintenance

- **Regular Review**: Periodically review API keys and remove unused ones
- **Usage Monitoring**: Check the "Last Used At" column to identify inactive keys
- **Rotation**: Consider rotating API keys periodically for enhanced security
- **Principle of Least Privilege**: Create dedicated user accounts with minimal required permissions for API key usage

### When to Use API Keys vs. JWT Tokens

**Use API Keys for**:
- Long-running automated processes
- Server-to-server communication
- Scripts and batch operations
- Third-party integrations

**Use JWT Tokens for**:
- Interactive web applications
- Short-lived sessions
- User-facing applications

