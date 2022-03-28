import { images } from "./";

const portfolioItems = [
  {
    id: 1,
    title: "Todo App",
    category: "Front-end / Web app",
    project: {
      description:
        "Todo App is a simple tool to help you organise everything. It’s a list of tasks you need to complete or things that you want to do. This projects is a solution to the Todo app challenge on Frontend Mentor.",
      details:
        "The app is connected with Firebase and perform CRUD operations in the database. Users are able to: view the optimal layout for the app depending on their device's screen size, see hover states for all interactive elements on the page, toggle light and dark mode, add new todos to the list, mark todos as complete, update todos, delete todos from the list, filter by all/active/complete todos.",
      technology: [
        "React.js",
        "Styled Components",
        "Firebase",
        "RWD - Responsive Web Design",
        "Mobile first approach",
      ],
      role: ["Web development"],
      links: {
        liveSite: "https://todo-fm.netlify.app/",
        github: "https://github.com/lukaszkus/todo-app",
      },
    },
    cover: images.todo_cover,
    bgColor: "linear-gradient(45deg, #b721ff 0%, #21d4fd 100%)",
    overlayColor: "#b721ff",
    path: "work/todo-app",
  },
  {
    id: 2,
    title: "Wild'n'Slow",
    category: "Graphic design / Identity",
    project: {
      description:
        "Todo App is a simple tool to help you organise everything. It’s a list of tasks you need to complete or things that you want to do. This projects is a solution to the Todo app challenge on Frontend Mentor.",
      details:
        "The app is connected with Firebase and perform CRUD operations in the database. Users are able to: view the optimal layout for the app depending on their device's screen size, see hover states for all interactive elements on the page, toggle light and dark mode, add new todos to the list, mark todos as complete, update todos, delete todos from the list, filter by all/active/complete todos.",
      technology: [
        "React.js",
        "Styled Components",
        "Firebase",
        "RWD - Responsive Web Design",
        "Mobile first approach",
      ],
      role: ["Branding & identity", "Marketing design", "Photography"],
    },
    cover: images.wns_cover,
    bgColor: "linear-gradient(45deg, #0235a8 0%, #26d5c9 100%)",
    overlayColor: "#26d5c9",
    path: "work/wild-n-slow",
  },
  {
    id: 3,
    title: "Frontend Mentor - Solutions",
    category: "Front-end / Misc",
    project: {
      description:
        "Frontend Mentor is a platfrom where you can  improve your front-end coding skills by building real projects.",
      details:
        "They are my solutions to several challenges on this platform. Here you will find responsive landing pages and dashboards, simple card components and applications. The solutions are based only on graphic design and jpg files and have been built using various technologies. See the challenge for more details.",
      technology: [
        "React.js",
        "JavaScript",
        "Css",
        "Sass",
        "Styled Components",
        "HTML",
        "BEM methodology",
        "RWD - Responsive Web Design",
        "Mobile first approach",
      ],
      role: ["Web development"],
      links: {
        github: "https://github.com/lukaszkus/frontend-mentor-aio",
        frontendMentor: "https://www.frontendmentor.io/profile/lukaszkus",
      },
    },
    cover: images.fm_cover,
    bgColor: "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)",
    overlayColor: "#8ec5fc",
    path: "work/fm-solutions",
  },
];

export default portfolioItems;
