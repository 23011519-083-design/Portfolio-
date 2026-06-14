# Huzaifa Bashir - Premium MERN Portfolio

A production-grade, modern portfolio website for a MERN Stack Developer. Built with React, Tailwind CSS, Framer Motion, and Vite.

## 🎯 Features

✨ **Premium Design**
- Modern SaaS-inspired aesthetic
- Dark mode with cyan accent color
- Glassmorphism effects
- Responsive on all devices

⚡ **Performance**
- Optimized with Vite
- Smooth scroll animations
- Lazy-loaded sections
- Production-ready code

🎨 **Components**
- Sticky navbar with active section highlighting
- Hero section with typing animation
- About section with stats
- Categorized skills showcase
- Featured projects showcase
- Learning timeline
- Contact form
- Footer

🎭 **Animations**
- Framer Motion animations
- Smooth page transitions
- Scroll progress indicator
- Back-to-top button
- Hover effects

## 📋 Tech Stack

- **React 18** - UI library
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Vite** - Build tool
- **Lucide React** - Icons
- **React Scroll** - Smooth scrolling

## 🚀 Quick Start

### Option 1: Using npm (Recommended)

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173
```

### Option 2: Using yarn

```bash
# Install dependencies
yarn install

# Start development server
yarn dev
```

## 📥 How to Import from Base44

If you generated this portfolio in Base44 and want to use it locally, follow these steps:

### Step 1: Export from Base44

Inside Base44:
1. Click the **Export** or **Download** button
2. Select **Download Code** or **Export as ZIP**
3. Download the project file

### Step 2: Extract and Setup

```bash
# Extract the downloaded ZIP
unzip portfolio.zip

# Navigate to project folder
cd huzaifa-bashir-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Step 3: Verify Everything Works

The app should open automatically at `http://localhost:5173`

### If you already have a React project:

Copy only these folders from the downloaded project:

```
src/
public/
```

Then merge the configuration files:
- `package.json` - Add missing dependencies
- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS configuration
- `vite.config.js` - Vite configuration

## 🔧 Installation from Scratch

### Create a new project from this template:

```bash
# Create new Vite project
npm create vite@latest my-portfolio -- --template react

# Navigate to project
cd my-portfolio

# Install dependencies
npm install

# Install additional packages
npm install framer-motion react-icons lucide-react react-scroll

# Install dev dependencies
npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind
npx tailwindcss init -p
```

### Then copy all files from this portfolio:

```
src/
tailwind.config.js
postcss.config.js
index.css
```

## 📁 Folder Structure

```
project/
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Timeline.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── ScrollProgress.jsx
│   │   └── BackToTop.jsx
│   ├── hooks/
│   │   └── useTypewriter.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🎨 Customization

### Update Portfolio Information

Edit `App.jsx` and section components to update:
- Name and title
- Bio and description
- Social media links
- Projects
- Skills
- Contact information

### Change Accent Color

In `tailwind.config.js` and component files, replace `cyan` with your preferred color:
- `cyan-400`, `cyan-500`, etc.

### Modify Timeline

Edit `components/sections/Timeline.jsx` to update learning milestones.

### Add/Remove Projects

Edit `components/sections/Projects.jsx` to add or remove projects.

## 🚀 Build for Production

```bash
# Create optimized build
npm run build

# Preview production build
npm run preview
```

The built files will be in the `dist/` folder, ready to deploy.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Build
npm run build

# Upload the 'dist' folder to Netlify
# Or use Netlify CLI:
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

1. Add to `vite.config.js`:
```javascript
export default defineConfig({
  base: '/your-repo-name/',
  // ... other config
})
```

2. Build and deploy:
```bash
npm run build
# Push dist folder to gh-pages branch
```

## 🔍 Troubleshooting

### Dependencies Missing

If you see errors about missing packages:

```bash
npm install framer-motion react-icons lucide-react react-scroll
npm install -D tailwindcss postcss autoprefixer
```

### Tailwind Not Working

1. Check `src/index.css` has:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

2. Check `src/main.jsx` imports CSS:
```javascript
import './index.css'
```

### White Screen

1. Check browser console for errors
2. Verify all imports in components
3. Clear `node_modules` and reinstall:
```bash
rm -rf node_modules
npm install
```

## 📝 License

This portfolio template is free to use and modify for personal use.

## 💡 Tips

- Customize the colors in `tailwind.config.js`
- Update social media links in each component
- Add your actual projects with images
- Test on mobile devices during development
- Use `npm run build` before deploying

## 🤝 Support

For issues or questions:
1. Check the troubleshooting section
2. Review the component files
3. Ensure all dependencies are installed

---

**Built with ❤️ using React, Tailwind CSS, and Framer Motion**
