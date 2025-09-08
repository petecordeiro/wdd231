const url =
  "https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json";

const cards = document.querySelector("#cards");

async function getProphetData() {
  const response = await fetch(url); // request
  const data = await response.json(); // parse the JSON data
  // console.table(data.prophets);
  displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    // Create elements to add to the div.cards element
    let card = document.createElement("section");
    let fullName = document.createElement("h2");
    let portrait = document.createElement("img");
    let birthdate = document.createElement("p");
    let birthplace = document.createElement("p");

    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    birthdate.textContent = `Date of birth: ${prophet.birthdate}`;
    birthplace.textContent = `Place of birth: ${prophet.birthplace}`;

    // Build the image portrait by setting all the relevant attributes
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute(
      "alt",
      `Portrait of ${prophet.name} ${prophet.lastname}`
    );
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");

    // Append the section(card) with the created elements
    card.appendChild(fullName);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(portrait);

    cards.appendChild(card);
  });
};

// "name": "Joseph",
// "lastname": "Smith",
// "birthdate": "23 December 1805",
// "death": "27 June 1844",
// "length": 14,
// "order": 1,
// "birthplace": "Vermont",
// "numofchildren": 11,
// "imageurl":

getProphetData();
