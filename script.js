let authors = document.querySelector("#author");
let images = document.querySelector("#image");
let titles = document.querySelector("#title");
let generate = document.querySelector("#generate");
const updateDetails = (url, title, author) => {
  images.setAttribute("src", url);
  authors.innerHTML = author;
  titles.innerHTML = title;
};

const generatememe = () => {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data) => {
      updateDetails(data.url, data.title, data.author);
    });
};
generate.addEventListener("click", generatememe);
