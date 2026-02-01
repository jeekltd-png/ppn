# Assets Folder

This folder contains all media assets for the Prayer Power Network website.

## Structure

```
assets/
├── images/          # All images (photos, banners, etc.)
│   ├── hero/       # Hero section backgrounds
│   ├── events/     # Conference and event photos
│   ├── pastors/    # Pastor photos
│   ├── gallery/    # Prayer collages and community photos
│   └── icons/      # Favicon and app icons
└── README.md       # This file
```

## Image Guidelines

### Formats
- **Photos**: JPG (optimized, 80-85% quality)
- **Graphics/Logos**: PNG or SVG
- **Hero Images**: WebP (with JPG fallback)

### Sizes
- **Hero Images**: 1920x1080px (16:9 ratio)
- **Event Cards**: 800x600px (4:3 ratio)
- **Pastor Photos**: 600x600px (1:1 square)
- **Gallery Images**: 800x800px (1:1 square)
- **Thumbnails**: 400x400px

### Optimization
- Compress images before upload
- Use tools like TinyPNG, ImageOptim, or Squoosh
- Target file size: < 200KB for photos, < 50KB for icons

### Alt Text
Always provide descriptive alt text for accessibility:
```html
<img src="assets/images/events/edinburgh-conference.jpg" 
     alt="Worshippers with raised hands at Edinburgh Conference">
```

## Adding New Images

1. Place image in appropriate subfolder
2. Optimize and compress
3. Update HTML with correct path
4. Add descriptive alt text
5. Test on mobile and desktop

## Placeholder Images

Currently, the website uses CSS gradients as placeholders. Replace with actual images:
- Hero background: `assets/images/hero/prayer-background.jpg`
- Pastor Henry: `assets/images/pastors/pastor-henry.jpg`
- Pastor Joy: `assets/images/pastors/pastor-joy.jpg`
- Event banners: `assets/images/events/[event-name].jpg`
- Prayer collages: `assets/images/gallery/collage-[1-4].jpg`

## Icon Files

Place these files in `assets/images/icons/`:
- `favicon.ico` (16x16, 32x32)
- `favicon-32x32.png`
- `favicon-16x16.png`
- `apple-touch-icon.png` (180x180)
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`

Then add to HTML `<head>`:
```html
<link rel="icon" type="image/x-icon" href="assets/images/icons/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="assets/images/icons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="assets/images/icons/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="assets/images/icons/apple-touch-icon.png">
```
