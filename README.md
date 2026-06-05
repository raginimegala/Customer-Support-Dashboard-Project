# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname
      }
      // other options...
    }
  }
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

````js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])


# Customer Support Dashboard

## Project Overview

Customer Support Dashboard is a scalable enterprise frontend application built using React, TypeScript, and Vite.

The project follows enterprise-grade frontend architecture principles including:

* Atomic Design Pattern
* Feature-based scalable structure
* Centralized routing architecture
* Reusable layouts
* ESLint + Prettier code quality setup
* Husky pre-commit hooks
* Path alias configuration

---

## Tech Stack

* React
* TypeScript
* Vite
* React Router DOM
* ESLint
* Prettier
* Husky
* lint-staged

---

## Setup Instructions

### Clone Repository

```bash
git clone <repository-url>
````

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

---

## Available Scripts

### Run Development Server

```bash
npm run dev
```

### Build Project

```bash
npm run build
```

### Run ESLint

```bash
npm run lint
```

### Format Code

```bash
npx prettier --write .
```

---

## Folder Structure

```txt
src/
 ├── api/
 │    ├── client/
 │    ├── endpoints/
 │    └── interceptors/
 │
 ├── components/
 │    ├── Atoms/
 │    ├── Molecules/
 │    ├── Organisms/
 │    └── Templates/
 │
 ├── constants/
 ├── features/
 ├── helpers/
 ├── hooks/
 ├── layouts/
 ├── pages/
 ├── routes/
 ├── services/
 ├── store/
 ├── tests/
 ├── types/
 └── utils/
```

---

## Routing Architecture

The application uses React Router DOM with:

- Nested routing
- Shared layouts
- Centralized route configuration
- Route constants
- 404 page handling
- Root path redirects

---

## Code Quality Setup

The project includes:

- ESLint for linting
- Prettier for code formatting
- Husky pre-commit hooks
- lint-staged for staged file validation

Commits are blocked automatically if lint errors exist.

---

## Path Aliases

The project uses path aliases for cleaner imports.

Example:

```ts
import Button from '@/components/Atoms/Button';
```

instead of:

```ts
import Button from '../../../components/Atoms/Button';
```

---

## Architecture Principles

- Separation of concerns
- Reusable UI components
- Scalable folder structure
- Centralized routing
- Maintainable code standards

---

## Planned Enhancements

- Authentication
- Protected Routes
- Axios API Layer
- React Query Integration
- Global State Management
- Unit Testing
- Role-Based Authorization

```

```
