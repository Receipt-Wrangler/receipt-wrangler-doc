# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Receipt Wrangler Documentation - A Docusaurus-based documentation website for the Receipt Wrangler project, an open-source receipt management system with AI-powered data extraction capabilities.

## Development Commands

### Local Development
```bash
yarn start          # Starts development server on http://localhost:3000 with hot reload
yarn build          # Creates production build in ./build directory
yarn serve          # Serves production build locally
yarn typecheck      # Runs TypeScript type checking
```

### Deployment
```bash
yarn deploy         # Deploys to GitHub Pages (requires GIT_USER or USE_SSH)
```

## Architecture and Structure

### Documentation Organization
- **Versioned Documentation**: The project maintains multiple documentation versions (4.x, 5.x, 6.x) in `versioned_docs/`
- **Current Documentation**: Active development docs are in `docs/` directory
- **Auto-generated Sidebars**: Uses Docusaurus auto-generation from filesystem structure (configured in `sidebars.ts`)

### Key Components

#### Homepage (`src/pages/index.tsx`)
- Main landing page with hero section and feature highlights
- Uses `HomepageFeatures` component with animated SVG icons via framer-motion

#### API Documentation
- Integrated Redocusaurus plugin for OpenAPI spec rendering
- Pulls swagger.yml from the Receipt Wrangler API repository
- Accessible at `/api` route

#### Search
- Algolia DocSearch integration for full-text search capabilities
- Configuration in `docusaurus.config.ts`

### Content Structure
- **Concepts**: Core functionality explanations (groups, receipts, AI, OCR, system settings)
- **Getting Started**: Installation and initial setup guides
- **Configuration**: Database examples and environment variables
- **Development**: Contribution guidelines and development setup

### Tech Stack
- **Framework**: Docusaurus 3.7.0
- **UI Libraries**: React 18.3, framer-motion for animations
- **Documentation**: MDX support for enhanced markdown
- **API Docs**: Redocusaurus for OpenAPI specification rendering
- **Search**: Algolia DocSearch integration
- **Styling**: CSS modules with custom theme configuration

## Important Configuration Files

- `docusaurus.config.ts`: Main configuration including site metadata, presets, and theme settings
- `sidebars.ts`: Sidebar generation configuration (currently auto-generated)
- `tsconfig.json`: TypeScript configuration extending Docusaurus defaults