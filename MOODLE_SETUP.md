# Moodle Setup Guide

Complete instructions for integrating the Digital Wellness Plan into Moodle (or other Learning Management Systems).

## Prerequisites

- Digital Wellness Plan deployed to GitHub Pages (live URL)
- Access to edit a Moodle course
- Teacher or editing privileges

## Method 1: Direct Link (Recommended)

This is the **simplest and most reliable** method. Students click a link that opens the resource in a new tab.

### Steps

1. **Turn editing on** in your Moodle course
2. In the section where you want to add the resource, click **"Add an activity or resource"**
3. Select **"URL"** and click **"Add"**
4. Fill in the details:

   **Name**: `Digital Wellness Plan`
   
   **Description**:
   ```
   A self-guided resource to help you manage your digital wellbeing.
   
   Browse 30 symptom/treatment cards across 8 sections:
   • Screen Time & Boundaries
   • Communication Stress
   • Information Overload
   • Work-Life Balance
   • Sleep & Evening Use
   • Focus & Productivity
   • Social Media
   • Physical Health
   
   Your data is stored locally on your device only. No tracking.
   ```
   
   **External URL**: `https://YOUR-USERNAME.github.io/digital-wellness-plan/`
   (Replace with your actual GitHub Pages URL)
   
   **Display**: Select **"New window"**
   
5. Click **"Save and display"** to test
6. Click **"Save and return to course"** when satisfied

### Test It

Click the link from a student's perspective to ensure it:
- Opens in a new tab
- Loads the Dashboard correctly
- All navigation works

---

## Method 2: Embedded iframe (Advanced)

This embeds the resource directly in a Moodle page. **Note**: This is more complex and may have display issues on mobile.

### Steps

1. **Turn editing on** in your Moodle course
2. Click **"Add an activity or resource"**
3. Select **"Label"** or **"Page"** (Label for inline, Page for full page)
4. Click **"Add"**
5. Give it a name (if using Page): `Digital Wellness Plan`
6. In the content editor, click the **HTML source button** (looks like `< >`)
7. Paste this code:

```html
<div style="position: relative; padding-bottom: 75%; height: 0; overflow: hidden; max-width: 100%; background: #0a0a0a; border-radius: 8px;">
    <iframe 
        src="https://YOUR-USERNAME.github.io/digital-wellness-plan/" 
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
        title="Digital Wellness Plan"
        allow="fullscreen">
    </iframe>
</div>

<p style="margin-top: 1rem; text-align: center;">
    <a href="https://YOUR-USERNAME.github.io/digital-wellness-plan/" 
       target="_blank" 
       style="display: inline-block; padding: 0.75rem 1.5rem; background: linear-gradient(135deg, #fb8230, #fcdb3e); color: #000; text-decoration: none; border-radius: 8px; font-weight: 600;">
        Open in Full Screen
    </a>
</p>

<p style="margin-top: 0.5rem; color: #666; font-size: 0.875rem; text-align: center;">
    <strong>Having trouble?</strong> Click "Open in Full Screen" above for the best experience.
</p>
```

8. **Replace** `YOUR-USERNAME` with your actual GitHub username (in TWO places)
9. Click the **HTML source button** again to return to visual editor
10. Click **"Save and display"** to test

### Customizing the iframe

**Adjust Height** (if content gets cut off):
Change `padding-bottom: 75%` to a different percentage:
- `56.25%` = 16:9 ratio (widescreen)
- `75%` = 4:3 ratio (default)
- `100%` = square
- `133%` = taller

**Remove Border**:
The code already has `border: none`, but you can add:
```css
border-radius: 0;
```

**Change Button Color**:
Modify the `background` property in the button's style.

---

## Mobile Considerations

### Method 1 (Direct Link):
- ✅ Works perfectly on mobile
- ✅ Opens in mobile browser
- ✅ Full functionality

### Method 2 (iframe):
- ⚠️ May require horizontal scrolling on small screens
- ⚠️ "Open in Full Screen" button provides better experience
- ✅ Still functional, just not optimal

**Recommendation**: Use Method 1 for best mobile experience.

---

## Student Instructions Template

Copy and paste this into your Moodle course description or announcement:

```
📱 Welcome to the Digital Wellness Plan!

This resource helps you manage your relationship with technology and digital wellbeing.

🔍 What's inside:
• 30 symptom/treatment cards across 8 sections
• Daily motivational messages
• Personal goal tracking (max 3 at a time)
• Favourites you can save and revisit

🔒 Your privacy:
• All your data stays on YOUR device only
• No tracking, no data collection
• You have full control

💡 How to use it:
1. Start at the Dashboard
2. Browse the Wellbeing Surgery to find symptoms that resonate
3. Click cards to flip and see treatments
4. Add up to 3 goals to your Dashboard
5. Favourite cards you want to return to

✨ Pro tip: Bookmark the page for easy access anytime!
```

---

## Troubleshooting

### iframe Not Displaying?

1. **Check URL**: Ensure GitHub Pages URL is correct (must include `https://`)
2. **Check Permissions**: Some Moodle installations restrict iframes
3. **Try Method 1**: Direct link always works

### Content Cut Off in iframe?

1. Increase the `padding-bottom` percentage
2. Or use "Open in Full Screen" button
3. Or switch to Method 1 (Direct Link)

### localStorage Not Working in iframe?

- Some browsers restrict localStorage in iframes
- **Solution**: Use Method 1 (Direct Link)
- This ensures full functionality

### Students Can't See It?

1. **Check visibility**: In Moodle, ensure the activity is visible to students
2. **Check availability**: Check any date or group restrictions
3. **Check role permissions**: Ensure students have access to the resource type

---

## Best Practices

### ✅ DO:

- Use Method 1 (Direct Link) for reliability
- Test as a student before announcing
- Provide clear instructions to students
- Include the direct URL as a backup
- Check it works on mobile devices

### ❌ DON'T:

- Don't embed without providing a direct link backup
- Don't forget to test on mobile
- Don't restrict access unnecessarily
- Don't forget to replace YOUR-USERNAME in the code

---

## Updating Content

When you update the GitHub Pages site:
- **Method 1**: No changes needed in Moodle - students always see the latest version
- **Method 2**: No changes needed - the iframe will show the updated content

The link/iframe always points to the live site, so updates are automatic!

---

## Alternative: Direct Download

Instead of linking to GitHub Pages, you can:

1. Upload all files to Moodle's "File" resource
2. Students download and open `index.html` locally
3. **Pros**: Works offline
4. **Cons**: No automatic updates, more complex for students

**Recommendation**: Use GitHub Pages link for easier distribution and updates.

---

## Quick Checklist

Before announcing to students:

- [ ] GitHub Pages site is live and working
- [ ] URL is correct in Moodle
- [ ] Resource is visible to students
- [ ] Tested as a student (or in incognito mode)
- [ ] Works on mobile device
- [ ] Instructions provided
- [ ] Direct URL available as backup

---

**Need Help?**

- Moodle Docs: [docs.moodle.org](https://docs.moodle.org)
- Test with colleagues before rolling out to students
- Have students report any issues

---

*This guide was created specifically for the Digital Wellness Plan project.*
