# Email Setup for Contact Form

This document explains how to set up the email functionality for the "Send me a Message" contact form in your portfolio website.

## Prerequisites

- A Zoho Mail account with your domain email (e.g., rafael@rvcodes.com)
- Access to your Next.js project

## Setup Instructions

### 1. Environment Variables

The application uses environment variables to securely store your email credentials. You need to set up the following:

1. Create or edit the `.env.local` file in the root of your project
2. Add your Zoho Mail password:
   ```
   EMAIL_PASSWORD=your_zoho_email_password_here
   ```
3. Make sure `.env.local` is in your `.gitignore` file to avoid exposing your credentials

### 2. Zoho Mail App Password (Recommended)

For better security, it's recommended to use an app-specific password instead of your main Zoho Mail password:

1. Log in to your Zoho Mail account
2. Go to Account Settings > Security or App Passwords
3. Generate a new app password specifically for your portfolio website
4. Use this app password in your `.env.local` file

### 3. SMTP Configuration

The contact form is configured to use Zoho Mail's SMTP server with the following settings:

- Host: smtp.zoho.com
- Port: 465
- Secure: true (using SSL)

These settings have been tested and confirmed to work with Zoho Mail.

### 4. Multiple Recipients

The current configuration sends notification emails to multiple addresses:
- Your Zoho Mail account (rafael@rvcodes.com)
- Your Gmail account (rafael.villanueva0414@gmail.com)

This ensures you receive notifications regardless of which email account you check more frequently.

### 5. Testing the Contact Form

To test if the email functionality is working:

1. Make sure you've set up the environment variables correctly
2. Run your Next.js application locally
3. Fill out and submit the contact form
4. Check both your Zoho Mail and Gmail inboxes for the received message

You can also run the included test script to verify your email configuration:
```
node test-email.js
```

### 6. Troubleshooting

If you're not receiving emails:

1. Check your spam/junk folder in both email accounts
2. Verify that your Zoho Mail account is active
3. Ensure your app password or account password is correct
4. Check the server logs for any error messages
5. Make sure your Zoho Mail account allows SMTP access

For more detailed troubleshooting, refer to the `ZOHO_MAIL_TROUBLESHOOTING.md` file.

## Security Considerations

- Never commit your `.env.local` file to version control
- Consider using app-specific passwords instead of your main account password
- Regularly rotate your app passwords for better security
- When deploying to production, make sure to set up the environment variables in your hosting platform

## Successful Configuration

The current implementation uses the following configuration which has been tested and confirmed to work:

```javascript
const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true,
  auth: {
    user: 'your-email@domain.com',
    pass: process.env.EMAIL_PASSWORD,
  }
});

// Email content with multiple recipients
const mailOptions = {
  from: 'your-email@domain.com',
  to: 'your-email@domain.com, your-other-email@gmail.com', // Multiple recipients
  subject: 'Subject line',
  // ... rest of email content
};
``` 