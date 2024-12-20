# The "Contact Dashboard" frontend project
This project is built with React.js 18+, Tailwind CSS 3.4, and TypeScript, with state and data management handled by TanStack ReactQuery.

### Key Features

- **React.js**: The primary library for building user interfaces
- **TypeScript**: Ensures type safety and enhances the developer experience
- **Tailwind CSS**: A utility-first CSS framework for fast styling
- **Multilingual Support**: Implemented via i18n for internationalization
- **TanStack ReactForm**: Handles forms with ease and flexibility
- **TanStack ReactRouter**: Routing solution for single-page applications
- **TanStack ReactQuery**: Efficient data fetching and state management
- **Zod**: For schema-based data validation
- **ESLint**: Enforces consistent code style and catches errors
- **Prettier**: Formats code to maintain a uniform code style
- **Alias Imports**: Clean and maintainable imports using the @ prefix
- **Vite**: A fast and efficient build tool for modern web development


## Getting Started

Before running the project, create a `.env` file in the root directory with the necessary environment variables. For local development, you might have something like this:

VITE_API_URL=http://localhost:5000


> **Note**: You also need to run `json-server` to mock the API. Follow the instructions in the README to set it up.

### Project Structure

The project follows a modular folder structure to ensure code is clean and manageable. Here's an example:
```
src
├── assets
│    ├── icons
│    └── ...
├── components
│   ├── {component}
│   │   │   ├── index.tsx
│   │   │   └── ...
│   │   └── ...
├── config/
├── constants/
├── features
│     ├── {feature}
│     │   ├── components
│     │   │   ├── {component}
│     │   │   │   ├── index.ts
│     │   │   │   └── ...
│     │   │   └── ...
│     │   ├── hooks
│     │   │   ├── use-{hook}.ts
│     │   │   └── ...  
│     │   ├── utils
│     │   │   ├── index.ts
│     │   │   └── ...  
│     │   ├── types.ts
│     │   ├── api.ts
│     │   ├── endpoints.ts
│     │   └── ...  
│     └── ...  
├── hooks/
├── i18n/
├── layout/
├── routes/
├── styles/
├── types/
└── utils/
```

#### Shared elements are stored in the global `src` folder, which includes:
- `components`: Reusable UI components
- `i18n`: Internationalization configurations and translations
- `hooks`: Custom React hooks for shared logic
- `styles`: Global CSS styles and Tailwind CSS configurations
- `types`: Global TypeScript types and interfaces
- `utils`: Helper methods and utility functions

This structure promotes modularity and ensures that shared resources are well-organized while each page or feature is easy to manage.

### Useful commands

#### Development
```shell
pnpm dev
```
Starts the development server with React.js.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The page auto-updates as you modify `App.tsx`.

#### Running Mock API (json-server)
 ```shell
pnpm run start:json-server
```

The mock API will be available at [http://localhost:5000](http://localhost:5000), and you can interact with the `users` endpoint.

#### Linting
```shell
pnpm run lint
```
Checks for stylistic issues and potential errors using ESLint.

#### Format Code
```shell
pnpm run format
```
Fixes linting issues and formats your code with Prettier.

#### Bundle Analyzer
```shell
pnpm run build
```
Builds the project with bundle analysis enabled to visualize JavaScript bundle sizes.


## Learn More

To learn more about this project, check out the following resources:

- [React.js Documentation](https://react.dev/learn) - Learn about React.js features and API.
- [React-i18next](https://react.i18next.com/getting-started) - a complete i18n solution for React.js.
- [TanStack Query](https://tanstack.com/query/latest/docs/react/overview) - Data fetching and state management library.
- [TanStack Form](https://tanstack.com/form/latest/docs/overview) - Powerful form handling
- [TanStack Router](https://tanstack.com/router/latest/docs/framework/react/overview) - Routing solution for React
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework.
- [Vite](https://vite.dev/guide/) - Optimized build tool for modern web projects.

## Requirements

- Node.js 20+
- pnpm 7+ (install via `npm install -g pnpm`)

