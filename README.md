# Developer Portfolio

A personal web application designed to showcase my professional background, technical skills, and software development projects.

The portfolio provides a dedicated space for recruiters, technical leads, and fellow developers to explore my experience, discover my projects, and learn more about my approach to software development.

The initial version focuses on a responsive public-facing website built with React and TypeScript. The project is designed to evolve progressively into a full-stack application, with a Spring Boot backend, PostgreSQL database, and an administration interface planned for a future version.

## 🚀 Features

### Public Portfolio — MVP

- **Home page** — Introduction and overview of the portfolio.
- **About** — Professional background, personal presentation, and motivations.
- **Audience-specific navigation** — Dedicated content for recruiters, technical leads, and fellow developers.
- **Skills** — Presentation of technical and complementary skills.
- **Projects overview** — Browse selected software development projects.
- **Project details** — Explore individual projects, including their objectives, features, technologies, and technical implementation.
- **Responsive design** — Adapted layouts for desktop and mobile devices.
- **Contact** — Professional contact information and links.

### Planned Features — V1 and Beyond

- **Administration interface** — Manage portfolio content through a dedicated interface.
- **Administrator authentication** — Secure access to administrative functionality.
- **Dynamic project management** — Create, view, update, and delete project information.
- **Technology management** — Maintain technology information and project associations.
- **Extended content management** — Manage professional experience, skills, and additional portfolio information.
- **Media management** — Upload and manage project screenshots and other media.

## 🛠️ Tech Stack

### MVP — Frontend

| Technology   | Purpose                           |
| ------------ | --------------------------------- |
| React        | User interface                    |
| TypeScript   | Static typing                     |
| Vite         | Development server and build tool |
| Tailwind CSS | Styling                           |
| Git          | Version control                   |
| GitHub       | Source code hosting               |

### V1 — Backend (Planned)

| Technology      | Purpose                          |
| --------------- | -------------------------------- |
| Java 21         | Backend programming language     |
| Spring Boot     | Backend framework                |
| Spring Web      | REST API development             |
| Spring Data JPA | Data persistence                 |
| Hibernate       | ORM                              |
| PostgreSQL      | Relational database              |
| Maven           | Build and dependency management  |
| Spring Security | Authentication and authorization |
| JUnit 5         | Backend testing                  |

### Development Environment

- **IDE:** Visual Studio Code
- **Version control:** Git / GitHub
- **Package manager:** pnpm (MVP frontend)

## 🏗️ Project Architecture

The Developer Portfolio is designed as a full-stack application composed of two main parts: a React frontend and a Spring Boot backend.

The architecture evolves progressively across project versions.

### MVP — Frontend Only

The initial version consists of a React application responsible for:

- Rendering public portfolio pages.
- Handling navigation and routing.
- Displaying project and professional information.
- Managing static portfolio content.

All portfolio content is initially maintained within the frontend. No backend or database is required for the MVP.

### V1 — Full-Stack Application

The next stage introduces a Spring Boot REST API and PostgreSQL database.

The application follows a layered backend architecture:

- **Controllers** handle HTTP requests and responses.
- **Services** coordinate application operations and business logic.
- **Repositories** handle data persistence and retrieval.
- **Domain** represents the application's core entities.
- **Security** manages administrator authentication and access restrictions.

The React frontend communicates with the backend through HTTP requests to retrieve and manage portfolio content.

The public portfolio and administration interface will remain within the same React application, using separate routes and access restrictions.

### Repository Structure

The repository is organised into two main applications:

```text
developer-portfolio/
│
├── frontend/
│   └── React application
│
├── backend/
│   └── Spring Boot application (planned)
│
└── README.md
```

More detailed documentation will be maintained separately for each application:

- Frontend documentation: `frontend/README.md`
- Backend documentation: `backend/README.md` (planned)

This separation keeps the responsibilities of each application clear while maintaining a single project repository.

## ⚙️ Installation & Setup

### Prerequisites

Make sure you have installed:

- Node.js
- pnpm
- Git

### Clone the repository

```bash
git clone <repository-url>

cd developer-portfolio
```

### Frontend setup

Navigate to the frontend directory:

```bash
cd frontend
```

