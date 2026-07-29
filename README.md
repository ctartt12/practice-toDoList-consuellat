# practice-toDoList-consuellat
Instructions
Build a basic, static To-Do List React application, creating and combining
components.
Tasks
Part 1: Build the Components
1. Create a components Folder:
Inside the src directory, create a folder named components.
2. Create ToDoList.jsx:
○ Create a functional component called ToDoList.
○ Inside this component:
■ Hard code a To-Do list to display a few tasks as a bulleted list
(e.g., "Learn React", "Build a project", "Read
documentation").
3. Create Header.jsx:
○ Create a functional component called Header.
○ Inside this component:
■ Render a simple heading that says "My To-Do List".
Part 2: Combine Components in App.jsx
1. Import Components:
Import the Header and ToDoList components into App.jsx.
2. Use Components:
○ Place the Header at the top of the app.
○ Add the ToDoList below the Header.
Part 3: Add Styling
1. Update App.css:
Add basic styles to make the app visually appealing:
1
○ Center the content.
○ Style the list items with custom bullet points or spacing.
○ Add padding and margins to create a clean layout.
2. Enhance the List:
Style the list elements for better readability, such as:
○ Adding hover effects on tasks.
○ Using a custom font for the text.
Deliverables
● A functional React app that displays:
○ A heading saying "My To-Do List".
○ A static list of tasks (e.g., "Learn React", "Build a project", "Read
documentation").
Example Output
When the app runs, you should see:
Heading:
"My To-Do List"
List:
 - Learn React
 - Build a project
 - Read documentation
Setup
1. Before starting this task, you will need to set up your React app:
● Create a New React App:
Use Vite to scaffold a new React project:
● npm create vite@latest
○ Name the project static-todo-react-app.
○ Choose the React framework and the JavaScript variant.
2
● Install Dependencies:
Navigate into the project directory:
● cd static-todo-react-app
○ Install necessary dependencies:
● npm install
● Start the Development Server:
Start your local server:
● npm run dev
○ Open your browser and navigate to http://localhost:5173.
