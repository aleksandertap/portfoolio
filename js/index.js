const courses = [
  {
    title: "How to Make a Website with NameCheap",
    link: "https://www.codecademy.com/learn/make-a-website",
  },
  {
    title: "JavaScript : JavaScript Awesomeness",
    link: "https://www.udemy.com/course/javascript-javascript/",
  },
  {
    title: "HTML CSS Modern Responsive Website from Scratch",
    link: "https://www.udemy.com/course/html-css-learn-to-create-a-website-from-scratch/",
  },
  {
    title: "FREE Bootstrap for Beginners & Professionals",
    link: "https://www.udemy.com/course/free-bootstrap-for-beginners-professionals/",
  },
];

const coursesCard = (courses) => {
  const container = document.querySelector(".courses");
  container.innerHTML = "";
  courses.forEach((course) => {
    const card = document.createElement("div");
    card.className = "course-card";
    const title = document.createElement("h3");
    title.textContent = course.title;

    const link = document.createElement("a");
    link.href = course.link;
    link.textContent = "View Course";
    link.target = "_blank";

    card.append(title, link);
    container.append(card);
  });
};

const projects = [
  {
    title: "My Personalized Webpage",
    image: "./img/project1.webp",
    description:
      "My personalized webpage, created at the end of our HTML/CSS course. Includes a bit of JS.",
    link: "https://vs24tapsi.ita.voco.ee/veebiarendus/Iseseisvad/loputoo/",
  },
  {
    title: "Javascript Webshop",
    image: "./img/project3.webp",
    description: "A webshop built during our JS course. Includes backend features.",
    link: "https://github.com/aleksandertap/E-Shop/tree/main/yl5%20-%20node",
  },
  // try to get a correct link for webshop later
  {
    title: "React + Vite Expenses Tracker",
    image: "./img/project2.webp",
    description:
      "An expense tracker built with React and Vite, allowing users to track and add expenses.",
    link: "https://github.com/aleksandertap/react",
  },
  // try to get a correct link for react later
];

const projectsCard = (projects) => {
    const container = document.querySelector(".projects");
    container.innerHTML = "";
    projects.forEach((project) => {
      const card = document.createElement("div");
      card.className = "project-card";
  
      const img = document.createElement("img");
      img.src = project.image;
      img.alt = project.title;
  
      const title = document.createElement("h3");
      title.textContent = project.title;
  
      const description = document.createElement("p");
      description.textContent = project.description;
  
      const link = document.createElement("a");
      link.href = project.link;
      link.textContent = "View Project";
      link.target = "_blank";
  
      card.append(img, title, description, link);
      container.append(card);
    });
  };
coursesCard(courses);
projectsCard(projects);