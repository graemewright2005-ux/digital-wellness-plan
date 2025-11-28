# GitHub Setup Guide

Complete step-by-step instructions for deploying the Digital Wellness Plan to GitHub Pages.

## Prerequisites

- GitHub account (free)
- All project files downloaded

## Step 1: Create a New Repository

1. Go to [github.com](https://github.com) and log in
2. Click the **+** icon in the top-right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `digital-wellness-plan` (or your preferred name)
   - **Description**: "Self-guided digital wellbeing resource for FE/HE educators"
   - **Public** or **Private**: Your choice (both work with GitHub Pages)
   - **Do NOT** initialize with README, .gitignore, or license (we have our own files)
5. Click **"Create repository"**

## Step 2: Upload Your Files

### Option A: Via Web Interface (Easiest)

1. On your new repository page, click **"uploading an existing file"** link
2. Drag and drop the **entire `digital-wellness-plan` folder** into the upload area
   - Or click "choose your files" and select all files
3. GitHub will show all files being uploaded (should see about 12 files)
4. At the bottom, add a commit message: "Initial commit - Digital Wellness Plan v1.0"
5. Click **"Commit changes"**

### Option B: Via Git Command Line (Advanced)

```bash
# Navigate to your project folder
cd digital-wellness-plan

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Digital Wellness Plan v1.0"

# Add remote (replace YOUR-USERNAME and REPO-NAME)
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git

# Push to GitHub
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. In your repository, click **"Settings"** (top navigation)
2. In the left sidebar, click **"Pages"** (under "Code and automation")
3. Under "Source", select:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. Click **"Save"**
5. Wait 1-2 minutes for deployment

## Step 4: Get Your Live URL

1. Refresh the Settings → Pages page
2. You'll see a message: **"Your site is live at https://[your-username].github.io/digital-wellness-plan/"**
3. Click the URL to test your site
4. **Bookmark this URL** - this is your live site!

## Step 5: Test Your Site

Visit your live URL and check:
- ✅ Dashboard loads with today's date
- ✅ Navigation works (Dashboard, Surgery, Favourites, Settings)
- ✅ Cards flip when clicked in Wellbeing Surgery
- ✅ Can add goals (max 3)
- ✅ Can favourite cards
- ✅ Settings page allows font size adjustment
- ✅ Data persists when you refresh the page
- ✅ Works on mobile devices

## How to Update Your Site

After the initial setup, updating is easy:

### Method 1: Edit Files Directly on GitHub

1. Go to your repository on GitHub
2. Navigate to the file you want to edit (e.g., `js/data.js`)
3. Click the **pencil icon** (Edit this file)
4. Make your changes
5. Scroll down and click **"Commit changes"**
6. Your site will automatically update in 1-2 minutes!

### Method 2: Re-upload Files

1. Make changes to files on your computer
2. Go to your repository on GitHub
3. Navigate to the file you want to replace
4. Click **"Add file" → "Upload files"**
5. Drag the updated file (it will replace the old one)
6. Commit changes

### Method 3: Git Command Line

```bash
# Make your changes locally
# Then:
git add .
git commit -m "Description of changes"
git push
```

## Troubleshooting

### Site Not Showing After 2 Minutes?

1. Check Settings → Pages shows "Your site is published"
2. Try a hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
3. Clear browser cache
4. Check browser console for errors (F12)

### 404 Error?

1. Verify the branch is set to `main` in Settings → Pages
2. Verify the folder is set to `/ (root)`
3. Make sure all files are in the root of your repository, not in a subfolder

### Changes Not Appearing?

1. Wait 2-3 minutes after committing (GitHub Pages deployment takes time)
2. Do a hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
3. Check GitHub Actions tab to see if deployment is still in progress

### Cards Not Loading?

1. Open browser console (F12 → Console tab)
2. Look for JavaScript errors
3. Verify all `.js` files uploaded correctly
4. Check file paths are correct (case-sensitive!)

## Important Tips

### URLs to Remember

1. **Repository URL**: `https://github.com/YOUR-USERNAME/digital-wellness-plan`
   - This is where you edit files

2. **Live Site URL**: `https://YOUR-USERNAME.github.io/digital-wellness-plan/`
   - This is what you share with users

**Don't confuse these!** The repository URL is for editing; the .github.io URL is your actual site.

### Keeping It Updated

- GitHub Pages automatically rebuilds when you commit changes
- No manual deployment needed
- Changes typically appear within 1-2 minutes
- You can make unlimited updates

### Custom Domain (Optional)

If you want a custom URL (e.g., `wellbeing.yourcollege.edu`):
1. Go to Settings → Pages
2. Under "Custom domain", enter your domain
3. Follow GitHub's instructions for DNS setup
4. This requires access to your domain's DNS settings

## Next Steps

✅ **Site is live!** Now you can:

1. Share the URL with colleagues for testing
2. Add it to Moodle (see `MOODLE_SETUP.md`)
3. Add more content (see `ADD_CONTENT.md`)
4. Gather feedback and iterate

## Quick Reference Commands

```bash
# Check git status
git status

# See what's changed
git diff

# Add all changes
git add .

# Commit with message
git commit -m "Your message here"

# Push to GitHub
git push

# Pull latest changes
git pull
```

---

**Need Help?**

- GitHub Docs: [pages.github.com](https://pages.github.com)
- GitHub Pages Troubleshooting: [docs.github.com/pages](https://docs.github.com/en/pages)

---

*This guide was created specifically for the Digital Wellness Plan project.*
