const courses = [
  {
    subject: "CSE",
    number: 110,
    title: "Introduction to Programming",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 130,
    title: "Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.",
    technology: ["HTML", "CSS"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 111,
    title: "Programming with Functions",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 210,
    title: "Programming with Classes",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.",
    technology: ["C#"],
    completed: false,
  },
  {
    subject: "WDD",
    number: 131,
    title: "Dynamic Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 231,
    title: "Frontend Web Development I",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: false,
  },
];

// Create cards loop
createCourseCards(courses);

// Calculate credits shown
function updateCreditsShown(filteredCourses) {
  const creditsShown = document.querySelector(".credits-shown");

  const totalCredits = filteredCourses.reduce((sum, course) => {
    return sum + course.credits;
  }, 0);

  creditsShown.textContent = totalCredits;
}

// Filter All
const allLink = document.querySelector("#all");
allLink.addEventListener("click", () => {
  wddLink.classList.remove("selected");
  cseLink.classList.remove("selected");

  allLink.classList.add("selected");

  createCourseCards(courses);
});

// Filter WDD
const wddLink = document.querySelector("#wdd");
wddLink.addEventListener("click", () => {
  allLink.classList.remove("selected");
  cseLink.classList.remove("selected");

  wddLink.classList.add("selected");

  createCourseCards(
    courses.filter((course) => course.subject.startsWith("WDD"))
  );
});

// Filter CSE
const cseLink = document.querySelector("#cse");
cseLink.addEventListener("click", () => {
  allLink.classList.remove("selected");
  wddLink.classList.remove("selected");

  cseLink.classList.add("selected");

  createCourseCards(
    courses.filter((course) => course.subject.startsWith("CSE"))
  );
});

// Create course cards function
function createCourseCards(filteredCourses) {
  // Clear the list when applying filters
  document.querySelector(".courses-list").innerHTML = "";

  updateCreditsShown(filteredCourses);

  // Loop
  filteredCourses.forEach((course) => {
    let card = document.createElement("div");
    let name = document.createElement("h3");
    let number = document.createElement("p");
    let completed = document.createElement("p");
    let credits = document.createElement("p");

    name.textContent = course.title;
    number.innerHTML = `${course.number}`;
    completed.innerHTML = `<span class="label">✔ Completed</span>`;
    credits.innerHTML = `<span>Credits: ${course.credits}</span>`;

    card.appendChild(name);
    card.appendChild(number);
    if (course.completed) {
      card.appendChild(completed);

      card.classList.add("completed");
    }
    card.appendChild(credits);

    document.querySelector(".courses-list").appendChild(card);
  });
}
