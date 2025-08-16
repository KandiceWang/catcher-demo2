# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Frontend Development (React/Vite)
Navigate to `catcher-demo2/src/frontend/` for all frontend development:

```bash
cd catcher-demo2/src/frontend
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Run ESLint
npm run preview      # Preview production build
```

### Project Structure
- **Main Application**: `catcher-demo2/src/frontend/` - React 19 + Vite application
- **Deployment Target**: GitHub Pages at `/catcher-demo2/` base path

## Architecture Overview

### Frontend Stack
- **React 19** with React Router DOM for SPA routing
- **Vite** as build tool and dev server
- **Tailwind CSS** with custom design system
- **ESLint** for code linting

### Key Components
- **Header Component**: Unified navigation bar used across all pages (`src/components/Header.jsx`)
- **Page Structure**: 
  - HomePage (landing page with hero, services, pricing sections)
  - TalentsPage & TalentDetailPage (freelancer search and profiles)
  - JobsPage & JobDetailPage (job search and details)

### GitHub Pages Deployment
This project uses a custom SPA routing solution for GitHub Pages:
- **404.html**: Redirects unknown routes to index.html with encoded parameters
- **index.html**: Decodes route parameters and restores proper SPA routing
- **Base Path**: All routing configured with basename="/catcher-demo2"

### CSS Architecture
- **Design System**: CSS custom properties defined in Header.css
- **Responsive Design**: Mobile-first approach with standard breakpoints
- **Component Styles**: Each page/component has its own CSS file

### Notable Implementation Details
- Router configured with `basename="/catcher-demo2"` for GitHub Pages
- Header component includes scroll-based styling changes
- All pages use standardized Header component with consistent spacing
- JobDetailPage uses static positioning (not sticky) for order cards

## Development Guidelines

### Adding New Pages
1. Create page component in appropriate `src/pages/` subdirectory
2. Add corresponding CSS file following existing naming conventions
3. Import and use `<Header />` component
4. Ensure proper `margin-top` spacing for header
5. Add route to `App.jsx` with `/catcher-demo2` basename

### Working with Components
- Use existing Header component for consistency
- Reference CSS custom properties from `:root` in Header.css
- Follow established responsive design patterns
- Import React Router's `Link` for internal navigation

### Testing GitHub Pages Routing
- Test direct URL access (e.g., `/catcher-demo2/jobs`) after deployment
- Verify browser back/forward navigation works correctly
- Ensure search functionality properly handles URL parameters