Install the project dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

The application will be available at the local address provided by Vite, usually:

http://localhost:5173

### Backend

The backend is not part of the current MVP. Setup instructions will be added when the Spring Boot application is introduced in V1.

## 🔮 Development Roadmap

The project is developed incrementally, with each version introducing new capabilities while building upon the previous implementation.

### MVP — Public Portfolio

**Status: In development**

- Build the public portfolio using React and TypeScript.
- Implement responsive layouts and navigation.
- Present professional information and technical skills.
- Create project overview and individual project pages.
- Showcase KineSoin as the primary project demonstration.
- Deploy the public portfolio.

### V1 — Full-Stack Integration

**Status: Planned**

- Introduce a Spring Boot REST API.
- Integrate PostgreSQL for persistent data storage.
- Replace static project content with database-driven information.
- Implement an administration interface.
- Add administrator authentication and protected routes.
- Implement project management (CRUD operations).

### V2 — Extended Content Management

**Status: Planned**

- Manage professional information and experience.
- Manage skills and technologies.
- Introduce project media management.
- Improve administration and content management workflows.
- Refine the public portfolio experience.

### V3+ — Future Improvements

Further development will be guided by actual requirements and project needs.

Potential improvements include:

- SEO and accessibility enhancements.
- Performance optimisation.
- Automated testing and deployment improvements.
- Additional portfolio content and presentation capabilities.

Each stage will be planned independently to avoid introducing unnecessary complexity prematurely.

## 🌱 Development Principles

The project follows a set of guiding principles intended to keep development structured, maintainable, and focused on delivering useful functionality.

- **Start simple** — Introduce complexity only when there is a concrete reason to need it.
- **Learn before abstracting** — Understand the underlying technologies before relying on frameworks and abstractions.
- **Separation of concerns** — Keep responsibilities clearly separated between application layers and components.
- **Single source of truth** — Manage portfolio content centrally and avoid unnecessary duplication.
- **Build incrementally** — Deliver working functionality at each stage before moving on to the next.
- **Understand the architecture** — Every layer, dependency, and abstraction should have a clear purpose.
- **Scope management** — Prioritise current requirements and deliberately postpone features that are not yet needed.
- **Code quality** — Favour readable, maintainable code and consistent development practices.

The objective is not to build the most complex solution, but to build a reliable application that can evolve progressively.

## 🔀 Git Workflow

The project uses a feature-branch workflow with Pull Requests to organise development, integrate changes, and maintain a stable main branch.

### Branch Strategy

```text
main
 └── develop
      ├── emilian/feature-name
      ├── emilian/project-pages
      └── emilian/backend-integration
```

- **main** — Stable branch containing release-ready versions.
- **develop** — Integration branch for completed features.
- **Feature branches** — Dedicated branches for individual features, fixes, or improvements.

Direct commits to `main` and `develop` are avoided. New work starts from the latest `develop` branch.

### Commit Convention

Commits follow a consistent naming convention using descriptive prefixes:

| Prefix      | Purpose                                           |
| ----------- | ------------------------------------------------- |
| `feat:`     | Introduce new functionality                       |
| `fix:`      | Fix a bug                                         |
| `refactor:` | Improve code structure without changing behaviour |
| `test:`     | Add or update tests                               |
| `docs:`     | Add or update documentation                       |

Examples:

```bash
git commit -m "feat: add project detail page"
git commit -m "fix: correct mobile navigation layout"
git commit -m "refactor: extract reusable components"
git commit -m "docs: update project README"
```

### Development Workflow

1. Update the local `develop` branch.
2. Create a feature branch from `develop`.
3. Implement changes and commit regularly.
4. Push the feature branch to GitHub.
5. Open a Pull Request targeting `develop`.
6. Review changes and address any issues.
7. Merge the Pull Request into `develop`.
8. Delete the feature branch when it is no longer needed.

### Release Workflow

The `main` branch is reserved for stable releases.

When a version is ready for release, tested changes are merged from `develop` into `main` and tagged with a version number (for example, `v0.1.0`).

## 👨‍💻 Author

Developed by **Emilian**.

- GitHub: [Coada-Emilian](https://github.com/Coada-Emilian)
