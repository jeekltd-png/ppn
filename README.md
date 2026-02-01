# Prayer Power Network Website

## 🙏 About
Prayer Power Network is a modern, mobile-first website designed to connect a vibrant community experiencing supernatural intervention through prayer. Built with a focus on user experience, accessibility, and SEO optimization.

## ✨ Features

### Core Functionality
- **Responsive Design**: Mobile-first approach ensuring optimal viewing on all devices
- **Modern UI/UX**: Clean, warm design inspired by contemporary church websites
- **SEO Optimized**: Semantic HTML, meta tags, and structured content
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Performance**: Optimized CSS and JavaScript with lazy loading support

### Key Sections
1. **Hero Section**: Full-width background with compelling call-to-action
2. **Featured Events**: Edinburgh Conference and Leaders Retreat information
3. **Prayer Programs**: 30 Days Fasting, Monthly Intercessory Prayer, Prayer Points Library
4. **About Pastors**: Pastor Henry & Joy profiles with ministry information
5. **Community Gallery**: Prayer collages and community testimonies
6. **Contact Form**: Prayer requests and community sign-ups
7. **Newsletter**: Email subscription for updates

### Technical Features
- Smooth scrolling navigation
- Mobile hamburger menu
- Form validation
- Scroll animations
- Active navigation highlighting
- Back to top button
- Print-friendly styles
- Reduced motion support

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code recommended)
- Git (for version control)
- A local server (optional, for testing)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jeekltd-png/ppn.git
   cd ppn
   ```

2. **Open the website**
   - Simply open `index.html` in your browser, or
   - Use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. **Access the website**
   - Direct: `file:///path/to/index.html`
   - Local server: `http://localhost:8000`

## 📁 Project Structure

```
ppn/
├── index.html          # Main HTML file
├── styles.css          # All styles and responsive design
├── script.js           # JavaScript functionality
├── assets/             # Images and media files
│   ├── images/        # Event photos, pastor images, etc.
│   └── icons/         # Favicon and app icons
├── README.md          # This file
└── .gitignore         # Git ignore file
```

## 🎨 Design System

### Color Palette
- **Primary**: `#2C5F8D` (Deep Blue)
- **Primary Dark**: `#1a3d5c`
- **Primary Light**: `#4a7ba7`
- **Secondary**: `#D4AF37` (Gold)
- **Accent**: `#8B4513` (Saddle Brown)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300 (Light), 400 (Regular), 600 (SemiBold), 700 (Bold), 800 (ExtraBold)

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### Adding Images
1. Place images in the `assets/images/` folder
2. Update the HTML image placeholders with your image paths:
   ```html
   <img src="assets/images/your-image.jpg" alt="Description">
   ```

### Updating Content
- Edit `index.html` to modify text content
- Update events, programs, and pastor information directly in the HTML
- Change colors in the `:root` variables in `styles.css`

### Connecting Forms
The contact form currently logs to console. To connect to a backend:

```javascript
// In script.js, replace the form submission simulation with:
fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
})
.then(response => response.json())
.then(data => {
    // Handle success
})
.catch(error => {
    console.error('Error:', error);
});
```

## 📊 SEO Optimization

### Meta Tags
The website includes comprehensive meta tags for:
- Search engines (Google, Bing)
- Social media (Open Graph, Twitter Cards)
- Mobile optimization

### Keywords
- online prayer network UK
- Christian intercessory prayer
- supernatural intervention prayer
- 30 days fasting program

### Performance Tips
1. Optimize images (use WebP format, compress)
2. Minify CSS and JavaScript for production
3. Enable caching headers on your server
4. Use a CDN for static assets

## 🌐 Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Go to repository Settings > Pages
3. Select branch (main) and root folder
4. Save and access at `https://jeekltd-png.github.io/ppn/`

### Other Hosting Options
- **Netlify**: Drag and drop the `ppn` folder
- **Vercel**: Connect GitHub repository
- **Traditional Hosting**: Upload files via FTP

## 📱 Mobile First Approach

The website is built with mobile devices as the primary focus:
- Touch-friendly navigation and buttons
- Optimized images for faster loading
- Readable text sizes without zooming
- Simplified layouts for small screens

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels for screen readers
- Keyboard navigation support
- Focus indicators
- Alt text for images
- Sufficient color contrast (WCAG AA)

## 🔐 Security Considerations

For production deployment:
1. Implement HTTPS (SSL certificate)
2. Add CSRF protection to forms
3. Validate and sanitize all user inputs on the server
4. Use environment variables for API keys
5. Implement rate limiting on form submissions

## 📈 Analytics Integration

To track visitor engagement:

```html
<!-- Add to <head> in index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🤝 Contributing

We welcome contributions to improve the website:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is created for Prayer Power Network (Charity No. 1192591).

## 📞 Contact

**Prayer Power Network**
- Website: [prayerpowernetwork.org.uk](https://prayerpowernetwork.org.uk)
- GitHub: [@Jeekltd-png](https://github.com/Jeekltd-png)

## 🙌 Acknowledgments

- Design inspiration: Hillsong Church UK
- Fonts: Google Fonts (Inter)
- Icons: Inline SVGs for performance
- Built with ❤️ for the Prayer Power Network community

## 📋 Future Enhancements

- [ ] Event calendar integration
- [ ] Online prayer room (live streaming)
- [ ] Member portal with authentication
- [ ] Multilingual support
- [ ] Progressive Web App (PWA) functionality
- [ ] Blog/testimony section
- [ ] E-commerce for resources
- [ ] Advanced analytics dashboard

---

**Version**: 1.0.0  
**Last Updated**: February 2026  
**Status**: Production Ready 🚀
