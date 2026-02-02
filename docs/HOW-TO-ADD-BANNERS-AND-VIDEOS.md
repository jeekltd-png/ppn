# How to Upload Banners and Videos

## 📁 Adding Banner Images to Carousel

### Step 1: Prepare Your Images
**Location:** `assets/images/`

**Current banner files needed:**
- `banner-birmingham.jpg` - Birmingham 2025 event
- `banner-prayers.jpg` - Join Prayers Live
- `banner-conference.jpg` - Edinburgh Conference

**Image Specifications:**
- **Format:** JPG, PNG, or WebP
- **Dimensions:** 1920x1080 pixels (16:9 ratio)
- **File Size:** Under 500KB (compress for faster loading)
- **Quality:** 80-85% JPEG quality

### Step 2: Upload Process
1. Navigate to: `c:\Users\aipri\Documents\Trykon\ppn\assets\images\`
2. Copy your banner images into this folder
3. Rename them to match the expected filenames above
4. Refresh your browser (Ctrl + F5)

### Current Banner References in HTML
The website already expects these files:
```html
Line 142: <img src="assets/images/banner-birmingham.jpg">
Line 149: <img src="assets/images/banner-prayers.jpg">
Line 156: <img src="assets/images/banner-conference.jpg">
```

---

## 🎥 Adding Videos to Sermon Section

### Option 1: YouTube/Vimeo Embed (Recommended)

**Why use YouTube/Vimeo?**
- Free hosting
- Automatic optimization
- Mobile-friendly
- No bandwidth costs

**Steps:**
1. Upload your sermon video to YouTube or Vimeo
2. Get the video ID from the URL:
   - YouTube: `https://www.youtube.com/watch?v=VIDEO_ID`
   - Vimeo: `https://vimeo.com/VIDEO_ID`
3. Update `index.html` in the sermons section (around line 619-657)

**Replace the placeholder:**
```html
<div class="video-placeholder">
    <div class="play-button">▶</div>
</div>
```

**With YouTube embed:**
```html
<iframe width="100%" height="200" 
    src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe>
```

**Or Vimeo embed:**
```html
<iframe width="100%" height="200" 
    src="https://player.vimeo.com/video/YOUR_VIDEO_ID" 
    frameborder="0" 
    allow="autoplay; fullscreen; picture-in-picture" 
    allowfullscreen>
</iframe>
```

### Option 2: Direct Video Upload (Self-Hosted)

**Steps:**
1. Create videos folder if it doesn't exist: `assets/videos/`
2. Save your video files there (MP4 format recommended)
3. Update HTML with video player

**Supported Formats:**
- MP4 (H.264) - Best compatibility
- WebM - Modern browsers
- File size limit: 50MB max per video

**HTML Video Player Code:**
```html
<video controls width="100%" height="200" poster="assets/images/video-thumbnail.jpg">
    <source src="assets/videos/sermon-week1.mp4" type="video/mp4">
    <source src="assets/videos/sermon-week1.webm" type="video/webm">
    Your browser does not support the video tag.
</video>
```

**Video Optimization Tips:**
- Compress videos before uploading
- Use H.264 codec for MP4
- Target bitrate: 2-4 Mbps
- Resolution: 1280x720 (720p) or 1920x1080 (1080p)

---

## ➕ Adding More Slides to Carousel

### To Add a 5th Slide (or more):

**Step 1: Add Your Image**
- Save to: `assets/images/banner-newEvent.jpg`

**Step 2: Update HTML (index.html)**
Find the carousel section (around line 155) and add before `</div>`:

```html
<!-- Slide 5: New Event -->
<a href="#events" class="banner-item banner-item-clickable">
    <img src="assets/images/banner-newEvent.jpg" alt="New Event Title">
    <div class="banner-overlay">
        <h3>NEW EVENT TITLE</h3>
        <p>Event description here</p>
    </div>
</a>
```

**Step 3: Add Navigation Dot**
Find the dots section (around line 164) and add:
```html
<span class="dot" data-slide="4"></span>
```

