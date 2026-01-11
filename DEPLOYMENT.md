# Deployment Guide

This guide covers how to deploy the Tahira Sani SEO Portfolio to various hosting platforms.

## 🚀 Quick Start

1. **Install dependencies:**
```bash
npm install
```

2. **Build for production:**
```bash
npm run build
```

3. **Preview production build locally:**
```bash
npm run preview
```

## 🌐 Deployment Options

### 1. Netlify (Recommended)

**Option A: Drag & Drop**
1. Run `npm run build`
2. Go to [Netlify](https://netlify.com)
3. Drag the `dist` folder to the deploy area

**Option B: Git Integration**
1. Push your code to GitHub/GitLab
2. Connect repository to Netlify
3. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy automatically on git push

**Custom Domain Setup:**
1. Go to Site settings > Domain management
2. Add custom domain: `tahira-sani-seo.com`
3. Configure DNS records as instructed

### 2. Vercel

**Option A: CLI Deployment**
```bash
npm install -g vercel
vercel --prod
```

**Option B: Git Integration**
1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Configure:
   - Framework: Vite
   - Build command: `npm run build`
   - Output directory: `dist`

### 3. GitHub Pages

1. **Install gh-pages:**
```bash
npm install --save-dev gh-pages
```

2. **Update package.json:**
```json
{
  "homepage": "https://yourusername.github.io/tahira-sani-portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Deploy:**
```bash
npm run deploy
```

### 4. Firebase Hosting

1. **Install Firebase CLI:**
```bash
npm install -g firebase-tools
```

2. **Initialize Firebase:**
```bash
firebase init hosting
```

3. **Configure firebase.json:**
```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

4. **Deploy:**
```bash
npm run build
firebase deploy
```

### 5. AWS S3 + CloudFront

1. **Build the project:**
```bash
npm run build
```

2. **Create S3 bucket:**
   - Enable static website hosting
   - Upload `dist` folder contents

3. **Setup CloudFront:**
   - Create distribution
   - Set S3 bucket as origin
   - Configure custom error pages (404 → /index.html)

4. **Configure Route 53:**
   - Add A record pointing to CloudFront

## 🔧 Environment Configuration

### Environment Variables

Create `.env` files for different environments:

**.env.local** (Development)
```
VITE_API_URL=http://localhost:3000
VITE_ANALYTICS_ID=your-dev-analytics-id
```

**.env.production** (Production)
```
VITE_API_URL=https://api.tahira-sani-seo.com
VITE_ANALYTICS_ID=your-prod-analytics-id
```

### Build Optimization

**Vite Configuration** (`vite.config.js`):
```javascript
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          router: ['react-router-dom']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})
```

## 📊 Performance Optimization

### 1. Image Optimization
- Use WebP format for images
- Implement lazy loading
- Compress images before deployment

### 2. Code Splitting
- Implemented via Vite's automatic code splitting
- Manual chunks for vendor libraries

### 3. Caching Strategy
- Static assets: 1 year cache
- HTML: No cache (for updates)
- Service worker for offline support

## 🔒 Security Headers

The following security headers are configured:

```
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Content-Security-Policy: default-src 'self'
```

## 📈 Analytics Setup

### Google Analytics 4

1. **Create GA4 property**
2. **Add tracking code to SEOHead.jsx:**
```javascript
// Google Analytics 4
gtag('config', 'GA_MEASUREMENT_ID', {
  page_title: 'Tahira Sani - SEO Specialist',
  page_location: window.location.href
});
```

### Google Search Console

1. **Verify ownership** via HTML tag or DNS
2. **Submit sitemap:** `https://tahira-sani-seo.com/sitemap.xml`
3. **Monitor performance** and fix issues

## 🚨 Troubleshooting

### Common Issues

**1. Routing Issues (404 on refresh)**
- Ensure SPA fallback is configured
- Check redirect rules in hosting platform

**2. Build Failures**
- Check Node.js version (use 18+)
- Clear node_modules and reinstall
- Check for TypeScript errors

**3. Performance Issues**
- Analyze bundle size with `npm run build -- --analyze`
- Optimize images and fonts
- Enable compression on server

### Debug Commands

```bash
# Check bundle size
npm run build -- --analyze

# Lint code
npm run lint

# Type check (if using TypeScript)
npm run type-check

# Test build locally
npm run preview
```

## 📞 Support

For deployment issues:
- Check hosting platform documentation
- Review build logs for errors
- Contact: sanitahira7@gmail.com

## 🔄 CI/CD Pipeline

### GitHub Actions Example

```yaml
name: Deploy to Netlify
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: netlify/actions/cli@master
        with:
          args: deploy --prod --dir=dist
        env:
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
```

This completes the deployment setup for the modern React portfolio!