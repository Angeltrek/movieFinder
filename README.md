# Movie Finder

A React-based movie finder application powered by Vite.

## Overview

This project is a movie finder application built using React and Vite. It allows users to search for movies based on a query and provides options for sorting the results.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js installation)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Angeltrek/movieFinder.git
   ```

2. Navigate to the project directory:

   ```bash
   cd movie-finder
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Available Scripts

In the project directory, you can run the following scripts:

- **Development Server:**

  ```bash
  npm run dev
  ```

  Runs the development server. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

- **Build:**

  ```bash
  npm run build
  ```

  Builds the app for production in the `dist` folder.

- **Lint:**

  ```bash
  npm run lint
  ```

  Lints the JavaScript and JSX files using ESLint.

- **Preview:**

  ```bash
  npm run preview
  ```

  Runs Vite in preview mode.

## Usage

- Run the development server:

  ```bash
  npm run dev
  ```

- Open your browser and go to [http://localhost:3000](http://localhost:3000).

- Use the search input to enter movie queries and explore the results. Sort the results using the checkbox.

API to use:

- [OMDb API](https://www.omdbapi.com/)
- API-KEY: 4287ad07

Requirements:

- It needs to display a search input and a submit button.
- List the found movies, displaying title, year, and poster.
- The movies should be presented in a responsive grid.

First iteration:

- Avoid the app searching for the same movie twice.
- The search should be performed automatically while typing.
- Implement a mechanism to prevent continual searching while typing.
