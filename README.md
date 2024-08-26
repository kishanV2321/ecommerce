# Ecommerce

Ecommerce is a React-based e-commerce application built with TypeScript and Vite. This project integrates various modern tools and libraries to provide a performant and scalable user experience.

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Development](#development)
4. [Build and Preview](#build-and-preview)
5. [Linting](#linting)
6. [Folder Structure](#folder-structure)
7. [Known Issues](#known-issues)
8. [Contributing](#contributing)
9. [License](#license)

## Features

- **React**: Main framework for building user interfaces.
- **TypeScript**: Provides static type checking for improved code quality.
- **Vite**: Fast build tool and development server.
- **Redux Toolkit**: State management solution.
- **React Router**: Routing for navigation.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Toastify**: For displaying notifications.
- **Google Generative AI**: Integration for generative AI capabilities.

## Installation

To get started with the project, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/ecommerce.git
   cd ecommerce
   ```

2. **Install Dependencies:**

  ```bash
  npm install
  ```

3. **Set Up Environment Variables:**

Create a .env file in the root of the project and add your environment variables, such as:

  ```bash
  REACT_APP_GEMINI_API_KEY=your-api-key-here
  ```


## Development

To start the development server:
 
  ```bash
  npm run dev
  ```

This will launch the application in development mode, and you can view it in your browser at http://localhost:3000.

## Build and Preview

To build the project for production:

  ```bash
  npm run build
  ```

To preview the production build:

  ```bash
  npm run preview
  ```

## Linting

To lint the project using ESLint:

  ```bash
  npm run lint
  ```

### Folder Structure

The project has the following folder structure:

- `src/`: Contains all the source code.
  - `components/`: Reusable UI components.
  - `hooks/`: Custom React hooks.
  - `pages/`: React components representing different pages.
  - `store/`: Redux state management.
  - `utils/`: Utility functions and constants.
- `public/`: Static assets and HTML template.
- `styles/`: Global styles and Tailwind CSS configuration.

## Known Issues

### Category Products Not Displaying
If clicking a category only shows cosmetic icons and not the products, ensure:

- The `useGetProductsByCategory` hook is fetching data correctly.
- The `categoryProducts` state in Redux is properly updated and accessed.

### Filters Not Working
Verify the filter logic in `ProductListPage` and ensure that the filters are applied correctly.

### TypeScript Errors
- Ensure that all TypeScript interfaces and types are correctly defined and used.
- Fix any type mismatches or undefined errors in your components and hooks.


## License

This project is licensed under [Kishan Verma]().




