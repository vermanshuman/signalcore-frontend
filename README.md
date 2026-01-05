# SignalCore - Travel Booking Platform

## Project Description

SignalCore is a modern, responsive travel booking and destination exploration platform built with React and Vite. It features a professional landing page with a beautiful hero image background, intuitive navigation, and a focus on providing users with curated travel experiences and seamless booking capabilities.

### Key Features

- **Modern Navigation**: Professional header with navigation menu, authentication options, and call-to-action buttons
- **Hero Landing Page**: Eye-catching hero section with background image and compelling copy
- **Responsive Design**: Fully responsive layout that adapts to desktop, tablet, and mobile devices
- **Professional Branding**: Stylized SignalCore logo with SVG icon
- **Fast Performance**: Built with Vite for optimized build times and hot module replacement
- **React-based**: Component-driven architecture for maintainability and scalability

### Technology Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **CSS**: Modern CSS3 with flexbox and responsive design
- **Development Environment**: Node.js with npm package manager

---

## Getting Started

### Prerequisites

- Node.js v20.19+ or v22.12+ ([Download Node.js](https://nodejs.org/))
- npm (comes with Node.js)

### Installation

1. **Clone the repository** (if applicable)
   ```bash
   git clone <repository-url>
   cd SignalCore
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

---

## Development Mode

### Running the Development Server

Start the development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at:
- **Local**: http://localhost:5173/
- **Network**: Use `--host` flag to expose the server

### Features in Development Mode

- ✅ Hot Module Replacement (HMR) - Changes update instantly
- ✅ Full source maps for debugging
- ✅ Development error messages and warnings
- ✅ ESLint validation

### Development Workflow

1. Make changes to components in `src/components/`
2. The browser automatically reloads with your changes
3. Use browser DevTools for debugging and inspecting

---

## Production Build

### Building for Production

Create an optimized production build:

```bash
npm run build
```

This command:
- Minifies all JavaScript and CSS
- Bundles all assets
- Optimizes images and resources
- Generates output in the `dist/` directory

### Preview Production Build

Test the production build locally before deployment:

```bash
npm run preview
```

This runs the production build on a local preview server at http://localhost:4173/

### Deploying to Production

After running `npm run build`, deploy the contents of the `dist/` folder to your hosting provider:

**Popular Options:**
- **Vercel**: Connect your Git repo for automatic deployments
- **Netlify**: Drag-and-drop the `dist` folder or connect Git
- **GitHub Pages**: Push `dist` folder to `gh-pages` branch
- **AWS S3 + CloudFront**: Upload `dist` files to S3 bucket
- **Traditional Hosting**: FTP upload the `dist` folder contents

---

## Project Structure

```
SignalCore/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header component
│   │   ├── Header.css          # Header styles
│   │   ├── LandingPage.jsx     # Main landing page component
│   │   └── LandingPage.css     # Landing page styles
│   ├── assets/                 # Images and static files
│   ├── App.jsx                 # Root app component
│   └── main.jsx                # Entry point
├── package.json                # Project dependencies
├── vite.config.js              # Vite configuration
├── eslint.config.js            # ESLint rules
└── index.html                  # HTML entry point
```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production (creates `dist/` folder) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## Configuration Files

### `vite.config.js`
Vite configuration for React with fast refresh and optimized builds.

### `eslint.config.js`
ESLint configuration for code quality and consistency.

### `package.json`
Project metadata, dependencies, and npm scripts.

---

## Troubleshooting

### Development Server Won't Start

1. **Check Node.js version**:
   ```bash
   node --version  # Should be v20.19+ or v22.12+
   ```

2. **Clear cache and reinstall**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Check if port 5173 is in use**:
   ```bash
   npm run dev -- --port 3000  # Use different port
   ```

### Build Errors

1. **Run lint check**:
   ```bash
   npm run lint
   ```

2. **Ensure all dependencies installed**:
   ```bash
   npm install
   ```

3. **Clear Vite cache**:
   ```bash
   rm -rf dist .vite
   npm run build
   ```

---

## Performance Optimization

- **Code Splitting**: Vite automatically splits code for optimal loading
- **Tree Shaking**: Unused code is removed from production builds
- **Image Optimization**: Use modern image formats (WebP, AVIF)
- **Lazy Loading**: Implement React lazy/Suspense for route-based splitting

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## License

This project is licensed under the MIT License.

---

## Support & Contact

For questions or issues, please contact: [support@SignalCore.dev](mailto:support@SignalCore.dev)

---

## Changelog

### Version 1.0.0
- Initial release
- Landing page with hero section
- Professional navigation header
- Responsive design for all devices
- Production-ready build setup
