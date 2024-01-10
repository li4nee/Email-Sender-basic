# Nodemailer Email Sender

This Node.js script utilizes the Nodemailer library to send emails through Gmail. It allows you to send emails with attachments to multiple recipients.

# Prerequisites

Before running the script, make sure you have the following:

1. Node.js installed on your machine.
2. A Gmail account to send emails from.
3. Your Gmail's app password.

# Generating App Password for Gmail

To use an "App Password" for your Gmail account, follow these steps:

## Enable Two-Factor Authentication (2FA):

1. Go to your Google Account settings: [Google Account](https://myaccount.google.com/).
2. Click on "Security" in the left sidebar.
3. Scroll down to the "Signing in to Google" section and find "2-Step Verification."
4. Enable 2-Step Verification and follow the prompts to set it up.

## Generate an App Password:

1. After enabling 2-Step Verification, scroll down to the "App passwords" section.
2. Click on "App passwords." You may need to enter your Google account password again.

## Select App and Device:

1. In the "Select app" dropdown, choose "Other (Custom name)" to enter a custom name for your app password.
2. In the "Select device" dropdown, choose the device or app you're generating the password for. If your specific device or app isn't listed, choose "Other (Custom name)".

## Enter Custom Name:

1. Enter a custom name for your App Password. This is useful for identifying the purpose of the password later. For example, you might use "Node.js Email Script."

## Generate Password:

1. Click on the "Generate" button.

## Copy the App Password:

Google will generate a 16-character app password for you. Copy this password as it will be used as your app's password in the script.


# Setting Up .env File

To configure your Node.js script with Gmail credentials, create a `.env` file in the root directory and add the following content:

## .env File Content

```env
USER='your_email_address@gmail.com'
PASSWORD='your_app_password_from_google'


