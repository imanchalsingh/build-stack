import {
  Box,
  Button,
  Card,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import { LanguageJSData } from "../languagesData";
import React, { useState } from "react";
import GrassIcon from "@mui/icons-material/Grass";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import CloseIcon from "@mui/icons-material/Close";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const colors = [
  "#87CEFA", // Light Sky Blue
  "#F08080", // Light Coral
  "#FAFAD2", // Light Goldenrod Yellow
  "#90EE90", // Light Green
];

const ITEM_HEIGHT = 48;
export default function Installationfile() {
  const [searchTerm, setSearchTerm] = useState(""); // state for search input

  // Function to filter language data based on the search term
  const filteredData = LanguageJSData
    .map((data) => ({
      ...data,
      subcategories: data.subcategories.map((subcategoryData) => ({
        ...subcategoryData,
        items: subcategoryData.items.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      })),
    }))
    .filter((data) =>
      data.subcategories.some(
        (subcategoryData) => subcategoryData.items.length > 0
      )
    );

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [messageDialog, setMessageDialog] = useState(false);
  const openMessageDialog = () => {
    setMessageDialog(true);
  };
  const closeMessageDialog = () => {
    setMessageDialog(false);
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [installationSection, setInstallationSection] = useState<
    | "Get Started"
    | "Node JS"
    | "Axios"
    | "React JS"
    | "React Query"
    | "React TS"
    | "Redux"
    | "Router"
    | "Toastify"
    | "Tailwind CSS"
    | "Chart JS"
    | "Bootstrap"
    | "Material Ui"
    | "React Icon"
  >("Get Started");
  const [currentSection, setCurrentSection] = useState<
    "Home" | "About" | "Contact Me" | "Installation"
  >("Home");
  const installationRenderSection = () => {
    switch (installationSection) {
      case "Get Started":
        return (
          <div
            className="installation-page"
            style={{ width: "60vw", padding: "20px" }}
          >
            <h1>Get Started with BuildStack</h1>
            <p>
              Welcome to BuildStack, your one-stop guide to setting up and
              integrating essential web development tools and libraries. Follow
              these simple steps to kickstart your project using the latest
              technologies:
            </p>
            <div
              style={{ marginTop: "20px", lineHeight: "1.5", padding: "20px" }}
            >
              <h2>1. Set Up Your Development Environment</h2>
              <p>
                Before diving in, make sure you have the following tools
                installed:
              </p>
              <p>
                <b>Node.js:</b> Download and install the latest version from{" "}
                <a href="https://nodejs.org/en"> nodejs.org.</a>
              </p>
              <p>
                {" "}
                <b>npm or yarn:</b> Comes with Node.js for managing packages
              </p>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              <h1>2. Create Your React TypeScript Project</h1>
              <p>Start by creating a new React project with TypeScript:</p>
              <div>
                <pre>
                  <code>
                    npx create-react-app my-project --template typescript
                  </code>
                </pre>
              </div>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              <h1>3. Install Essential Tools and Libraries</h1>
              <p>
                Here's a list of libraries you can integrate into your project:
              </p>
              <li>Tailwind CSS: For utility-first styling.</li>
              <li>Material-UI: For sleek, modern UI components.</li>
              <li>React Router: For navigation and routing.</li>
              <li>Redux Toolkit: For state management.</li>
              <li>React Toastify: For elegant notifications.</li>
              <li>Bootstrap: For a responsive and flexible layout.</li>
              <li>Chart.js: For data visualization.</li>
              <p>
                Use our installation guide below to quickly set up each tool!
              </p>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              <h1>4. Start Building!</h1>
              <p>
                With all the tools set up, you're ready to start building your
                web application. Use BuildStack as your reference guide whenever
                you need help with integrating or configuring a tool.
              </p>
            </div>
          </div>
        );
      case "Node JS":
        return (
          <div
            className="installation-page"
            style={{ width: "60vw", padding: "20px" }}
          >
            <h1>Node.js Installation Guide</h1>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              <h2>1. Download Node.js</h2>
              <p>
                Visit the official Node.js website:
                <a href="https://nodejs.org/">nodejs.org</a>
                <br />
                You will see two download options:
              </p>
              <ul>
                <li>
                  <strong>LTS (Long Term Support)</strong>: Recommended for most
                  users, especially if you're looking for stability.
                </li>
                <li>
                  <strong>Current</strong>: Includes the latest features but may
                  be less stable.
                </li>
              </ul>
              <p>
                Click on the <strong>LTS</strong> version to download the
                installer for your operating system (Windows, macOS, or Linux).
              </p>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              <h2>2. Install Node.js</h2>
              <h3>Windows & macOS:</h3>
              <ol>
                <li>Run the installer you just downloaded.</li>
                <li>
                  Follow the installation wizard. Make sure to select the option
                  to install npm (Node Package Manager) along with Node.js.
                </li>
                <li>Complete the installation process.</li>
              </ol>

              <h3>Linux:</h3>
              <p>
                Open a terminal and run the following commands based on your
                Linux distribution:
              </p>

              <h4>Ubuntu / Debian:</h4>
              <pre>
                <code>sudo apt update sudo apt install nodejs npm</code>
              </pre>

              <h4>CentOS / RHEL:</h4>
              <pre>
                <code>sudo yum install nodejs npm</code>
              </pre>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              <h2>3. Verify the Installation</h2>
              <p>
                After installation, verify that Node.js and npm are installed
                correctly by running the following commands in your terminal or
                command prompt:
              </p>
              <pre>
                <code>node -v</code>
              </pre>
              <pre>
                <code>npm -v</code>
              </pre>
              <p>
                You should see version numbers for both Node.js and npm,
                indicating a successful installation.
              </p>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              <h2>4. Optional: Use Node Version Manager (nvm)</h2>
              <p>
                If you need to manage multiple versions of Node.js, consider
                installing Node Version Manager (
                <a href="https://github.com/nvm-sh/nvm">nvm</a>
                ). This allows you to switch between different versions of
                Node.js easily.
              </p>
              <p>
                To install <code>nvm</code> on Unix-like systems (Linux, macOS):
              </p>
              <pre>
                <code>
                  curl -o-
                  https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh
                  | bash
                </code>
              </pre>
              <p>
                After installing <code>nvm</code>, you can install Node.js with:
              </p>
              <pre>
                <code>nvm install node</code>
              </pre>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              <h2>5. Getting Started with Node.js</h2>
              <p>
                Now that Node.js is installed, you can start building
                server-side applications, command-line tools, and more. Use npm
                to install packages and libraries that you need for your
                projects.
              </p>

              <h2>Next Steps</h2>
              <ul>
                <li>
                  Explore the Node.js{" "}
                  <a href="https://nodejs.org/en/docs/">documentation</a> to
                  learn more about its features.
                </li>
                <li>
                  Use npm to install other tools and libraries for your project,
                  as outlined in the rest of the <strong>BuildStack</strong>{" "}
                  installation guide.
                </li>
              </ul>
            </div>
          </div>
        );
      case "React JS":
        return (
          <div
            className="installation-page"
            style={{ width: "60vw", padding: "20px" }}
          >
            <h1>React.js Installation Guide</h1>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              <h2>1. Prerequisites</h2>
              <p>
                Before installing React.js, make sure you have the following
                installed:
              </p>
              <ul>
                <li>
                  <strong>Node.js</strong>: Download and install the latest
                  version from <a href="https://nodejs.org/">nodejs.org</a>.
                </li>
                <li>
                  <strong>npm</strong> or <strong>yarn</strong>: Comes with
                  Node.js for managing packages.
                </li>
              </ul>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              <h2>2. Create a New React Project</h2>
              <p>
                To create a new React.js project, you can use <code>npx</code>{" "}
                (which comes with npm 5.2+). Run the following command in your
                terminal:
              </p>
              <pre>
                <code>npx create-react-app my-react-app</code>
              </pre>
              <p>
                This command will create a new directory called{" "}
                <code>my-react-app</code> and set up a new React project with
                all the necessary files and configurations.
              </p>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              <h2>3. Navigate into Your Project</h2>
              <p>
                Once the installation is complete, navigate into your project
                directory:
              </p>
              <pre>
                <code>cd my-react-app</code>
              </pre>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              <h2>4. Start the Development Server</h2>
              <p>
                Now, you can start the development server to see your React
                application in action:
              </p>
              <pre>
                <code>npm start</code>
              </pre>
              <p>
                This will start the development server and open the application
                in your default web browser. You can view your app at{" "}
                <a href="http://localhost:3000">http://localhost:3000</a>.
              </p>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              <h2>5. Optional: Use TypeScript with React</h2>
              <p>
                If you prefer to use TypeScript with React, you can create a new
                project with the TypeScript template:
              </p>
              <pre>
                <code>
                  npx create-react-app my-react-app --template typescript
                </code>
              </pre>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              <h2>6. Explore the Project Structure</h2>
              <p>
                After creating the project, the default folder structure will
                look like this:
              </p>
              <pre>
                <code>
                  my-react-app ├── node_modules ├── public ├── src │ ├── App.css
                  │ ├── App.js │ ├── App.test.js │ ├── index.css │ ├── index.js
                  │ └── ... ├── .gitignore ├── package.json └── README.md
                </code>
              </pre>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              <h2>7. Installing Additional Packages</h2>
              <p>
                You can install additional packages as needed using npm or yarn.
                For example, to install React Router:
              </p>
              <pre>
                <code>npm install react-router-dom</code>
              </pre>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              <h2>Next Steps</h2>
              <ul>
                <li>
                  Start building your React components in the <code>src</code>{" "}
                  folder.
                </li>
                <li>
                  Refer to the{" "}
                  <a href="https://reactjs.org/docs/getting-started.html">
                    official React documentation
                  </a>{" "}
                  for further learning and best practices.
                </li>
              </ul>
            </div>
          </div>
        );
      case "React TS":
        return (
          <div
            className="installation-page"
            style={{ width: "60vw", padding: "20px" }}
          >
            <h1>React TypeScript Installation Guide</h1>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              {" "}
              <h2>1. Prerequisites</h2>
              <p>
                Make sure you have <strong>Node.js</strong> and{" "}
                <strong>npm</strong> (Node Package Manager) installed on your
                system. If not, follow the
                <a href="https://nodejs.org/">Node.js Installation Guide</a>.
              </p>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              {" "}
              <h2>2. Create a React TypeScript Project</h2>
              <p>
                Use the following command to create a new React project with
                TypeScript template:
              </p>
              <pre>
                <code>
                  npx create-react-app my-react-ts-app --template typescript
                </code>
              </pre>
              <p>
                Replace <code>my-react-ts-app</code> with your desired project
                name.
              </p>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              {" "}
              <h2>3. Navigate to Your Project</h2>
              <p>Change into the project directory:</p>
              <pre>
                <code>cd my-react-ts-app</code>
              </pre>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              {" "}
              <h2>4. Start the Development Server</h2>
              <p>
                Start the development server to see your new React TypeScript
                application in action:
              </p>
              <pre>
                <code>npm start</code>
              </pre>
              <p>
                This command will open the app in your default browser. You can
                now start building your React application using TypeScript.
              </p>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              <h2>5. Add Additional Dependencies (Optional)</h2>
              <p>
                You may want to add more libraries to enhance your React
                TypeScript project. Here are some commonly used packages:
              </p>
              <ul>
                <li>
                  React Router:{" "}
                  <pre>
                    <code>npm install react-router-dom</code>
                  </pre>
                </li>
                <li>
                  Redux Toolkit:{" "}
                  <pre>
                    <code>npm install @reduxjs/toolkit react-redux</code>
                  </pre>
                </li>
                <li>
                  Axios (for HTTP requests):{" "}
                  <pre>
                    <code>npm install axios</code>
                  </pre>
                </li>
              </ul>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              <h2>6. Open the Project in Your Code Editor</h2>
              <p>
                Open the project directory in your favorite code editor (e.g.,
                VS Code) to start coding:
              </p>
              <pre>
                <code>code .</code>
              </pre>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              {" "}
              <h2>7. Build and Deploy Your App</h2>
              <p>
                When you're ready to build your project for production, use the
                following command:
              </p>
              <pre>
                <code>npm run build</code>
              </pre>
              <p>
                This will create an optimized build of your application in the{" "}
                <code>build</code> directory, ready to be deployed.
              </p>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              {" "}
              <h2>Next Steps</h2>
              <ul>
                <li>
                  Explore the{" "}
                  <a href="https://reactjs.org/docs/getting-started.html">
                    React Documentation
                  </a>{" "}
                  to learn more about building React applications.
                </li>
                <li>
                  Check out the{" "}
                  <a href="https://www.typescriptlang.org/docs/">
                    TypeScript Documentation
                  </a>{" "}
                  for TypeScript-specific features and usage.
                </li>
              </ul>
            </div>
          </div>
        );
      case "Redux":
        return (
          <div
            className="installation-page"
            style={{ width: "60vw", padding: "20px" }}
          >
            <h1>Redux Installation Guide</h1>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              {" "}
              <h2>1. Install Redux Toolkit and React-Redux</h2>
              <p>
                To install Redux Toolkit and React-Redux, run the following
                command in your terminal within your React project:
              </p>
              <pre>
                <code>npm install @reduxjs/toolkit react-redux</code>
              </pre>
              <p>or if you are using yarn:</p>
              <pre>
                <code>yarn add @reduxjs/toolkit react-redux</code>
              </pre>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              {" "}
              <h2>2. Set Up the Redux Store</h2>
              <p>
                After installing the required packages, create a Redux store.
                Here's a basic example:
              </p>
              <p>
                Create a new file called <code>store.ts</code> inside a{" "}
                <code>redux</code> folder:
              </p>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              <h2>3. Provide the Store to Your Application</h2>
              <p>
                To use the Redux store in your React application, wrap your
                application in the <code>Provider</code> component and pass it
                the store:
              </p>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              <h2>4. Create a Slice</h2>
              <p>
                Create a slice to manage a piece of your state. Here's an
                example:
              </p>
              <p>
                Create a new file called <code>counterSlice.ts</code> inside the{" "}
                <code>redux</code> folder:
              </p>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              {" "}
              <h2>5. Add the Reducer to the Store</h2>
              <p>Import and add the reducer to the store:</p>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              <h2>6. Use Redux State and Actions in Components</h2>
              <p>
                Now you can use Redux state and actions in your React
                components:
              </p>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              <h2>Next Steps</h2>
              <ul>
                <li>
                  Explore the Redux Toolkit{" "}
                  <a href="https://redux-toolkit.js.org/">documentation</a> for
                  more advanced usage and features.
                </li>
                <li>
                  Implement Redux in your components to manage complex
                  application state effectively.
                </li>
              </ul>
            </div>
          </div>
        );
      case "Tailwind CSS":
        return (
          <div
            className="installation-page"
            style={{ width: "60vw", padding: "20px" }}
          >
            <h1>Tailwind CSS Installation Instructions</h1>
            <div style={{ lineHeight: "1.8", padding: "20px" }}>
              <h2>1. Next.js</h2>
              <p> # Create a new Next.js project (if you don't have one)</p>
              <pre>
                <code>npx create-next-app@latest my-next-app</code>
              </pre>
              <p># Navigate to your project</p>
              <pre>
                <code>cd my-next-app</code>
              </pre>
              <p> Install Tailwind CSS and its peer dependencies</p>
              <pre>
                <code>npm install -D tailwindcss postcss autoprefixer</code>
              </pre>
              <p># Initialize Tailwind CSS </p>
              <pre>
                <code>npx tailwindcss init -p</code>
              </pre>
              <h3>tailwind.config.js</h3>
              <p>
                Read
                <a href="https://ui.shadcn.com/docs/installation">
                  Documentation
                </a>
              </p>
              <h3>styles/globals.css</h3>
              <pre>
                <code>
                  @tailwind base; @tailwind components; @tailwind utilities;
                </code>
              </pre>
              <h3>pages/_app.js</h3>
              <p>
                Read
                <a href="https://ui.shadcn.com/docs/installation">
                  Documentation
                </a>
              </p>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              {" "}
              <h2>2. Vite</h2>
              <p> # Create a new Vite project </p>
              <pre>
                <code>npm create vite@latest my-vite-app --template react</code>
              </pre>
              <p> # Navigate to your project </p>
              <pre>
                <code>cd my-vite-app</code>
              </pre>
              <p>#Install Tailwind CSS and its peer dependencies</p>
              <pre>
                <code>npm install -D tailwindcss postcss autoprefixer</code>
              </pre>
              <p># Initialize Tailwind CSS</p>
              <pre>
                <code>npx tailwindcss init -p</code>
              </pre>
              <h3>tailwind.config.js</h3>
              <p>
                Read
                <a href="https://ui.shadcn.com/docs/installation">
                  Documentation
                </a>
              </p>
              <h3>src/index.css</h3>
              <pre>
                <code>
                  @tailwind base; @tailwind components; @tailwind utilities;
                </code>
              </pre>
            </div>
            <div style={{ lineHeight: "1.8", padding: "20px" }}>
              {" "}
              <h2>3. Remix</h2>
              <p># Create a new Remix project </p>
              <pre>
                <code>npx create-remix@latest</code>
              </pre>
              <p>#Navigate to your project </p>
              <pre>
                <code>cd my-remix-app</code>
              </pre>
              <p> # Install Tailwind CSS and its peer dependencies</p>
              <pre>
                <code>npm install -D tailwindcss postcss autoprefixer</code>
              </pre>
              <p> # Initialize Tailwind CSS</p>
              <pre>
                <code>npx tailwindcss init -p</code>
              </pre>
              <h3>tailwind.config.js</h3>
              <p>
                Read
                <a href="https://ui.shadcn.com/docs/installation">
                  Documentation
                </a>
              </p>
              <h3>app/root.jsx</h3>
              <p>
                Read
                <a href="https://ui.shadcn.com/docs/installation">
                  Documentation
                </a>
              </p>
            </div>
            <div style={{ lineHeight: "1.8", padding: "20px" }}>
              <h2>4. Astro</h2>
              <p># Create a new Astro project </p>
              <pre>
                <code>npm create astro@latest</code>
              </pre>
              <p> # Navigate to your project</p>
              <pre>
                <code>cd my-astro-app</code>
              </pre>
              <p> # Install Tailwind CSS and its peer dependencies</p>
              <pre>
                <code>npm install -D tailwindcss postcss autoprefixer</code>
              </pre>
              <p> # Initialize Tailwind CSS </p>
              <pre>
                <code>npx tailwindcss init -p</code>
              </pre>
              <h3>tailwind.config.js</h3>
              <p>
                Read
                <a href="https://ui.shadcn.com/docs/installation">
                  Documentation
                </a>
              </p>
              <h3>src/styles/global.css</h3>
              <p>
                Read
                <a href="https://ui.shadcn.com/docs/installation">
                  Documentation
                </a>
              </p>
              <h3>src/layouts/BaseLayout.astro</h3>
              <pre>
                <code>
                  src/layouts/BaseLayout.astro
                  <html>
                    <head>
                      <link href="/src/styles/global.css" rel="stylesheet" />
                    </head>
                    <body>
                      <slot />
                    </body>
                  </html>
                </code>
              </pre>
            </div>
            <div style={{ lineHeight: "1.8", padding: "20px" }}>
              <h2>5. Laravel</h2>
              <p> # Install a new Laravel project composer </p>
              <pre>
                <code>create-project laravel/laravel my-laravel-app</code>
              </pre>
              <p> # Navigate to your project</p>
              <pre>
                <code>cd my-laravel-app</code>
              </pre>
              <p> # Install Tailwind CSS and its peer dependencies</p>
              <pre>
                <code>npm install -D tailwindcss postcss autoprefixer</code>
              </pre>
              <p> # Initialize Tailwind CSS</p>
              <pre>
                <code>npx tailwindcss init</code>
              </pre>
              <h3>tailwind.config.js</h3>
              <p>
                Read
                <a href="https://ui.shadcn.com/docs/installation">
                  Documentation
                </a>
              </p>
              <h3>resources/css/app.css</h3>
              <p>
                Read
                <a href="https://ui.shadcn.com/docs/installation">
                  Documentation
                </a>
              </p>
              <pre>
                <code>
                  resources/css/app.css @tailwind base; @tailwind components;
                  @tailwind utilities;
                </code>
              </pre>
            </div>
            <div style={{ lineHeight: "1.8", padding: "20px" }}>
              <h2>6. Gatsby</h2>
              <p># Create a new Gatsby project </p>
              <pre>
                <code>npx gatsby new my-gatsby-app</code>
              </pre>
              <p> # Navigate to your project </p>
              <pre>
                <code>cd my-gatsby-app</code>
              </pre>
              <p> # Install Tailwind CSS and its peer dependencies</p>
              <pre>
                <code>
                  npm install -D tailwindcss postcss autoprefixer
                  gatsby-plugin-postcss
                </code>
              </pre>
              <p> # Initialize Tailwind CSS</p>
              <pre>
                <code>npx tailwindcss init -p</code>
              </pre>
              <h3>gatsby-config.js</h3>
              <p>
                Read
                <a href="https://ui.shadcn.com/docs/installation">
                  Documentation
                </a>
              </p>
              <h3>src/styles/global.css</h3>
              <pre>
                <code>
                  src/styles/global.css @tailwind base; @tailwind components;
                  @tailwind utilities;
                </code>
              </pre>
              <h3>gatsby-browser.js</h3>
              <p>
                Read
                <a href="https://ui.shadcn.com/docs/installation">
                  Documentation
                </a>
              </p>
              <pre>
                <code>gatsby-browser.js import './src/styles/global.css';</code>
              </pre>
            </div>
          </div>
        );
      case "Router":
        return (
          <div
            className="installation-page"
            style={{ width: "60vw", padding: "20px" }}
          >
            <h1>React Router Installation Guide</h1>
            <p>
              Follow these steps to install and set up React Router in your
              React project:
            </p>

            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              <h2>1. Install React Router</h2>
              <p>Open your terminal and run the following command:</p>
              <pre>
                <code>npm install react-router-dom</code>
              </pre>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              {" "}
              <h2>2. Set Up Routing</h2>
              <p>
                In your React project, you need to set up routing.{" "}
                <a href="https://reactrouter.com/en/main/start/tutorial">
                  Visit it
                </a>
              </p>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              {" "}
              <h3>Basic Routing Setup</h3>
              <p>
                Create a file named <code>App.js</code> in your <code>src</code>{" "}
                directory with the following content:{" "}
                <a href="https://reactrouter.com/en/main/start/tutorial">
                  Setup
                </a>
              </p>
              <div style={{ lineHeight: "1.5", padding: "20px" }}>
                <h3>Additional Information</h3>
                <ul>
                  <li>
                    <strong>Home:</strong> A component to render at the root
                    path.
                  </li>
                  <li>
                    <strong>About:</strong> A component to render at the /about
                    path.
                  </li>
                </ul>
              </div>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              {" "}
              <p>
                For more details on React Router, visit the{" "}
                <a href="https://reactrouter.com/">
                  React Router Documentation
                </a>
                .
              </p>
            </div>
          </div>
        );
      case "Bootstrap":
        return (
          <div
            className="installation-page"
            style={{ width: "60vw", padding: "20px" }}
          >
            <h1>Bootstrap Installation in React</h1>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              <h2>1. Install Bootstrap</h2>
              <p>
                First, you need to install Bootstrap and its required
                dependencies. You can do this using npm or yarn:
              </p>
              <p> Using npm: </p>
              <pre>
                <code>npm install bootstrap</code>
              </pre>
              <p>Using yarn:</p>
              <pre>
                <code>yarn add bootstrap</code>
              </pre>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              <h2>2. Import Bootstrap CSS</h2>
              <p>
                Once Bootstrap is installed, you need to import the Bootstrap
                CSS file into your React project. Typically, you would add this
                import to your <code>src/index.js</code> or{" "}
                <code>src/App.js</code> file, depending on where you want
                Bootstrap styles to be available.
              </p>
              <p>In src/index.js:</p>
              <pre>
                <code>import 'bootstrap/dist/css/bootstrap.min.css';</code>
              </pre>
              <p>Or in src/App.js:</p>
              <pre>
                <code>import 'bootstrap/dist/css/bootstrap.min.css';</code>
              </pre>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              <h2>3. Use Bootstrap Components</h2>
              <p>
                Now you can use Bootstrap components in your React components.
                For example:
              </p>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              <h2>Optional: Install Bootstrap Icons</h2>
              <p>
                If you want to use Bootstrap Icons, you can install the{" "}
                <code>bootstrap-icons</code> package:
              </p>
              <p> Using npm:</p>
              <pre>
                <code>npm install bootstrap-icons</code>
              </pre>
              <p> Using yarn:</p>
              <pre>
                <code>yarn add bootstrap-icons</code>
              </pre>
              <p>Then import the icons CSS file:</p>
              <pre>
                In src/index.js:
                <code>import 'bootstrap-icons/font/bootstrap-icons.css';</code>
              </pre>
              <div style={{ lineHeight: "1.5", padding: "20px" }}>
                <li>
                  Explore the Node.js{" "}
                  <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/">
                    documentation
                  </a>{" "}
                  to learn more about its features.
                </li>
              </div>
            </div>
          </div>
        );
      case "Material Ui":
        return (
          <div
            className="installation-page"
            style={{ width: "60vw", padding: "20px" }}
          >
            <h1>Material-UI Installation for React</h1>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              {" "}
              <h2>1. Install the Core MUI Package</h2>
              <p>Open your terminal and run the following command:</p>
              <pre>
                <code>
                  npm install @mui/material @emotion/react @emotion/styled
                </code>
              </pre>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              <h2>2. Install the MUI Icons Package (Optional)</h2>
              <p>If you need icons, run:</p>
              <pre>
                <code>npm install @mui/icons-material</code>
              </pre>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              <h2>3. Add Roboto Font and Material Icons (Optional)</h2>
              <p>
                Include the following in the <code>&lt;head&gt;</code> section
                of your <code>public/index.html</code> file:
              </p>
              <pre>
                <code>
                  &lt;link rel="stylesheet"
                  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                  /&gt; &lt;link rel="stylesheet"
                  href="https://fonts.googleapis.com/icon?family=Material+Icons"
                  /&gt;
                </code>
              </pre>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              <h2>4. Use MUI Components in Your Project</h2>
              <p>
                Import and use MUI components in your React files. For example:
              </p>

              <p>
                That's it! You now have MUI installed and ready to use in your
                React project. If you have any specific components or themes you
                want to work with, let me know!
              </p>
            </div>
          </div>
        );
      case "React Icon":
        return (
          <div
            className="installation-page"
            style={{ width: "60vw", padding: "20px" }}
          >
            <h1>React Icons Installation Guide</h1>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              {" "}
              <h2>1. Install the `react-icons` Package</h2>
              <p>
                To install <code>react-icons</code>, you can use either npm or
                yarn. Open your terminal and run one of the following commands:
              </p>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              {" "}
              <h3>Using npm:</h3>
              <pre>
                <code>npm install react-icons</code>
              </pre>
              <h3>Using yarn:</h3>
              <pre>
                <code>yarn add react-icons</code>
              </pre>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              {" "}
              <h2>2. Import and Use Icons in Your Component</h2>
              <p>
                After installing the package, you can import and use icons in
                your React components.
              </p>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              {" "}
              <h2>3. Explore Available Icons</h2>
              <p>
                <code>react-icons</code> provides a wide range of icons from
                different icon sets. You can explore available icons and their
                names on the{" "}
                <a href="https://react-icons.github.io/react-icons/">
                  React Icons documentation page
                </a>
                .
              </p>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              <p>
                If you need icons from a specific library (e.g., Font Awesome,
                Material Icons), you can import them from the corresponding
                package within <code>react-icons</code>:
              </p>
              <p>a-</p>
              <pre>
                <code>import FaBeer from 'react-icons/fa';</code>
              </pre>
              <p>b-</p>
              <pre>
                <code>import MdHome from 'react-icons/md';</code>
              </pre>
              <p>c-</p>
              <pre>
                <code>import IoMdSettings from 'react-icons/io';</code>
              </pre>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              <p>
                That’s it! You should now be able to use icons in your React
                project.
              </p>
            </div>
          </div>
        );
      case "Toastify":
        return (
          <div
            className="installation-page"
            style={{ width: "60vw", padding: "20px" }}
          >
            <h1>Toastify Installation Guide for React</h1>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              {" "}
              <h2>1. Install Toastify</h2>
              <p>
                To add Toastify to your React project, you can use npm or yarn.
                Run one of the following commands in your terminal:
              </p>
              <pre>
                <code>npm install react-toastify</code>
              </pre>
              <pre>
                <code>yarn add react-toastify</code>
              </pre>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              {" "}
              <h2>2. Import and Configure Toastify</h2>
              <p>
                Import the Toastify CSS and set up the ToastContainer component
                in your app.
              </p>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              {" "}
              <h2>3. Show Notifications</h2>
              <p>
                You can display notifications anywhere in your application by
                importing <code>toast</code> from <code>react-toastify</code>{" "}
                and using it to show different types of notifications:
              </p>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              {" "}
              <h2>4. Customize Toast Notifications</h2>
              <p>
                Customize the appearance and behavior of the toasts by passing
                options to the <code>toast</code> function:
              </p>
              <p>
                Learn in deep with{" "}
                <a href="https://www.npmjs.com/package/react-toastify">
                  documentation
                </a>
              </p>
            </div>
          </div>
        );
      case "Chart JS":
        return (
          <div
            className="installation-page"
            style={{ width: "60vw", padding: "20px" }}
          >
            <h1>Chart.js Installation for React</h1>
            <p>
              To install and use Chart.js in a React application, follow these
              steps:
            </p>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              <h2>1. Install Dependencies</h2>
              <p>
                First, you'll need to install <code>chart.js</code> and{" "}
                <code>react-chartjs-2</code>, which is a wrapper for integrating
                Chart.js with React.
              </p>
              <pre>
                <code>npm install chart.js react-chartjs-2</code>
              </pre>
              <p>or if you are using Yarn:</p>
              <pre>
                <code>yarn add chart.js react-chartjs-2</code>
              </pre>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              {" "}
              <h2>2. Create a Chart Component</h2>
              <p>
                Here's a{" "}
                <a href="https://www.chartjs.org/docs/latest/getting-started/usage.html">
                  documentation
                </a>{" "}
                of how to create a Chart component in your React application:
              </p>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              <h2>Summary</h2>
              <ol>
                <li>
                  <strong>Install</strong> <code>chart.js</code> and{" "}
                  <code>react-chartjs-2</code>.
                </li>
                <li>
                  <strong>Create</strong> a Chart component with the desired
                  chart type and options.
                </li>
                <li>
                  <strong>Import</strong> and <strong>use</strong> the Chart
                  component in your application.
                </li>
              </ol>
              <p>
                Feel free to modify the <code>data</code> and{" "}
                <code>options</code> in the <code>BarChart</code> component to
                fit your specific needs.
              </p>
            </div>
          </div>
        );
      case "Axios":
        return (
          <div
            className="installation-page"
            style={{ width: "60vw", padding: "20px" }}
          >
            <h1>Axios Installation Guide</h1>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              <h2>1. What is Axios?</h2>
              <p>
                <strong>Axios</strong> is a popular JavaScript library used for
                making HTTP requests. It works in both the browser and Node.js
                and is often used in web development to interact with APIs,
                fetch data, and send data to a server.
              </p>
            </div>

            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              <h2>2. Install Axios</h2>
              <h3>Using npm (Node Package Manager):</h3>
              <p>
                Open your terminal and run the following command to install
                Axios:
              </p>
              <pre>
                <code>npm install axios</code>
              </pre>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              <h3>Using yarn:</h3>
              <p>
                If you are using yarn as your package manager, use the following
                command:
              </p>
              <pre>
                <code>yarn add axios</code>
              </pre>
            </div>

            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              <h2>3. Import Axios in Your Project</h2>
              <p>
                After installing Axios, you need to import it into your
                JavaScript or TypeScript files where you want to make HTTP
                requests. Here is an example of how to import Axios:
              </p>
              <h3>Using CommonJS:</h3>
              <pre>
                <code>const axios = require('axios');</code>
              </pre>

              <h3>Using ES6 Modules:</h3>
              <pre>
                <code>import axios from 'axios';</code>
              </pre>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              <h2>4. Next Steps</h2>
              <ul>
                <li>
                  Explore the official{" "}
                  <a href="https://axios-http.com/">Axios documentation</a> to
                  learn more about its features.
                </li>
                <li>
                  Check out advanced usage scenarios such as interceptors,
                  handling errors, and using Axios with async/await.
                </li>
              </ul>
            </div>
          </div>
        );
      case "React Query":
        return (
          <div
            className="installation-page"
            style={{ width: "60vw", padding: "20px" }}
          >
            <h1>React Query Installation Guide</h1>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              {" "}
              <h2>1. Introduction</h2>
              <p>
                <strong>React Query</strong> is a powerful data-fetching library
                for React applications. It simplifies data synchronization and
                server-state management, making it easier to fetch, cache, and
                update data in your React components.
              </p>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              <h2>2. Installation</h2>
              <h3>Using npm:</h3>
              <p>
                Run the following command to install React Query in your
                project:
              </p>
              <pre>
                <code>npm install @tanstack/react-query</code>
              </pre>
              <h3>Using yarn:</h3>
              <p>If you're using yarn, use this command:</p>
              <pre>
                <code>yarn add @tanstack/react-query</code>
              </pre>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              {" "}
              <h2>3. Setting Up React Query</h2>
              <p>
                After installation, wrap your application with the{" "}
                <code>QueryClientProvider</code> to enable React Query in your
                project. Here’s a basic setup:
              </p>
              a-
              <pre>
                <code>import React from 'react';</code>
              </pre>
              b-
              <pre>
                <code>import ReactDOM from 'react-dom';</code>
              </pre>
              c-
              <pre>
                <code>
                  {" "}
                  import (QueryClient, QueryClientProvider) from
                  '@tanstack/react-query';
                </code>
              </pre>
              d-
              <pre>
                <code>import App from './App';</code>
              </pre>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              {" "}
              <h2>4. Using React Query</h2>
              <p>
                Now that React Query is set up, you can use hooks like{" "}
                <code>useQuery</code> to fetch and manage data in your
                components. Here's a quick example:
              </p>
              <pre>
                <code>
                  import useQuery from '@tanstack/react-query'; import axios
                  from 'axios';
                </code>
              </pre>
            </div>
            <div style={{ lineHeight: "1.5", padding: "20px" }}>
              {" "}
              <h2>5. Next Steps</h2>
              <ul>
                <li>
                  Explore the official{" "}
                  <a href="https://tanstack.com/query/latest">
                    React Query Documentation
                  </a>{" "}
                  for advanced features like caching, pagination, and more.
                </li>
                <li>
                  Experiment with different hooks such as{" "}
                  <code>useMutation</code> to handle server-side mutations.
                </li>
              </ul>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderSection = () => {
    switch (currentSection) {
      case "Home":
        return (
          <div>
            <div
              style={{
                height: "90vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <h1
                  className="h1-size-res"
                  style={{
                    fontSize: "60px",
                    marginTop: "-50px",
                    fontFamily: "Righteous",
                  }}
                >
                  Welcome!
                </h1>
                <div
                  className="welcome-box-res"
                  style={{ width: "600px", padding: "20px" }}
                >
                  <h3 style={{ fontWeight: "normal", paddingTop: "10px" }}>
                    Whether you're a beginner or an experienced developer, this
                    project showcases the seamless installation and integration
                    of various technologies.
                  </h3>
                </div>

                <button
                  className="button"
                  style={{
                    borderRadius: "50px",
                    padding: "8px 40px",
                    textTransform: "none",
                    marginTop: "20px",
                    color: "black",
                    fontWeight: "bold",
                    backgroundColor: "#f2f2f2",
                    fontFamily: "Righteous",
                  }}
                  onClick={() => {
                    setCurrentSection("Installation");
                  }}
                >
                  Installations
                </button>
              </div>
              <div>
                <img
                  className="remove-img-res"
                  style={{ width: "600px" }}
                  src="https://cdni.iconscout.com/illustration/premium/thumb/man-sitting-at-cafe-working-on-a-laptop-2931900-2464106.png"
                  alt=""
                />
              </div>
            </div>
            <div style={{ backgroundColor: "#1a1a1a", paddingBottom: "20px",paddingRight:"40px" }}>
              <div style={{ marginBottom: "20px", textAlign: "center" }}>
                <input
                  type="text"
                  placeholder="Search by name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    marginTop:"10px",
                    padding: "10px",
                    width: "60%",
                    fontSize: "16px",
                    borderRadius: "5px",
                    border: "1px solid #ffff80",
                    outlineColor: "",
                    background:
                      "linear-gradient(to right, #007bff6d, #00bfff71)",
                    color: "white",
                  }}
                />
              </div>

              {filteredData.map((data, index) => (
                <div
                  key={index}
                  style={{ color: "#ffff80", textAlign: "center" }}
                >
                  <h1
                    style={{
                      fontSize: "55px",
                      fontFamily: "Righteous",
                      padding: "20px",
                    }}
                  >
                    {data.category}
                  </h1>
                  {data.subcategories.map((subcategoryData, subIndex) => (
                    <div key={subIndex}>
                      <h1
                        style={{
                          margin: "20px",
                          fontFamily: "SUSE",
                          width: "auto",
                        }}
                      >
                        {subcategoryData.name}
                      </h1>
                      <ul>
                        <div
                          className="language-cards-grid-res"
                          style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(5, 1fr)",
                            gap: "20px",
                          }}
                        >
                          {subcategoryData.items.map((item, itmIndex) => (
                            <div key={item.id}>
                              <Box>
                                <a
                                  style={{
                                    textDecoration: "none",
                                    color: "black",
                                  }}
                                  href={item.link}
                                >
                                  <Card
                                    className="language-cards-bg-effect"
                                    sx={{
                                      width: "250px",
                                      height: "100px",
                                      padding: "10px",
                                      backgroundColor:
                                        colors[itmIndex % colors.length],
                                      textAlign: "center",
                                      display: "flex",
                                      justifyContent: "center",
                                      flexDirection: "column",
                                      alignItems: "center",
                                    }}
                                    variant="outlined"
                                  >
                                    <img
                                      style={{ width: "40px" }}
                                      src={item.logo}
                                      alt=""
                                    />
                                    <h2 style={{ fontFamily: "Righteous" }}>
                                      {item.name}
                                    </h2>
                                  </Card>
                                </a>
                              </Box>
                            </div>
                          ))}
                        </div>
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case "About":
        return (
          <div
            className="about"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "90vh",
            }}
          >
            <div style={{ width: "80vw" }}>
              <div
                className="about-card-res"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "20px",
                  boxShadow: "0px 0.2px 1px 0px gray",
                  marginTop: "40px",
                  backgroundColor: "#e6ffff",
                  color: "black",
                  height: "400px",
                  overflowY: "auto",
                }}
              >
                <div>
                  <img
                    className="remove-img-res"
                    style={{
                      width: "400px",
                      borderRadius: "10px",
                    }}
                    src="https://i.pinimg.com/originals/41/95/51/4195511fcf36e82976d2ee6c0e9d2567.png"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    textAlign: "left",
                    marginLeft: "20px",
                    lineHeight: "1.8",
                  }}
                >
                  <li>
                    <b>React & React TypeScript</b>{" "}
                    <i>
                      Learn how to quickly set up and configure React with
                      TypeScript for a robust development experience.
                    </i>
                  </li>
                  <li>
                    {" "}
                    <b>Tailwind CSS & Bootstrap</b>{" "}
                    <i>
                      Discover how to integrate popular styling frameworks to
                      create beautiful, responsive UIs.
                    </i>
                  </li>
                  <li>
                    {" "}
                    <b>Material-UI</b>{" "}
                    <i>
                      See how to use Material Design components to enhance the
                      visual appeal of your application.
                    </i>
                  </li>
                  <li>
                    {" "}
                    <b>React Router</b>{" "}
                    <i>
                      Implement smooth navigation and dynamic routing in your
                      app.
                    </i>
                  </li>
                  <li>
                    {" "}
                    <b>Redux</b>{" "}
                    <i>
                      Manage global state efficiently with Redux and Redux
                      Toolkit.
                    </i>
                  </li>
                  <li>
                    {" "}
                    <b>Chart.js</b>{" "}
                    <i>Visualize data with interactive charts and graphs.</i>
                  </li>
                  <li>
                    {" "}
                    <b>React Toastify</b>{" "}
                    <i>
                      Add stylish and customizable notifications to your
                      project.
                    </i>
                  </li>{" "}
                  <li>
                    {" "}
                    <b>Node.js</b>{" "}
                    <i>
                      Set up a powerful backend environment for server-side
                      programming.
                    </i>
                  </li>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p style={{ margin: "20px", textAlign: "center" }}>
                  Dive into this project to see how these tools come together to
                  form a cohesive and scalable web application. Whether you're
                  building a personal portfolio, a business website, or a
                  full-fledged web app, this project will provide the foundation
                  you need to get started.
                </p>
              </div>
            </div>
          </div>
        );
      case "Contact Me":
        return (
          <div
            style={{
              height: "90vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="contact-bg-res"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "600px",
                height: "360px",
                overflow: "hidden",
                boxShadow: "0px 0.2px 7px 0px gray",
                border: "2px solid white",
              }}
            >
              <div
                style={{
                  width: "300px",
                  height: "360px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "column",
                }}
                className="contact-img"
              >
                <h1 style={{ fontFamily: "Righteous", color: "white" }}>
                  <GrassIcon />
                  BuildStack
                </h1>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <div className="social-icons">
                    <a href="https://facebook.com" rel="noopener noreferrer">
                      <FacebookIcon sx={{ color: "white" }} />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <XIcon sx={{ color: "white" }} />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInIcon sx={{ color: "white" }} />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon sx={{ color: "white" }} />
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="input-bg-res"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  padding: "10px",
                  backgroundColor: "#ffffffc0",
                  paddingTop: "30px",
                  overflowY: "auto",
                }}
              >
                <input
                  id="customInput"
                  type="text"
                  placeholder="Enter your Name"
                  style={{
                    width: "30ch",
                    transition: "all 0.3s",
                    outline: "none",
                    border: "2px solid transparent",
                    borderRadius: "4px",
                    height: "5ch",
                    paddingLeft: "10px",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.border = "2px solid #3b82f6"; // blue-400
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.border = "2px solid transparent";
                  }}
                />
                <input
                  id="customInput"
                  type="text"
                  placeholder="Enter your Email"
                  style={{
                    width: "30ch",
                    transition: "all 0.3s",
                    outline: "none",
                    border: "2px solid transparent",
                    borderRadius: "4px",
                    height: "5ch",
                    margin: "10px 17px",
                    paddingLeft: "10px",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.border = "2px solid #3b82f6"; // blue-400
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.border = "2px solid transparent";
                  }}
                />
                <textarea
                  style={{
                    width: "30ch",
                    transition: "all 0.3s",
                    outline: "none",
                    border: "2px solid transparent",
                    borderRadius: "4px",
                  }}
                  placeholder="Message....."
                  name="Message"
                  id="textarea"
                  rows={8}
                  onFocus={(e) => {
                    e.currentTarget.style.border = "2px solid #3b82f6"; // blue-400
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.border = "2px solid transparent";
                  }}
                ></textarea>
                <Button
                  className="button"
                  onClick={() => {
                    openMessageDialog();
                  }}
                  type="submit"
                  sx={{
                    borderRadius: "50px",
                    padding: "5px 25px",
                    textTransform: "none",
                    margin: "20px",
                    color: "black",
                    fontWeight: "bold",
                    backgroundColor: "#fff",
                    fontFamily: "Righteous",
                  }}
                >
                  Submit
                </Button>
              </div>
            </div>
            {messageDialog && (
              <Dialog
                open={messageDialog}
                sx={{
                  "& .MuiPaper-root": {
                    background: "linear-gradient(to right, #007bff, #00bfff)",
                    color: "white",
                  },
                }}
              >
                <DialogTitle>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <GrassIcon sx={{ fontSize: "30px" }} />
                    <CloseIcon
                      sx={{ color: "gray", cursor: "pointer" }}
                      onClick={() => {
                        closeMessageDialog();
                      }}
                    />
                  </div>
                </DialogTitle>
                <Divider />
                <DialogContent>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "30px",
                      flexDirection: "column",
                    }}
                  >
                    <h1>Congratulation</h1>
                    <DoneAllIcon
                      sx={{
                        border: "5px solid white",
                        borderRadius: "50%",
                        padding: "8px",
                        margin: "10px",
                      }}
                    />
                    <p style={{ padding: "20px" }}>
                      Your Message has been sent.
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
        );
      case "Installation":
        return (
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "left",
                backgroundColor: "white",
                color: "black",
              }}
            >
              <div className="tabs-res" hidden>
                <Box
                  sx={{
                    maxWidth: { xs: 350, sm: 480 },
                    bgcolor: "background.paper",
                    padding: "10px",
                    paddingLeft: "20px",
                  }}
                >
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                  >
                    {[
                      "Get Started",
                      "Node JS",
                      "Axios",
                      "React JS",
                      "React Query",
                      "React TS",
                      "Redux",
                      "Router",
                      "Toastify",
                      "Tailwind CSS",
                      "Chart JS",
                      "Bootstrap",
                      "Material Ui",
                      "React Icon",
                    ].map((text, index) => (
                      <Tab
                        className="tab-bgs"
                        onClick={() =>
                          setInstallationSection(
                            text as typeof installationSection
                          )
                        }
                        label={text}
                      />
                    ))}
                  </Tabs>
                </Box>
                <div
                  style={{
                    height: "100vh",
                    overflowY: "auto",
                    width: "85vw",
                  }}
                >
                  {installationRenderSection()}
                </div>
              </div>

              <div className="tabs-without-res" style={{ width: "200px" }}>
                <List>
                  {[
                    "Get Started",
                    "Node JS",
                    "Axios",
                    "React JS",
                    "React Query",
                    "React TS",
                    "Redux",
                    "Router",
                    "Toastify",
                    "Tailwind CSS",
                    "Chart JS",
                    "Bootstrap",
                    "Material Ui",
                    "React Icon",
                  ].map((text, index) => (
                    <ListItem key={text} disablePadding>
                      <ListItemButton
                        sx={{
                          borderTopRightRadius: "50px",
                          borderBottomRightRadius: "50px",
                        }}
                        className="list-item"
                        onClick={() =>
                          setInstallationSection(
                            text as typeof installationSection
                          )
                        }
                      >
                        {text}
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </div>

              <div
                className="tabs-without-res"
                style={{
                  marginLeft: "20px",
                  borderLeft: "5px solid #006666",
                  height: "100vh",
                  overflowY: "auto",
                  padding: "30px",
                }}
              >
                {installationRenderSection()}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="home-bg">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          backgroundColor: "transparent",
          color: "white",
        }}
      >
        <div>
          <h1 style={{ fontFamily: "Righteous" }}>BuildStack</h1>
        </div>
        <div className="menu-button-res" hidden>
          <IconButton
            sx={{
              color: "white",
            }}
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              paper: {
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "20ch",
                },
              },
            }}
          >
            <MenuItem
              sx={{ fontFamily: "Righteous" }}
              className="menu-drop-button"
              onClick={() => {
                setCurrentSection("Home");
                handleClose();
              }}
            >
              Home
            </MenuItem>
            <MenuItem
              sx={{ fontFamily: "Righteous" }}
              className="menu-drop-button"
              onClick={() => {
                setCurrentSection("About");
                handleClose();
              }}
            >
              About
            </MenuItem>
            <MenuItem
              sx={{ fontFamily: "Righteous" }}
              className="menu-drop-button"
              onClick={() => {
                setCurrentSection("Contact Me");
                handleClose();
              }}
            >
              Contact me
            </MenuItem>
          </Menu>
        </div>
        <div className="button-without-res" style={{ paddingLeft: "30px" }}>
          <Button
            className="button"
            sx={{
              borderRadius: "50px",
              padding: "5px 25px",
              textTransform: "none",
              color: "black",
              fontWeight: "bold",
              backgroundColor: "#f2f2f2",
              fontFamily: "Righteous",
            }}
            onClick={() => {
              setCurrentSection("Home");
            }}
          >
            Home
          </Button>
          <Button
            className="button"
            sx={{
              borderRadius: "50px",
              padding: "5px 25px",
              textTransform: "none",
              color: "black",
              fontWeight: "bold",
              backgroundColor: "#f2f2f2",
              marginLeft: "10px",
              fontFamily: "Righteous",
            }}
            onClick={() => {
              setCurrentSection("About");
            }}
          >
            About
          </Button>
          <Button
            className="button"
            sx={{
              borderRadius: "50px",
              padding: "5px 20px",
              textTransform: "none",
              color: "black",
              fontWeight: "bold",
              backgroundColor: "#f2f2f2",
              marginLeft: "10px",
              fontFamily: "Righteous",
            }}
            onClick={() => {
              setCurrentSection("Contact Me");
            }}
          >
            Contact
          </Button>
        </div>
      </div>

      <div>
        <div>{renderSection()}</div>
      </div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <h3>
              <GrassIcon />
              BuildStack
            </h3>
            <p>
              &copy; {new Date().getFullYear()} BuildStack. All rights reserved.
            </p>
          </div>
          <div className="footer-middle">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="footer-right">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://facebook.com" rel="noopener noreferrer">
                <FacebookIcon />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <XIcon />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
