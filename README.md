# Professional Portfolio Website

A clean, modern, and responsive portfolio website built with Next.js and TypeScript. Perfect for showcasing your web development projects as a junior developer.

## Features

- **Modern Design**: Clean, minimalist, and professional aesthetic
- **Fully Responsive**: Looks great on desktop, tablet, and mobile devices
- **Smooth Animations**: CSS animations for a polished user experience
- **SEO Optimized**: Built-in meta tags for better search engine visibility
- **Easy Customization**: Simple static data files for adding your projects
- **Fast Performance**: Optimized images using Next.js Image component
- **TypeScript**: Type-safe code for better development experience

## Technologies Used

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Font**: Inter (Google Fonts)
- **Deployment**: Vercel, Netlify, or any static hosting

## Project Structure

```
portfolio/
├── public/
│   └── projects/           # 👉 Place your project images here
│       ├── project-1.svg
│       ├── project-2.svg
│       └── ...
├── src/
│   ├── app/
│   │   ├── globals.css     # Global styles and animations
│   │   ├── layout.tsx      # Root layout with SEO metadata
│   │   └── page.tsx        # Main page component
│   ├── components/
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Hero.tsx        # Hero/introduction section
│   │   ├── Projects.tsx    # Projects grid section
│   │   ├── ProjectCard.tsx # Individual project card
│   │   ├── Footer.tsx      # Footer with contact info
│   │   └── index.ts        # Components export file
│   ├── data/
│   │   ├── projects.ts     # 👉 Your projects data (EDIT THIS)
│   │   └── siteConfig.ts   # 👉 Your personal info (EDIT THIS)
│   └── types/
│       └── index.ts        # TypeScript type definitions
├── package.json
├── tailwind.config.ts
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm

### Installation

1. **Clone or download this project**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## How to Customize Your Portfolio

### Step 1: Update Your Personal Information

Edit the file `src/data/siteConfig.ts`:

```typescript
export const siteConfig = {
  // Your name
  name: 'Your Name',
  
  // Your professional title
  title: 'Full Stack Web Developer',
  
  // A short bio about yourself
  bio: 'Write a brief introduction about yourself...',
  
  // Your contact email
  email: 'your.email@example.com',
  
  // Your social media links
  social: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername',
  },
  
  // SEO settings
  seo: {
    siteTitle: 'Your Name | Web Developer Portfolio',
    siteDescription: 'Your meta description for search engines...',
    // ... other SEO settings
  },
};
```

### Step 2: Add Your Projects

Edit the file `src/data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: 'unique-project-id',
    title: 'Your Project Title',
    description: 'A brief description of your project (1-2 sentences).',
    image: '/projects/your-screenshot.png',
    technologies: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://your-live-demo.com',      // Optional
    githubUrl: 'https://github.com/your-repo',  // Optional
  },
  // Add more projects...
];
```

### Step 3: Add Project Images

1. Take screenshots of your projects (recommended size: 800x600 pixels)
2. Place them in the `public/projects/` folder
3. Update the `image` path in `projects.ts` to match your file name

**Supported formats**: PNG, JPG, JPEG, WebP, SVG

### Step 4: Customize Styles (Optional)

- **Colors**: Modify Tailwind classes in components
- **Animations**: Edit `src/app/globals.css`
- **Layout**: Modify component files in `src/components/`

## Adding a New Project

1. Open `src/data/projects.ts`
2. Copy an existing project object
3. Paste it at the end of the array (before the closing `]`)
4. Update all fields with your new project info
5. Add your project screenshot to `public/projects/`
6. Save and refresh your browser

## Removing a Project

1. Open `src/data/projects.ts`
2. Find the project object you want to remove
3. Delete the entire object (including the curly braces `{}`)
4. Save the file

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" > "Import an existing project"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy"

### Build for Production

```bash
npm run build
npm run start
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy coding!** If you have questions or need help, feel free to reach out.
