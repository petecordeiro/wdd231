const url = "data/places.json";

const places_card = document.querySelector("#places");
places_card.innerHTML = "";

async function getPlacesData() {
  const response = await fetch(url); // request
  const data = await response.json(); // parse the JSON data
  createPlaceCards(data.places);
}

function createPlaceCards(placesData) {
  placesData.forEach((place) => {
    let card = document.createElement("div");
    card.classList.add("place-card");

    let title = document.createElement("h2");
    let figure = document.createElement("figure");
    let img = document.createElement("img");
    let address = document.createElement("address");
    let description = document.createElement("p");
    let button = document.createElement("button");

    title.textContent = place.name;
    img.src = place.image_url;
    img.alt = place.name;
    address.textContent = place.address;
    description.textContent = place.description;
    button.textContent = "Learn More";

    figure.appendChild(img);
    card.appendChild(figure);
    card.appendChild(title);
    card.appendChild(address);
    card.appendChild(description);
    card.appendChild(button);

    places_card.appendChild(card);

    button.addEventListener("click", () => {
      console.log(`Learn more about ${place.name}`);
    });
  });
}

getPlacesData(places);
