# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

# Task Management Board (Kanban Style)

A React-based task management board where users can add,update, and manage tasks using drag-and-drop functionality. It simulates a backend using JSON server for API calls.

---

## 🚀 Features

- Task Add, update tasks and view task
- status update Drag and drop tasks between columns
- React Toast notifications for better UX
- using JSON server mock API for local data

---

## nstallation & Run Locally

### 1. Clone the repository

git clone https://github.com/Sherbe007/TaskManagemant
cd TaskManagemant

## 2. Install dependencies
 npm install

##  json-server 

  npm install json-server --save

## local json dever data - 

  task.json (filename)

##   concurrently
  npm install concurrently --save-dev 

   "json-server": "json-server --watch task.json --port 5000",
    "dev": "concurrently \"npm run json-server\" \"vite\"",

  using for react and json run in same time
  
## start both
  npm run dev (run both)
  1.local : http://localhost:5173/
  2.local json : http://localhost:5000/tasks


#### Folder Structure:

src/
├── assets/
│   ├── img        # all needd img
│   ├── scss        # style files
├── components/Taskmanagement
│   ├── Taskstatus.tsx         # task detail dispaly in 3 cloumm status wise
│   ├── Tasklist.tsx             # task name  in  to 
│   └── Todo.tsx           # dispaly all task and add modal popup
├── components/layout/
│   └── header.tsx             # topheader
│   └── UserSideBar.tsx             # leftside bar
│   └── Userheaderlayout.tsx             # layout of all page 
├── components/
│   └── ApiUrl.tsx                   # define api
├── App.tsx                      # Main app wrapper
└── main.tsx                     # ReactDOM render
└── README.md            # task details
└── Self-Evaluation.md             # My self Evaluation
└── vite.config.ts                # vite config page


#### Approach:
 .The app uses React for the UI, with useState for managing task data.

React DnD is used for drag-and-drop functionality between columns (e.g., To Do, In Progress, Done).

Axios handles API calls to interact with the mock JSON Server (POST,GET  PUT).

The task ID is managed manually (increments on each task added).

The app utilizes React Toastify to display notifications (e.g., task added or deleted).