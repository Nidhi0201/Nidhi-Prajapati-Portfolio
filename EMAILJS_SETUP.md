# EmailJS Setup Guide

To receive messages from your contact form, you need to set up EmailJS. Follow these steps:

## Quick Reference: Where to Find IDs

- **Service ID**: Dashboard → Email Services → Click your service → Look for "Service ID" at the top
- **Template ID**: Dashboard → Email Templates → Click your template → Check the URL or look for "Template ID" on the page
- **Public Key**: Dashboard → Account → General → Find "Public Key" section

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month free)

## Step 2: Create an Email Service

1. After logging into EmailJS, look at the **left sidebar menu**
2. Click on **"Email Services"** (or go to: https://dashboard.emailjs.com/admin)
3. Click the **"+ Add New Service"** button (usually a green button at the top)
4. Choose your email provider:
   - **Gmail** (most common) - You'll need to authorize Gmail access
   - **Outlook** - For Outlook/Hotmail accounts
   - **Custom SMTP** - For other email providers
5. Follow the setup wizard to connect your email account
6. Once created, you'll see your service listed
7. **To find your Service ID:**
   - Click on the service you just created
   - Look for **"Service ID"** - it's usually displayed prominently at the top
   - It looks like: `service_xxxxxxxxx` or just a short code
   - **Copy this Service ID** - you'll need it for your `.env.local` file

## Step 3: Create an Email Template

1. In the **left sidebar**, click on **"Email Templates"** (or go to: https://dashboard.emailjs.com/admin/template)
2. Click **"+ Create New Template"** button
3. Fill in the template:
   - **Template Name**: "Portfolio Contact Form" (or any name you like)
   - **Subject**: `New Message from {{from_name}}`
   - **Content** (the email body):
   ```
   From: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   ```
4. Click **"Save"** at the bottom
5. **To find your Template ID:**
   - After saving, you'll be on the template page
   - Look at the **URL** in your browser - it will look like: `https://dashboard.emailjs.com/admin/template/xxxxxxxxx`
   - The `xxxxxxxxx` part is your **Template ID**
   - OR look for **"Template ID"** displayed on the template page
   - It looks like: `template_xxxxxxxxx` or just a short code
   - **Copy this Template ID** - you'll need it for your `.env.local` file

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key**
3. **Copy the Public Key** (you'll need this)

## Step 5: Configure Environment Variables

1. Create a file named `.env.local` in the root of your project
2. Add these variables with your actual values:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual IDs and keys from EmailJS

## Step 6: Restart Your Dev Server

After adding the environment variables, restart your Next.js dev server:

```bash
npm run dev
```

## Testing

1. Fill out the contact form on your portfolio
2. Submit it
3. Check your email inbox - you should receive the message!

## Notes

- The free plan allows 200 emails per month
- Messages will be sent to: `nprajapati4@horizon.csueastbay.edu`
- Make sure `.env.local` is in your `.gitignore` (it should be by default in Next.js)

## Troubleshooting: Can't Find Your IDs?

### Service ID Location:
1. Go to: https://dashboard.emailjs.com/admin
2. You should see a list of your services
3. Click on the service name
4. The Service ID is usually shown:
   - At the top of the page in a box/card
   - In the service settings/details section
   - Sometimes it's labeled as "Service ID" or just shown as a code

### Template ID Location:
1. Go to: https://dashboard.emailjs.com/admin/template
2. Click on your template name
3. The Template ID can be found:
   - In the browser URL: `.../template/xxxxxxxxx` (the x's are your ID)
   - On the template page, usually at the top or in settings
   - Sometimes labeled as "Template ID"

### Still Can't Find It?
- Make sure you've actually created the service and template (not just started creating them)
- Try refreshing the page
- The IDs are usually short alphanumeric codes (like `service_abc123` or `template_xyz789`)

