// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const redParagraph =document.createElement("p");
redParagraph.style.color = "red";
redParagraph.classList.add("redParagraph");
redParagraph.textContent="Hey I’m red!";

container.appendChild(redParagraph);

const blueHeading = document.createElement("h3");
blueHeading.style.color="blue"
blueHeading.classList.add("blueHeading");
blueHeading.textContent="I’m a blue h3!";

container.appendChild(blueHeading);

