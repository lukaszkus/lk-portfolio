import { images } from "./";

const portfolioItems = [
  {
    id: 5,
    title: "Top Albums",
    category: "Front-end / Mobile app",
    project: {
      description:
        "The React Native mobile app that displays the top 100 albums based on the iTunes API.",
      details:
        "Users are able to: search albums on list in real time by keywords, changeing from list view to grid view, add albums to favourites, view favourites, remove from favourites, view album details, go to album or artist page on Apple Music.",
      technology: ["React Native", "Expo"],
      role: ["Mobile development"],
      links: {
        download:
          "https://github.com/lukaszkus/react-native-music-app/blob/main/apk/TopAlbums.apk",
        github: "https://github.com/lukaszkus/react-native-music-app",
      },
    },
    cover: images.ta_cover,
    bgColor:
      "linear-gradient(to top, rgba(106, 133, 182, 0.8) 0%, rgba(186, 200, 224, 0.8) 100%)",
    // overlayColor: "#3500d3",
    overlayColor: "rgba(53, 0, 211, 0.9)",
    path: "work/top-albums",
  },
  {
    id: 4,
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
    bgColor:
      "linear-gradient(45deg, rgba(183, 33, 255, 0.8) 0%, rgba(33, 212, 253, 0.8) 100%)",
    overlayColor: "rgba(183, 33, 255, 0.9)",
    path: "work/todo-app",
  },
  {
    id: 3,
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
    bgColor:
      "linear-gradient(45deg, rgba(2, 53, 168, 0.8) 0%, rgba(38, 213, 201, 0.8) 100%)",
    overlayColor: "rgba(38, 213, 201, 0.9)",
    path: "work/wild-n-slow",
  },
  {
    id: 2,
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
    bgColor:
      "linear-gradient(120deg, rgba(224, 195, 252, 0.8) 0%, rgba(142, 197, 252, 0.8) 100%)",
    overlayColor: "rgba(142, 197, 252, 0.9)",
    path: "work/fm-solutions",
  },
  {
    id: 1,
    title: "Informatyk Na Godziny",
    category: "Front-end / Landing page",
    project: {
      description:
        "Frontend Mentor is a platfrom where you can  improve your front-end coding skills by building real projects.",
      details:
        "They are my solutions to several challenges on this platform. Here you will find responsive landing pages and dashboards, simple card components and applications. The solutions are based only on graphic design and jpg files and have been built using various technologies. See the challenge for more details.",
      technology: [
        "React.js",
        "Sass",
        "BEM methodology",
        "RWD - Responsive Web Design",
        "Mobile first approach",
        "SVG Animation",
      ],
      role: ["Web development", "Design"],
      links: {
        liveSite: "https://informatyk-na-godziny.netlify.app/",
        github: "https://github.com/lukaszkus/informatyk-app",
      },
    },
    cover: images.inf_cover,
    bgColor:
      "linear-gradient(120deg, rgba(247, 60, 79, 0.8) 0%, rgba(46, 30, 92, 0.8) 100%)",
    overlayColor: "rgba(247, 60, 79, 0.9)",
    path: "work/informatyk-na-godziny",
  },
];

export default portfolioItems;
