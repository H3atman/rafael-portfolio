// Simple script to test Zoho Mail SMTP configuration
require('dotenv').config({ path: '.env.local' });
const nodemailer = require('nodemailer');

async function testEmailConfig() {
  console.log('Testing email configuration...');
  
  // Configuration 1: Standard Zoho Mail (Port 465)
  try {
    console.log('\nTrying standard configuration (Port 465)...');
    const transporter1 = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true,
      auth: {
        user: 'rafael@rvcodes.com', // Replace with your actual email
        pass: process.env.EMAIL_PASSWORD,
      },
      debug: true,
    });
    
    await transporter1.verify();
    console.log('✅ Standard configuration (Port 465) WORKS!');
    
    // Try sending a test email to both addresses
    const info = await transporter1.sendMail({
      from: '"Rafael Villanueva" <rafael@rvcodes.com>',
      to: 'rafael@rvcodes.com, rafael.villanueva0414@gmail.com', // Send to both Zoho and Gmail
      subject: 'Test Email from Portfolio',
      text: 'This is a test email from your portfolio website.',
      html: '<p>This is a test email from your portfolio website.</p>',
    });
    
    console.log('Email sent to both addresses:', info.response);
  } catch (error) {
    console.error('❌ Standard configuration (Port 465) FAILED:', error.message);
  }
  
  // Configuration 2: Alternative Zoho Mail (Port 587)
  try {
    console.log('\nTrying alternative configuration (Port 587)...');
    const transporter2 = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 587,
      secure: false,
      auth: {
        user: 'rafael@rvcodes.com', // Replace with your actual email
        pass: process.env.EMAIL_PASSWORD,
      },
      debug: true,
    });
    
    await transporter2.verify();
    console.log('✅ Alternative configuration (Port 587) WORKS!');
    
    // Try sending a test email to both addresses
    const info = await transporter2.sendMail({
      from: '"Rafael Villanueva" <rafael@rvcodes.com>',
      to: 'rafael@rvcodes.com, rafael.villanueva0414@gmail.com', // Send to both Zoho and Gmail
      subject: 'Test Email from Portfolio (Alt Config)',
      text: 'This is a test email from your portfolio website using alternative configuration.',
      html: '<p>This is a test email from your portfolio website using alternative configuration.</p>',
    });
    
    console.log('Email sent to both addresses:', info.response);
  } catch (error) {
    console.error('❌ Alternative configuration (Port 587) FAILED:', error.message);
  }
  
  console.log('\nEmail configuration test completed.');
}

testEmailConfig().catch(console.error); 