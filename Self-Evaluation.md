# Summary
This project is a Task Management Board made using React with TypeScript. I used Vite for fast project setup. Users can add, update, and drag tasks between three columns: To Do, In Progress, and Done. I didn’t use a real backend — instead, I used JSON Server to act like a fake backend. For user messages (like success or error), I used React Toastify.





##good thing:
    I split the code into separate components, so it’s neat and easy to understand.

    concurrently: This is used to run React and JSON server at the same time, making development easier and faster.

    json-server: A mock API server that acts like a real backend, so you don’t need a real database for testing.

    react-dnd: A library for drag-and-drop features, which lets you easily move tasks between columns.

    react-icons: Provides easy-to-use icons to improve the look of your app.

    scss: A style language that helps you write CSS in a better and more organized way.

    axios: A simple tool for making API requests to fetch or send data.

    toastify: A tool to show small pop-up messages for success or error alerts, improving user interaction.

    The drag-and-drop feature using react-dnd works seamlessly.

    Toast notifications improve user interaction and clarity of actions performed.

##The Bad and Areas for Improvement:

    Responsive Design: The app doesn’t work well on all screen sizes, especially on mobile. It needs improvements for better mobile support.

    Mobile Layout Issues: Some parts don’t display properly on smaller screens, making it hard to use on phones or tablets.

###Self-Criticism:
The task management system is working fine but there are a few things to improve:

    State Management: The state is managed locally, but using a global state (like Redux) would make it easier to handle bigger tasks in the future.

    Responsiveness: The app looks good on desktops, but it could be better on mobile screens. More media queries are needed to improve the layout for smaller screens.

    Task ID Management: Task IDs are handled manually, which is fine for now but could cause issues later. Using a better way to generate IDs would help.

    Error Handling: Error handling is basic. More checks for API errors and user inputs would make the app more stable.

###Improvements:
If I had more time, I would focus on:

    Design : Improve the UI design for better user experience, especially on mobile. Adding animations and modern styles would make the app more engaging.

    Process Loading: Optimize the loading process for smoother transitions and faster task updates, especially when dragging tasks or updating statuses.

##Technology Rating:
        React: 8/10 — Comfortable, still learning advanced features.

        TypeScript: 7/10 — Good, but still improving.

        Vite: 8/10 — Fast build times, getting better.

        JSON Server: 7/10 — Good for mock API, prefer real backend.

        React DnD: 6/10 — Works, but needs practice.

        Axios: 9/10 — Very comfortable.

        SCSS: 7/10 — Solid, but could learn more.

        React Icons: 8/10 — Easy and effective.

