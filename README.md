# Rugved Gundawar - Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing my experience, projects, skills, and achievements as a Software Engineer.

## 🌟 Features

- **Modern Dark Theme Design** - Professional dark theme with cyan and green accent colors
- **Fully Responsive** - Mobile, tablet, and desktop optimized
- **Smooth Animations** - Enhanced user experience with smooth transitions
- **SEO Optimized** - Meta tags for better search engine visibility
- **Fast Loading** - Built with Vite for optimal performance
- **Downloadable Resume** - PDF resume available for download

## 📋 Sections

- **Hero** - Introduction with name, title, and call-to-action buttons
- **About** - Professional summary and statistics
- **Skills** - Organized by categories (Languages, Cloud, Databases, Security)
- **Experience** - Work history timeline
- **Projects** - 5 featured projects with descriptions and tech stacks
- **Education** - Academic background
- **Testimonials** - Professional recommendations
- **Contact** - Contact form and social links

## 🚀 Live Demo

The portfolio is currently running at: `http://localhost:3000`

## 🛠️ Tech Stack

- **Framework:** React 18.2.0
- **Build Tool:** Vite 5.0.8
- **Styling:** CSS3 with CSS Modules
- **Package Manager:** npm

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Local Development

1. **Clone the repository** (if needed)
   ```bash
   cd /Users/rugvedgundawar/Downloads/portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The site will open at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```
   Production files will be generated in the `dist/` folder

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to complete deployment

**OR** Connect your GitHub repository to Vercel:
- Go to [vercel.com](https://vercel.com)
- Import your GitHub repository
- Vercel will auto-detect Vite and deploy

### Option 2: Netlify

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy:
   ```bash
   netlify deploy --prod --dir=dist
   ```

**OR** Use Netlify Drop:
- Build: `npm run build`
- Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

### Option 3: GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json:
   ```json
   {
     "homepage": "https://rugved-142.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Update vite.config.js:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/portfolio/',
     server: {
       port: 3000,
       open: true
     }
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

### Option 4: AWS S3 + CloudFront

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload `dist/` folder contents to S3 bucket

3. Configure S3 for static website hosting

4. (Optional) Set up CloudFront for CDN

## 📁 Project Structure

```
portfolio-website/
├── public/
│   └── Rugved_Gundawar_Resume.pdf
├── src/
│   ├── components/
│   │   ├── About.jsx / .css
│   │   ├── Contact.jsx / .css
│   │   ├── Education.jsx / .css
│   │   ├── Experience.jsx / .css
│   │   ├── Footer.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── Navbar.jsx / .css
│   │   ├── Projects.jsx / .css
│   │   ├── Skills.jsx / .css
│   │   └── Testimonials.jsx / .css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Update Personal Information

All personal data is hardcoded in the component files:
- **Hero.jsx** - Name, title, tagline
- **About.jsx** - Professional summary
- **Skills.jsx** - Technical skills
- **Experience.jsx** - Work history
- **Projects.jsx** - Project details
- **Education.jsx** - Academic background
- **Testimonials.jsx** - Recommendations
- **Contact.jsx** - Contact information

### Update Colors

Colors are defined in the CSS files using CSS variables and can be modified:
- Primary Accent: `#00d4ff` (Cyan)
- Secondary Accent: `#00ff88` (Green)
- Background: `#0a0a0a` (Dark)

### Update Resume

Replace the PDF file at `public/Rugved_Gundawar_Resume.pdf` with your updated resume.

## 📱 Contact

- **Email:** rgundawar1402@gmail.com
- **Phone:** +1 (617) 792-8614
- **LinkedIn:** [linkedin.com/in/rugved-gundawar](https://www.linkedin.com/in/rugved-gundawar/)
- **GitHub:** [github.com/Rugved-142](https://github.com/Rugved-142)
- **Medium:** [medium.com/@gundawar.r](https://medium.com/@gundawar.r)

## 📄 License

This project is open source and available for personal use.

## 🙏 Acknowledgments

- Built with React and Vite
- Design inspiration from modern portfolio trends
- Icons and emojis for visual enhancement

---

**Built with ❤️ by Rugved Gundawar**
