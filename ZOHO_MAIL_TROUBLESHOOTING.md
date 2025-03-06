# Zoho Mail SMTP Troubleshooting Guide

If you're experiencing issues with the contact form not sending emails through Zoho Mail, follow this troubleshooting guide.

## Common Issues and Solutions

### 1. Authentication Failed (535 Error)

**Symptoms:**
- Error message: "535 Authentication Failed"
- Email not being sent
- Server logs showing authentication errors

**Possible Solutions:**

#### A. Check App Password
Zoho Mail often requires an app-specific password rather than your main account password:

1. Log in to your Zoho Mail account
2. Go to Account Settings > Security or App Passwords
3. Generate a new app password specifically for your portfolio website
4. Update your `.env.local` file with this new app password

#### B. Enable IMAP/POP/SMTP Access
Make sure these services are enabled for your Zoho Mail account:

1. Log in to Zoho Mail
2. Go to Settings > Mail Accounts > Your Email Account
3. Click on "POP/IMAP/SMTP"
4. Enable SMTP Access

#### C. Allow Less Secure Apps
If you're still having issues:

1. Go to Zoho Mail Account Settings
2. Navigate to Security or External Apps
3. Enable "Allow less secure apps" (Note: This is less secure but can help diagnose issues)

### 2. Connection Timeout Issues

**Symptoms:**
- Error messages about connection timeouts
- Emails not sending after long delays

**Possible Solutions:**

1. Check your firewall settings to ensure it's not blocking outgoing SMTP connections
2. Try changing the port from 465 to 587 and set `secure: false` in the transporter configuration
3. Add explicit TLS options to the configuration:
   ```javascript
   tls: {
     rejectUnauthorized: false,
     ciphers: 'SSLv3'
   }
   ```

### 3. Development vs. Production Environment

The current implementation includes a fallback for development environments that will:
- Log form submissions to the console
- Return success even if the email fails to send

For production:
1. Make sure your hosting provider allows outgoing SMTP connections
2. Set up environment variables properly in your hosting platform
3. Consider using a service like SendGrid or Mailgun as an alternative to direct SMTP

## Testing Your SMTP Configuration

You can test your SMTP configuration directly with this command:

```bash
npx nodemailer-test-email --host smtp.zoho.com --port 465 --secure --auth.user your-email@domain.com --auth.pass "your-app-password"
```

## Alternative Email Services

If you continue to have issues with Zoho Mail, consider these alternatives:

1. **SendGrid**: Offers a free tier with reliable delivery
2. **Mailgun**: Good for transactional emails
3. **AWS SES**: Very reliable but requires more setup
4. **Gmail SMTP**: Works well for testing but has daily limits

## Zoho-Specific Settings

Zoho Mail has some specific requirements:

1. The "From" email must match the authenticated user email
2. Some regions require specific regional SMTP servers (e.g., smtp.zoho.eu for Europe)
3. Zoho may temporarily block access after multiple failed attempts

If you've tried all these solutions and still have issues, consider contacting Zoho Mail support or switching to an alternative email service. 