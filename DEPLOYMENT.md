# Deployment Guide: PRIZ1M Website & CMS

This guide covers how to deploy your React website to Netlify and enable the Content Management System (Decap CMS).

## Prerequisites
- A [GitHub](https://github.com/) account.
- A [Netlify](https://www.netlify.com/) account.
- Git installed on your computer.

## Step 1: Push to GitHub

First, you need to put your code on GitHub.

1.  **Initialize Git** (if you haven't already):
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```

2.  **Create a New Repository** on GitHub:
    - Go to [repo.new](https://repo.new).
    - Give it a name (e.g., `priz1m-website`).
    - Create the repository.

3.  **Push your code**:
    - Copy the commands shown by GitHub under "…or push an existing repository from the command line".
    - Run them in your terminal inside the `priz1m-app` folder.

## Step 2: Deploy to Netlify

1.  Log in to **Netlify**.
2.  Click **"Add new site"** > **"Import from Git"**.
3.  Choose **GitHub**.
4.  Select your `priz1m-website` repository.
5.  **Build Settings**:
    - **Build command**: `npm run build`
    - **Publish directory**: `dist`
6.  Click **"Deploy site"**.

## Step 3: Configure CMS Access (Crucial!)

For the `/admin` dashboard to work, you must enable Netlify Identity.

1.  Go to your **Site Settings** in Netlify.
2.  Select **"Identity"** from the sidebar.
3.  Click **"Enable Identity"**.
4.  **Registration preferences**:
    - Set to **"Invite only"** (so random people can't register as admins).
5.  **External providers** (Optional):
    - You can enable Google/GitHub login if you prefer that over email/password.
6.  **Git Gateway** (Required):
    - Scroll down to **"Services"** > **"Git Gateway"**.
    - Click **"Enable Git Gateway"**.
    - This allows the CMS to commit changes to your GitHub repo automatically.

## Step 4: Create an Admin Account

1.  Go to the **"Identity"** tab in your Netlify dashboard.
2.  Click **"Invite users"**.
3.  Enter your email address.
4.  You will receive an email. **Click the link in the email**.
    - *Tip: If the link takes you to your site but nothing happens, go to `yoursite.com/admin` first, then click the email link again.*
5.  Set your password.

## Step 5: How to Use the CMS

1.  Navigate to `https://yoursite.netlify.app/admin`.
2.  Login with your email and password.
3.  You will see collections for **Services**, **Portfolio**, and **Packages**.
4.  **Edit Content**:
    - Click on a collection (e.g., "Services").
    - Click "New Service" or edit an existing one.
    - Change text, select icons, or upload images.
    - Click **"Publish"**.
5.  **See Changes**:
    - The CMS will automatically commit to your GitHub repo.
    - Netlify will detect the change and re-deploy the site (usually takes 1-2 minutes).
