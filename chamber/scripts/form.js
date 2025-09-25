// This file handles the form in the Join page of the chamber

const joinInfo = new URLSearchParams(window.location.search);

const timestamp = joinInfo.get("timestamp");

document.querySelector("#results").innerHTML = `
<p>${joinInfo.get("first")} ${joinInfo.get("last")}</p>
<p>Organizational title ${joinInfo.get("title")}</p>
<p>Organization name ${joinInfo.get("organization")}</p>
<p>Organization description ${joinInfo.get("longdescription")}</p>
<p>Membership type ${joinInfo.get("membership")}</p>
<p>Your phone ${joinInfo.get("phone")}</p>
<p>Your email is ${joinInfo.get("email")}</p>
<p>Data recorded at ${joinInfo.get("timestamp")}</p>
`;
