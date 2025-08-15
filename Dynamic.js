function action() {
  fetch("https://dev.to/api/articles?per_page=5")
    .then(response => response.json())
    .then(data => {
      // Find or create the container for articles
      let container = document.getElementById("articles");
      container.innerHTML = ""; // clear previous content

      data.forEach(article => {
        let li = document.createElement("li");
        let link = document.createElement("a");
        link.href = article.url;
        link.textContent = article.title;
        link.target = "_blank"; // open in new tab
        li.appendChild(link);
        container.appendChild(li);
      });
    })
    .catch(error => console.error("Error fetching data:", error));
}

let btn = document.createElement("button");
btn.textContent = "Retrieve";
btn.addEventListener("click", action);

document.body.appendChild(btn);

// Create an empty list to hold articles
let articleList = document.createElement("ul");
articleList.id = "articles";
document.body.appendChild(articleList);


