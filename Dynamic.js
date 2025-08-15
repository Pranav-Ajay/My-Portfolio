function action() {
  fetch("https://dev.to/api/articles?per_page=5")
    .then(response => response.json())
    .then(data => {
      console.log(data); // Logs the articles to console
    })
    .catch(error => console.error("Error fetching data:", error));
}

let btn = document.createElement("button");
btn.textContent = "Retrieve";
btn.addEventListener("click", action);

document.body.appendChild(btn);


