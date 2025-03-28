# 🔐 Req-Auth: React Redux User Management App

A fully responsive React app integrated with Redux Toolkit that performs user authentication, listing, search, edit, delete, and pagination — powered by the [Reqres API](https://reqres.in/). Built as a full-stack intern assignment with a strong focus on UI/UX and state management.

## 🚀 Features

- 🔐 **Login Authentication** (Mock via Reqres)
- 👤 **User Listing** with avatars and details
- 🔍 **Search** users by name or email
- ✏️ **Edit** user details via a popup modal
- 🗑️ **Delete** users instantly
- 📄 **Pagination** to browse across pages
- 🌐 **Responsive Design** for all screen sizes
- ⚙️ **Redux Toolkit** for state management
- ✅ **Protected Routes** using token
- 💥 Toast notifications for feedback


## 🧪 Tech Stack

- **Frontend**: React, Tailwind CSS, Redux Toolkit, Axios
- **State Management**: Redux Toolkit
- **API**: [Reqres](https://reqres.in/)
- **Routing**: React Router DOM
- **Notifications**: React Toastify
- **Animations**: Framer Motion

- ---


## 📦 Key Dependencies



- **`react`** — Frontend library for building user interfaces.
- **`react-router-dom`** — Navigation and protected routes.
- **`@reduxjs/toolkit`** — Simplified Redux state management.
- **`react-redux`** — Connects Redux with React.
- **`redux-persist`** — Persists Redux state across sessions.
- **`axios`** — For API requests.
- **`react-toastify`** — Clean toast notifications.
- **`framer-motion`** — Animation support.
- **`tailwindcss`** — Utility-first CSS framework.




---

## 🛠️ Getting Started

### 📁 Installation & Run

```bash
# 1. Clone the repository
git clone https://github.com/SanjuSanjaytech/req-Auth.git

# 2. Navigate to the project folder
cd req-Auth

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev

```


src/
├── components/        # Reusable UI components (UserCard, SearchBar, etc.)
├── pages/             # Main pages like Login and Users
├── redux/             # Redux slice and store configuration
├── App.jsx            # Main app routes
├── main.jsx           # App entry point




⚙️ API Used
Reqres.in — a free hosted REST API for testing and prototyping.


## 💭 Assumptions & Considerations

- This project uses the [Reqres API](https://reqres.in/) which is a mock API. Therefore, all user data and authentication are simulated.
- No actual backend was built for this assignment.
- Only valid credentials provided by Reqres will work (e.g., `eve.holt@reqres.in` with password `cityslicka`).
- Edits and deletions are local (Redux state only), as the API does not persist changes.