**Step 4: Update JavaScript (script.js)**
Find line 182 and change:
```javascript
const totalSlides = 4; // Change to 5
```
To:
```javascript
const totalSlides = 5; // Updated for 5 slides
```

**Step 5: Update CSS (styles.css)**
Find line 296 and update for 5 slides:

Change from:
```css
.banner-content {
    width: 400%; /* 4 slides */
}

.banner-item {
    width: 25%; /* 100% / 4 */
}
```

To:
```css
.banner-content {
    width: 500%; /* 5 slides */
}

.banner-item {
    width: 20%; /* 100% / 5 */
}
```

---

## 📂 Project Folder Structure

```
ppn/
├── assets/
│   ├── images/              ← PUT BANNER IMAGES HERE
│   │   ├── banner-birmingham.jpg
│   │   ├── banner-prayers.jpg
│   │   ├── banner-conference.jpg
│   │   ├── ppn-logo.png
│   │   └── [your new images]
│   │
│   ├── videos/              ← CREATE THIS & PUT VIDEOS HERE
│   │   ├── sermon-week1.mp4
│   │   ├── sermon-week2.mp4
│   │   └── [your sermon videos]
│   │
│   └── README.md
│
├── docs/                    ← DOCUMENTATION FOLDER
│   └── HOW-TO-ADD-BANNERS-AND-VIDEOS.md (this file)
│
├── index.html               ← Main website file
├── styles.css               ← Styling
├── script.js                ← JavaScript
├── README.md
└── .gitignore
```

---

## 🔧 Creating Missing Folders

**Using File Explorer:**
1. Navigate to: `c:\Users\aipri\Documents\Trykon\ppn\assets\`
2. Right-click → New → Folder
3. Name it: `videos`

**Using PowerShell (in VS Code terminal):**
```powershell
mkdir "c:\Users\aipri\Documents\Trykon\ppn\assets\videos"
```

---

## ✅ Testing Your Changes

### After Adding Banners:
1. Save files to correct folder
2. Refresh browser with **Ctrl + F5** (hard refresh)
3. Wait 5 seconds to see carousel rotation
4. Click navigation dots to test each slide

### After Adding Videos:
1. Upload/embed videos
2. Refresh page
3. Click play button
4. Test on mobile device

### Common Issues:

**Banner not showing?**
- ✓ Check file name matches exactly (case-sensitive)
- ✓ Check file is in `assets/images/` folder
- ✓ Try hard refresh (Ctrl + F5)
- ✓ Check browser console for errors (F12)

**Video not playing?**
- ✓ Verify video format (MP4 recommended)
- ✓ Check file path is correct
- ✓ For YouTube: ensure video is public
- ✓ Check embed code is complete

**Carousel not rotating?**
- ✓ Check JavaScript console for errors
- ✓ Verify `totalSlides` count is correct
- ✓ Ensure dots match number of slides

---

## 📊 Recommended Image Sizes

| Element | Dimensions | Format | Max Size |
|---------|-----------|--------|----------|
| Banner Carousel | 1920x1080 | JPG/WebP | 500KB |
| Logo | 300x300 | PNG/SVG | 100KB |
| Event Cards | 800x600 | JPG | 200KB |
| Pastor Photos | 600x600 | JPG | 150KB |
| Gallery Images | 800x800 | JPG | 200KB |
| Video Thumbnails | 1280x720 | JPG | 100KB |

---

## 🎯 Quick Reference Commands

### Compress Images (using TinyPNG or ImageOptim)
- **Online:** https://tinypng.com/
- **Desktop:** ImageOptim (Mac), RIOT (Windows)

### Video Compression (using HandBrake)
- **Preset:** Fast 720p30 or Fast 1080p30
- **Format:** MP4 (H.264)
- **Quality:** RF 22-24

### Git Commands (after adding files)
```bash
git add assets/images/banner-newEvent.jpg
git commit -m "Add new event banner"
git push origin main
```

---

## 📞 Need Help?

1. Check browser console (F12) for errors
2. Review this guide
3. Check the main README.md file
4. Verify file paths are correct
5. Test with a different browser

---

**Last Updated:** February 2, 2026  
**Version:** 1.0  
**Website:** Prayer Power Network
