// This only gets the raw data from the URL
// const getString = window.location.search;
// console.log(getString);

// This parses the data into an object
const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

document.querySelector("#results").innerHTML = `
<p>Appointment for ${myInfo.get("first")} ${myInfo.get("last")}</p>
<p>Proxy for ${myInfo.get("ordinance")} on ${myInfo.get(
  "date"
)} in the ${myInfo.get("location")} Temple.</p>
<p>Your phone ${myInfo.get("phone")}</p>
<p>Your email is ${myInfo.get("email")}</p>
`;
