const url = "data/members.json";

const companies_card = document.querySelector("#companies");

async function getCompaniesData() {
  const response = await fetch(url); // request
  const data = await response.json(); // parse the JSON data
  displayCompanies(data.companies);
}

const displayCompanies = (companies) => {
  companies.forEach((company) => {
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let image = document.createElement("img");

    let info = document.createElement("div");
    let details = document.createElement("div");

    let address = document.createElement("p");
    let phone_number = document.createElement("p");
    let website_url = document.createElement("p");
    let membership_level = document.createElement("p");
    let founded_year = document.createElement("p");

    name.textContent = `${company.name}`;
    address.textContent = `Address ${company.address}`;
    phone_number.textContent = `Phone ${company.phone_number}`;
    website_url.textContent = `Website ${company.website_url}`;
    membership_level.textContent = `Membership ${company.membership_level}`;
    founded_year.textContent = `Founded ${company.founded_year}`;

    // Build the card
    image.setAttribute("src", company.image_url);
    image.setAttribute("alt", `image of ${company.name}`);
    image.setAttribute("loading", "lazy");
    image.setAttribute("width", "120");
    image.setAttribute("height", "80");

    // Append the section(card) with the created elements
    card.appendChild(name);
    card.appendChild(info);
    info.appendChild(image);
    info.appendChild(details);

    details.appendChild(address);
    details.appendChild(phone_number);
    details.appendChild(website_url);
    details.appendChild(membership_level);
    details.appendChild(founded_year);

    companies_card.appendChild(card);
  });
};

// "name": "CSE",
// "address": 110,
// "phone_number": "Introduction to Programming",
// "website_url": 2,
// "image_url": "Web and Computer Programming",
// "membership_level": "Level 2 Silver",
// "founded": 1932

getCompaniesData();
