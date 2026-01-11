# Portfolio Website - Anusha R Karegoudar

A modern, interactive portfolio website showcasing the work and expertise of Anusha R Karegoudar, a Cloud Engineer & AI Specialist.

## 🌟 Features

- **Interactive 3D Elements**: Engaging 3D components and animations powered by Three.js
- **Smooth Animations**: Framer Motion animations for seamless transitions
- **Dark Mode**: Built-in dark theme with theme switching capability
- **Responsive Design**: Fully responsive layout optimized for all devices
- **Performance Optimized**: Lazy loading, code splitting, and performance monitoring
- **SEO Friendly**: Comprehensive meta tags and Open Graph support
- **Custom Cursor**: Interactive custom cursor for enhanced user experience
- **Parallax Effects**: Smooth parallax scrolling animations
- **Section Highlights**:
  - Hero section with animated text
  - About section with 3D elements
  - Skills showcase
  - Experience timeline
  - Projects gallery
  - Publications
  - Certifications
  - Education history
  - Contact form

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: Custom components with [shadcn/ui](https://ui.shadcn.com/)
- **3D Graphics**: [Three.js](https://threejs.org/) / [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/BhanuPrakash056/portfolio-website-3.git
   cd portfolio-website-3
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Run the development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier

## 📁 Project Structure

```
portfolio-website-3/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── hero-section.tsx  # Hero section component
│   ├── about-section.tsx # About section
│   ├── skills-section.tsx # Skills showcase
│   └── ...               # Other section components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
└── styles/              # Additional styles
```

## 🎨 Customization

### Update Personal Information

Edit the metadata in [app/layout.tsx](app/layout.tsx):

```typescript
const siteMetadata = {
  title: "Your Name - Your Title",
  description: "Your description",
  url: "https://yourdomain.com",
  // ...
}
```

### Modify Content

Update the content in respective component files:

- Hero: [components/hero-section.tsx](components/hero-section.tsx)
- About: [components/about-section.tsx](components/about-section.tsx)
- Skills: [components/skills-section.tsx](components/skills-section.tsx)
- Projects: [components/projects-section.tsx](components/projects-section.tsx)
- And more...

### Styling

- Global styles: [app/globals.css](app/globals.css)
- Tailwind config: `tailwind.config.js`
- Custom components: `components/ui/`

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

### Build for Production

```bash
pnpm build
pnpm start
```

## 🔧 Environment Variables

Create a `.env.local` file for any environment-specific variables:

```env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 📈 Performance

This portfolio is optimized for performance with:

- Image optimization via Next.js Image component
- Code splitting and lazy loading
- Reduced motion support for accessibility
- Performance monitoring hooks
- Efficient 3D rendering

See [PERFORMANCE_IMPROVEMENTS.md](PERFORMANCE_IMPROVEMENTS.md) for detailed optimizations.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Anusha R Karegoudar**

- Website: [https://anushark.co.in](https://anushark.co.in)
- GitHub: [@BhanuPrakash056](https://github.com/BhanuPrakash056)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

⭐ Star this repo if you find it helpful!
