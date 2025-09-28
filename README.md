# Dev Command Center

A fast, interactive, and persistent cheatsheet application built with modern React. This tool allows developers to quickly search and filter through common commands for tools like Git, Docker, NPM, and VS Code.

**[➡️ View the Live Demo](https://dev-command-center.vercel.app/)**

## About This Project

The Dev Command Center was built as a practical tool to solve a common problem for developers: remembering the specific syntax for hundreds of essential commands. More importantly, it was a project to deeply solidify core and advanced React concepts, moving from theory to a tangible, feature-rich application.

The entire development process was done iteratively, focusing on building a clean architecture, managing complex state interactions, and ensuring a smooth user experience.

## Features

- **Dual-Filtering System:** Commands can be filtered by both a pre-defined category and a real-time, case-insensitive search query that checks both the command's name and description.
- **Persistent User Favourites:** Users can mark their most-used commands as 'favourites'. This list is saved to the browser's Local Storage, persisting the user's choices between sessions.
- **Dynamic & Data-Driven UI:** The category sidebar is generated dynamically from the data source. Adding a new category of commands to the data file automatically adds a new filter button to the UI with no extra code required.
- **Modern, Responsive UI:** A clean, dark-mode interface built with modern CSS (Flexbox) for a professional and intuitive user experience.

## Core Technologies & Concepts Demonstrated

This project is a showcase of modern frontend development practices.

#### **React**

- **Component-Based Architecture:** The application is broken down into clean, reusable components (`SearchBar`, `CategorySidebar`, `CommandCard`).
- **State Management (`useState`):** Manages all interactive state, including the search query, active category, and the list of favourites.
- **Side Effects & Persistence (`useEffect`):** Used to create the "Saver" and "Loader" logic that syncs the `favourites` state with the browser's `localStorage`.
- **Props & Bi-directional Data Flow:** Mastered the "Lifting State Up" pattern to manage state in a central location (`App.jsx`) and pass data and callback functions down to child components.
- **Conditional Rendering:** Used to apply styles to the active category button and to change the appearance of the 'favourite' star icon.

#### **Modern JavaScript (ES6+)**

- **Advanced Array Methods:** Extensive use of `.map()` for rendering lists and `.filter()` for the core search logic.
- **Method Chaining:** The dual-filter system was implemented by elegantly chaining multiple `.filter()` methods.
- **Modules:** `import`/`export` syntax is used to keep the codebase organized.
- **JSON Handling:** `JSON.stringify()` and `JSON.parse()` are used to correctly handle data for `localStorage`.

#### **Development Practices**

- **Refactoring:** The `CategorySidebar` was refactorefrom a static component to a dynamic, data-driven one to improve maintainability.
- **Systematic Debugging:** Traced and fixed bugs by analyzing console output, verifying data flow with logs, and isolating issues systematically.
- **Version Control:** The project is managed with Git and hosted on GitHub.

## How to Run Locally

To get a local copy up and running, follow these simple steps.

1.  Clone the repository:
    ```sh
    git clone [https://github.com/your-username/dev-command-center.git](https://github.com/your-username/dev-command-center.git)
    ```
2.  Navigate to the project directory:
    ```sh
    cd dev-command-center
    ```
3.  Install NPM packages:
    ```sh
    npm install
    ```
4.  Start the development server:
    ```sh
    npm run dev
    ```
