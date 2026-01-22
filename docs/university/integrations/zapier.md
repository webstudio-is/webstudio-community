# How to integrate Webhook Form with Zapier

{% embed url="https://youtu.be/FDm4mz5FBD8" %}
How to integrate Webstudio with Zapier
{% endembed %}

Zapier allows you to connect Webstudio forms to thousands of apps, automating workflows like adding contacts to your CRM, sending notifications, or creating spreadsheet entries.

## What You'll Need

- A Webstudio project with a [Webhook Form](../core-components/webhook-form.md)
- A [Zapier account](https://zapier.com) (free tier available)

## Step-by-Step Guide

### 1. Create a Zap in Zapier

1. Log in to Zapier and click **Create Zap**
2. For the trigger, search for and select **Webhooks by Zapier**
3. Choose **Catch Hook** as the trigger event
4. Click **Continue** – Zapier will generate a unique webhook URL
5. Copy this webhook URL

### 2. Configure Webstudio

1. In Webstudio, select your Webhook Form component
2. Go to Settings and paste the Zapier webhook URL into the **Action** field
3. Publish your site

### 3. Test the Connection

1. In Zapier, click **Test trigger**
2. Go to your published Webstudio site and submit the form
3. Return to Zapier – it should detect your test submission
4. You'll see all the form fields available for use in your Zap

### 4. Set Up Your Action

1. Click **Continue** to set up what happens after form submission
2. Choose your destination app (Gmail, Google Sheets, Slack, HubSpot, etc.)
3. Map the form fields to the action fields
4. Test and turn on your Zap

## Common Use Cases

| Destination | Use Case |
|-------------|----------|
| Google Sheets | Log all form submissions |
| Mailchimp | Add subscribers to email lists |
| Slack | Get notified of new submissions |
| HubSpot/Salesforce | Create CRM contacts |
| Gmail | Send custom confirmation emails |
| Notion | Create database entries |

## Tips

- Test your Zap thoroughly before going live
- Use Zapier's filtering to handle conditional logic
- Set up error notifications to catch failed submissions
- Consider Zapier's multi-step Zaps for complex workflows

