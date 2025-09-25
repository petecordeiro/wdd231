const memberships = [
  {
    name: "NP Membership",
    price: 0,
    description: "Our free membership for non-profit",
    longdescription:
      "If you are a non-profit organization, you can still be part of Curitiba Chamber and get many benefits free of charge!",
  },
  {
    name: "Bronze Membership",
    price: 199,
    description: "Our entry-level membership",
    longdescription:
      "Perfect for small businesses just starting out. Get access to basic chamber resources, networking events, and business directory listing.",
  },
  {
    name: "Silver Membership",
    price: 499,
    description: "Our mid-tier membership",
    longdescription:
      "Ideal for growing businesses. Includes all Bronze benefits plus priority event registration, enhanced directory listing, and quarterly business workshops.",
  },
  {
    name: "Gold Membership",
    price: 999,
    description: "Our best membership plan available",
    longdescription:
      "Get the best of the chamber. With the Gold Membership your company is the first to know about the events and get VIP access to more connections and improve your business. VIP early access and more.",
  },
];

const membershipDetails = document.querySelector("#membership-details");

// Dialog
function displayMembershipDetails(membership) {
  membershipDetails.innerHTML = "";
  membershipDetails.innerHTML = `
      <button id="closeModal">❌</button>
      <h2>${membership.name}</h2>
      <h3>$${membership.price}/year</h3>
      <p><strong>Summary</strong>: ${membership.description}</p>
      <p>${membership.longdescription}</p>
  `;
  membershipDetails.showModal();

  const closeModal = document.querySelector("#closeModal");
  closeModal.addEventListener("click", () => {
    membershipDetails.close();
  });

  membershipDetails.addEventListener("click", (e) => {
    if (e.target === membershipDetails) {
      membershipDetails.close();
    }
  });
}

// Create membership cards function
function createMembershipCards(filteredMemberships) {
  document.querySelector(".memberships-list").innerHTML = "";

  filteredMemberships.forEach((membership) => {
    let listItem = document.createElement("li");
    let name = document.createElement("h3");
    let description = document.createElement("p");
    let button = document.createElement("button");

    name.textContent = membership.name;
    description.textContent = membership.description;
    button.textContent = "See the benefits";

    listItem.appendChild(name);
    listItem.appendChild(description);
    listItem.appendChild(button);

    document.querySelector(".memberships-list").appendChild(listItem);

    button.addEventListener("click", () => {
      displayMembershipDetails(membership);
    });
  });
}

createMembershipCards(memberships);
