# Developer Portfolio — Frontend

The frontend application of the Developer Portfolio, built with React and TypeScript.

It provides a responsive user interface designed to present professional information, technical skills, and software development projects to recruiters, technical leads, and fellow developers.

The application follows a component-based architecture, with dedicated pages, reusable UI components, and shared layouts.

Currently, portfolio content is maintained through static frontend data. Integration with a Spring Boot backend and database is planned for a future development stage.

## 🚀 Features

### Page Navigation

- **Home page** — Main introduction and featured project presentation.
- **About page** — Personal background, motivations and professional presentation.
- **Recruiter page** — Professional profile and career information.
- **Technical Lead page** — Development approach, architecture and technical decision-making.
- **Developer page** — Technical project details and implementation insights.
- **Projects page** — Overview of software development projects.
- **Project detail page** — Individual presentation of each project.
- **Skills page** — Technical and complementary skills.
- **Contact page** — Contact information and professional links.
- **404 page** — Fallback page for unknown routes.

### User Interface

- Responsive layouts for desktop and mobile devices.
- Shared navigation and layout components.
- Interactive image carousels.
- Project screenshot previews with lightbox functionality.
- Reusable UI components and consistent styling.

### Application Structure

- Client-side routing with React Router.
- Component-based page architecture.
- Centralised static data for portfolio content.

## 🛠️ Tech Stack

### Core Technologies

| Technology       | Purpose                           |
| ---------------- | --------------------------------- |
| React            | Building the user interface       |
| TypeScript       | Static typing and type safety     |
| Vite             | Development server and build tool |
| Tailwind CSS v4  | Utility-first styling             |
| React Router DOM | Client-side routing               |

### UI & Visual Elements

| Technology       | Purpose                                  |
| ---------------- | ---------------------------------------- |
| Lucide React     | UI icons                                 |
| @dev.icons/react | Technology and development-related icons |
| Custom CSS       | Additional styling and visual effects    |

### Development Tools

| Tool     | Purpose                  |
| -------- | ------------------------ |
| pnpm     | Package management       |
| ESLint   | Code quality and linting |
| Prettier | Code formatting          |
| Git      | Version control          |

## 📂 Project Structure

The frontend follows a feature-oriented, component-based structure. Route-level pages are separated from shared layout components and reusable UI elements.

```text
frontend/
│
├── public/
│
├── src/
│   ├── @types/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── navbar/
│   │   │   ├── footer/
│   │   │   └── MainLayout/
│   │   │
│   │   └── ui/
│   │
│   ├── pages/
│   │   ├── HomePage/
│   │   │   └── sections/
│   │   ├── AboutPage/
│   │   ├── ContactPage/
│   │   ├── RecruiterPage/
│   │   ├── LeadPage/
│   │   ├── DevPage/
│   │   ├── ProjectsPage/
│   │   ├── ProjectPage/
│   │   ├── SkillsPage/
│   │   └── ErrorPage/
│   │
│   ├── config/
│   ├── data/
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── package.json
├── pnpm-lock.yaml
├── vite.config.ts
└── README.md
```

### Directory Responsibilities

- **`@types/`** — Shared TypeScript type definitions.
- **`assets/`** — Static assets such as images and illustrations.
- **`components/layout/`** — Shared structural components, including navigation, footers and the main layout.
- **`components/ui/`** — Reusable interface components.
- **`pages/`** — Route-level application pages.
- **`pages/HomePage/sections/`** — Components dedicated to individual sections of the homepage.
- **`config/`** — Shared application configuration.
- **`data/`** — Static portfolio content.
- **`App.tsx`** — Application routing configuration.
- **`main.tsx`** — Application entry point and React initialization.
- **`index.css`** — Global styles and Tailwind CSS configuration.

This structure keeps page-specific components close to the pages that use them while allowing genuinely reusable components to remain in the shared components directory.

## ⚙️ Installation & Setup

### Prerequisites

Make sure you have installed:

- Node.js
- pnpm

### Clone the repository

```bash
git clone <repository-url>

cd developer-portfolio/frontend
```

### Install dependencies

```bash
pnpm install
```

### Start the development server

```bash
pnpm dev
```

The application will be available at the local address provided by Vite, usually:

http://localhost:5173

### Production Build

To generate an optimised production build:

```bash
pnpm build
```

The generated files will be available in the `dist/` directory.

### Preview Production Build

To preview the production build locally:

```bash
pnpm preview
```

## 🏗️ Application Architecture

The frontend follows a component-based architecture built around React and React Router.

The application separates routing, shared layouts, page-level components, and reusable UI elements to keep responsibilities clear and make the codebase easier to maintain.

### Application Entry Point

The application starts in `main.tsx`, which initializes React and wraps the application in `BrowserRouter` to enable client-side routing.

`App.tsx` defines the application routes and associates each route with its corresponding page component.

### Routing

React Router DOM handles navigation between the different portfolio pages.

The application uses a shared `MainLayout` for public pages, providing consistent navigation and footer components across routes.

Individual pages are rendered through React Router's `Outlet` component.

### Layout Components

Shared layout components are located in `components/layout/`.

- **Navbar** — Provides the main site navigation.
- **Footer** — Provides consistent footer content across the application.
- **MainLayout** — Combines shared layout elements with the content of the current route.

### Page Components

Each route-level page is maintained independently within the `pages/` directory.

The homepage has its own `sections/` directory, containing components dedicated to its individual content sections.

This keeps homepage-specific presentation separate from components intended for reuse throughout the application.

### Reusable UI Components

Generic interface elements are maintained in `components/ui/`.

These components can be shared across different pages when their functionality or presentation is reusable.

### Static Data and Configuration

- **`data/`** — Stores static portfolio information used by the application.
- **`config/`** — Contains shared configuration values used across components.

Portfolio content is currently maintained on the frontend. API integration and database-driven content management are planned for a future development stage.

## 📜 Available Scripts

The following commands are available from the frontend directory:

| Command        | Description                                                |
| -------------- | ---------------------------------------------------------- |
| `pnpm dev`     | Starts the Vite development server.                        |
| `pnpm build`   | Runs TypeScript checks and generates the production build. |
| `pnpm lint`    | Runs ESLint across the frontend codebase.                  |
| `pnpm preview` | Previews the production build locally.                     |

### Usage

```bash
# Start development server
pnpm dev

# Run TypeScript checks and build for production
pnpm build

# Run ESLint
pnpm lint

# Preview production build
pnpm preview
```

The production build is generated in the `dist/` directory.

## 🧭 Development Guidelines

The frontend follows a set of conventions to keep the codebase consistent, readable, and maintainable.

### Component Organisation

- Keep components focused on a single responsibility.
- Place page-specific components within their corresponding page directory.
- Keep shared layout components in `components/layout/`.
- Place genuinely reusable interface elements in `components/ui/`.
- Avoid unnecessary component abstractions and duplication.

### TypeScript

- Use TypeScript for component props, application data, and shared types.
- Define reusable interfaces and types in appropriate locations.
- Prefer explicit and meaningful types over unnecessary use of `any`.

### Styling

- Use Tailwind CSS v4 for utility-based styling.
- Maintain consistent spacing, typography, and visual patterns.
- Keep responsive behaviour in mind when developing components.
- Use shared configuration values where appropriate.

### Code Quality

- Use meaningful component, variable, and function names.
- Keep responsibilities separated.
- Avoid unnecessary dependencies.
- Run ESLint and the production build before submitting changes.
