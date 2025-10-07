# Ad Campaign Dashboard

A simple, responsive dashboard that fetches and displays campaign data from a public API. Includes search and filter functionality by title or ID, and shows loading and no-results states.


PROJECT SCREENSHOTS

![Screenshot 3](https://github.com/user-attachments/assets/d31cf942-084e-4d55-9c1f-0d711695df0c)
![SCreenshot 2](https://github.com/user-attachments/assets/5cc29ae1-dfcf-48e2-9086-b294668f2418)
![screenshot 1](https://github.com/user-attachments/assets/762baa68-7f4a-4049-af25-333cef37a087)


## Features

- Fetches data from a public API using Axios
- Displays campaign Title, Body, and User ID in cards
- Real-time search and filtering by title or ID
- Loading and “no results” states
- Clean, responsive design built with React and Tailwind CSS

- ## Tech Stack

- **Frontend:** React, Tailwind CSS
- **Data Fetching:** Axios
- **Build Tool:** Vite
- **Language:** JavaScript (ES6+)

## Installation

1. Clone the repository  
   ```bash
   git clone https://github.com/gippo05/ad-campaign-dashboard.git
Navigate to the project folder

bash
Copy code
cd ad-campaign-dashboard
Install dependencies

bash
Copy code
npm install
Run the development server

bash
Copy code
npm run dev
Open your browser and go to

arduino
Copy code
http://localhost:5173/


## How It Works

- The app fetches campaign data from [JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts) using Axios inside a `useEffect` hook.
- The response data is stored in a `posts` state variable.
- The user can search by title or ID using an input field that updates state in real time.
- The displayed cards are filtered using JavaScript’s `filter()` method before rendering.
- React automatically re-renders the UI based on the filtered list.

- ## Design and Technical Decisions

- **Axios** – Chosen for its cleaner syntax and built-in JSON parsing.
- **React Hooks** – Used `useState` and `useEffect` for state and side-effect management.
- **Tailwind CSS** – Enables rapid styling with a clean, modern layout.
- **Cards Layout** – More readable and visually appealing than a table.

- ## Confirmation

ALL WORK IN THIS PROJECT IS MY OWN. (Gian Sarinas)
