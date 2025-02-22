# React Todo App

A simple Todo application built with React that demonstrates the use of React Context API, along with the useState, useRef, and useEffect hooks. This app allows users to add tasks to a list, prevents duplicate entries by showing a popup for 3 seconds if a task already exists, and enables users to remove individual tasks. It also implements localStorage to persist tasks between page reloads.

## Features

- **Add Task:** Enter a new task using the input field.
- **Duplicate Check:** If the task already exists in the list, a popup message appears for 3 seconds to notify the user.
- **Remove Task:** Remove any task from the list with a simple click.
- **Persistent Storage:** Tasks are saved in localStorage, so your list persists even after a page reload.
- **React Context API:** Manage state across the app using the Context API.
- **Hooks:**
  - `useState` for state management.
  - `useRef` for referencing DOM elements.
  - `useEffect` for synchronizing state with localStorage.

## Technologies Used

- **React:** Front-end library for building the user interface.
- **React Context API:** For managing and sharing state throughout the app.
- **Hooks:**
  - `useState` for state management.
  - `useRef` for accessing and manipulating DOM elements.
  - `useEffect` for side effects, including localStorage integration.
- **CSS:** For basic styling (you can enhance it with your preferred styling library).

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/react-todo-app.git
   cd react-todo-app
   ```
