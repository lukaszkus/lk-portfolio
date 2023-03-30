import { images } from "./";

const portfolioItems = [
  {
    id: 5,
    title: "Inspiration Way",
    type: "front-end",
    category: "Website",
    project: {
      description: "Some description",
      details:
        "Users are able to: search albums on list in real time by keywords, changeing from list view to grid view, add albums to favourites, view favourites, remove from favourites, view album details, go to album or artist page on Apple Music.",
      technology: ["React.js", "SCSS", "Framer Motion"],
      tools: ["Vite", "Adobe Illustrator", "Figma"],
      role: ["Web design", "Web development"],
      links: {
        liveSite: "https://iw-gabinetpsychoterapii.pl",
      },
    },
    cover: images.iw_cover,
    path: "/work/inspiration-way",
  },
  {
    id: 4,
    title: "Top Albums",
    type: "front-end",
    category: "Mobile app",
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
    path: "/work/top-albums",
  },
  {
    id: 3,
    title: "Informatyk Na Godziny",
    type: "front-end",
    category: "Landing page",
    project: {
      description:
        "Frontend Mentor is a platfrom where you can  improve your front-end coding skills by building real projects.",
      details:
        "They are my solutions to several challenges on this platform. Here you will find responsive landing pages and dashboards, simple card components and applications. The solutions are based only on graphic design and jpg files and have been built using various technologies. See the challenge for more details.",
      technology: [
        "React.js",
        "SCSS",
        "BEM methodology",
        "RWD - Responsive Web Design",
      ],
      role: ["Web development", "Web design"],
      links: {
        liveSite: "https://informatyk-na-godziny.netlify.app/",
        github: "https://github.com/lukaszkus/informatyk-app",
      },
    },
    cover: images.inf_cover,
    path: "/work/informatyk-na-godziny",
  },
  {
    id: 2,
    title: "Todo App",
    type: "front-end",
    category: "Web app",
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
      ],
      role: ["Web development"],
      links: {
        liveSite: "https://todo-fm.netlify.app/",
        github: "https://github.com/lukaszkus/todo-app",
      },
    },
    cover: images.todo_cover,
    path: "/work/todo-app",
  },
  {
    id: 1,
    title: "FM - Solutions",
    type: "front-end",
    category: "Misc",
    project: {
      description:
        "Frontend Mentor is a platfrom where you can  improve your front-end coding skills by building real projects.",
      details:
        "They are my solutions to several challenges on this platform. Here you will find responsive landing pages and dashboards, simple card components and applications. The solutions are based only on graphic design and jpg files and have been built using various technologies. See the challenge for more details.",
      technology: [
        "React.js",
        "JavaScript",
        "CSS",
        "SCSS",
        "Styled Components",
        "HTML",
        "BEM methodology",
        "RWD - Responsive Web Design",
      ],
      role: ["Web development"],
      links: {
        github: "https://github.com/lukaszkus/frontend-mentor-aio",
        frontendMentor: "https://www.frontendmentor.io/profile/lukaszkus",
      },
    },
    cover: images.fm_cover,
    path: "/work/fm-solutions",
  },
];

export default portfolioItems;
