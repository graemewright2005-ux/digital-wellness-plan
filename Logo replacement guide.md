# 🎨 HOW TO REPLACE THE LOGO

## ✅ **GOOD NEWS!**

Your HTML files are **already set up correctly** for a logo file!

All 5 HTML files reference:
```html
<img src="assets/logo.png" alt="DigiWest" class="logo">
```

---

## 📋 **WHAT YOU NEED TO DO:**

### **Option A: Using PNG (Recommended)**

1. **Prepare your logo:**
   - File name: `logo.png`
   - Recommended size: 80x80px to 200x200px
   - Format: PNG with transparent background (best)
   - Or PNG with solid background (also fine)

2. **Upload to GitHub:**
   - Go to: `https://github.com/GWC25/accessibility-toolkit`
   - Navigate to `assets/` folder
   - Click "Add file" → "Upload files"
   - Upload your `logo.png`
   - Commit changes

3. **Done!** No code changes needed - the logo will appear automatically

---

### **Option B: Using JPEG**

If you want to use a JPEG instead:

1. **Prepare your logo:**
   - File name: `logo.jpg`
   - Recommended size: 80x80px to 200x200px
   - Format: JPEG (note: no transparent background)

2. **Upload to GitHub:**
   - Upload `logo.jpg` to `assets/` folder

3. **Update HTML files:**
   You need to change 5 HTML files to reference `.jpg` instead of `.png`

   **Files to update:**
   - index.html
   - AT-finder.html
   - AT-toolkit.html
   - AT-settings.html
   - AT-index.html (if it exists)

   **Change line 14 in each file from:**
   ```html
   <img src="assets/logo.png" alt="DigiWest" class="logo">
   ```
   
   **To:**
   ```html
   <img src="assets/logo.jpg" alt="DigiWest" class="logo">
   ```

---

## 🎨 **CURRENT LOGO STYLING:**

The logo is styled with these CSS rules:

```css
.logo {
    width: 40px;
    height: 40px;
}
```

**Want to change the size?**

### **To Make Logo BIGGER:**

Update `styles.css` line 128-131:

**Small logo (current):** 40x40px
```css
.logo {
    width: 40px;
    height: 40px;
}
```

**Medium logo:**
```css
.logo {
    width: 60px;
    height: 60px;
}
```

**Large logo:**
```css
.logo {
    width: 80px;
    height: 80px;
}
```

**Custom size (different width/height):**
```css
.logo {
    width: 100px;
    height: 60px;
}
```

**Auto-maintain aspect ratio:**
```css
.logo {
    height: 50px;
    width: auto;  /* Maintains original proportions */
}
```

---

## 📝 **CHECKLIST:**

### **Easiest Method (PNG):**
- [ ] Rename your logo file to `logo.png`
- [ ] Upload to `assets/` folder on GitHub
- [ ] Wait 2-3 minutes for GitHub Pages to rebuild
- [ ] Refresh your site - logo appears!

### **Alternative Method (JPEG):**
- [ ] Rename your logo file to `logo.jpg`
- [ ] Upload to `assets/` folder on GitHub
- [ ] Update 5 HTML files (change `.png` to `.jpg`)
- [ ] Commit all changes
- [ ] Wait 2-3 minutes
- [ ] Refresh - logo appears!

### **Optional - Adjust Size:**
- [ ] If logo looks too small/big, update `styles.css`
- [ ] Change `.logo` width and height values
- [ ] Upload updated CSS
- [ ] Refresh to see new size

---

## 🎯 **RECOMMENDED SETTINGS:**

**For a square logo (like yours):**
```css
.logo {
    width: 50px;
    height: 50px;
}
```

**For a wide rectangular logo:**
```css
.logo {
    height: 40px;
    width: auto;
}
```

**For a tall rectangular logo:**
```css
.logo {
    width: 40px;
    height: auto;
}
```

---

## ⚠️ **IMPORTANT NOTES:**

1. **File name matters!** 
   - If you name it `Logo.png` or `LOGO.PNG` it won't work
   - Must be exactly `logo.png` (lowercase)

2. **File location matters!**
   - Must be in the `assets/` folder
   - Not in root or any other folder

3. **Give it time!**
   - GitHub Pages takes 2-3 minutes to rebuild
   - Clear your browser cache if logo doesn't appear

4. **Alt text:**
   - Currently says "DigiWest"
   - To change: Update `alt="DigiWest"` to `alt="Your Text"` in all 5 HTML files

---

## 🚀 **QUICK START:**

**The fastest way:**

1. Rename your logo → `logo.png`
2. Upload to `assets/` folder
3. Done!

**That's it!** The site is already configured to use `assets/logo.png` 🎉

---

## 🆘 **TROUBLESHOOTING:**

**Logo doesn't appear?**
- Check file name is exactly `logo.png` (lowercase)
- Check file is in `assets/` folder (not root)
- Wait 3 minutes for GitHub Pages
- Hard refresh browser (Ctrl+F5 or Cmd+Shift+R)
- Check browser console (F12) for 404 errors

**Logo appears but wrong size?**
- Edit CSS `.logo` width and height
- Upload updated `styles.css`

**Logo appears but cut off?**
- Use `width: auto` or `height: auto` in CSS
- Or use `object-fit: contain` in CSS

---

**Need help? Let me know and I can update the files for you!** 🤝
