# Sella Landing Page

A beautiful, responsive landing page for Sella marketplace, featuring:

- **Bilingual support**: Darija (Arabic) primary, English secondary
- **RTL-first design**: Optimized for Arabic with right-to-left layout
- **Brand colors**: Using Sella's official color palette
- **Responsive design**: Works on mobile, tablet, and desktop
- **Language toggle**: Users can switch between Arabic and English
- **CTA sections**: Download APK and grocer onboarding

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

## 🛠 Build & Deploy

### Build for production
```bash
npm run build
npm start
```

### Deploy to Vercel

#### Option 1: Using Vercel CLI
```bash
npm i -g vercel
vercel
```

Follow the prompts and select "Sella" as your project name.

#### Option 2: GitHub Integration (Recommended)
1. Push this code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Create new project → Import repository
4. Select the repository containing this code
5. Set "Root Directory" to `web`
6. Click Deploy

#### Option 3: Connect Custom Domain
After deployment:
1. Go to Vercel dashboard
2. Select your project
3. Go to Settings → Domains
4. Add `sella.vercel.app` (or your custom domain)

## 📁 Project Structure

```
web/
├── app/
│   ├── page.tsx          # Main landing page component
│   ├── layout.tsx        # Root layout with metadata
│   ├── globals.css       # Global styles
│   └── page.module.css   # Page-specific styles
├── package.json          # Dependencies & scripts
├── tsconfig.json         # TypeScript config
├── next.config.js        # Next.js config
└── vercel.json           # Vercel deployment config
```

## 🎨 Customization

### Update Brand Colors
Edit `app/globals.css`:
```css
:root {
  --primary: #1e4d3b;      /* Brand green */
  --accent: #d96b43;       /* Terracotta */
  --attention: #f4b41a;    /* Safran yellow */
  --secondary: #a2d093;    /* Light green */
  --background: #f8f6f0;   /* Beige */
  --ink: #1c2022;          /* Dark ink */
}
```

### Update APK Download Link
In `app/page.tsx`, update the Play Store URL:
```tsx
href="https://play.google.com/store/apps/details?id=YOUR_PACKAGE_ID"
```

### Update Contact Email
Change the grocer contact email in the component.

## 📱 Features

### Hero Section
- Large, centered headline in both Darija and English
- Feature list with checkmarks
- Primary CTA: "Get the App"
- Secondary CTA: "Are you a grocer?"

### Download Section
- APK download button
- Google Play Store link
- Responsive styling

### Grocer Section
- Three benefit cards
- Contact form integration
- Eye-catching design

### Language Support
- Real-time language switching
- RTL/LTR support
- Preserved state across sections

## 📊 Performance

- **Static generation**: Pages are pre-rendered for maximum speed
- **Optimized images**: Uses Next.js Image optimization
- **CSS-in-JS**: Module CSS for minimal bundle size
- **Light-weight**: ~90KB First Load JS

## 🌍 Deployment Environments

### Production (sella.vercel.app)
- Automatic deployment on `main` branch push
- Environment: Production
- Analytics: Enabled

### Preview Deployments
- Created automatically for all PRs
- Useful for testing before production

## 🔧 Environment Variables

No environment variables required. All configuration is in code.

## 📞 Support

For deployment issues:
- Check Vercel logs: `vercel logs`
- Review build settings in Vercel dashboard
- Check `vercel.json` configuration

## 📄 License

Same as main Sella project.
