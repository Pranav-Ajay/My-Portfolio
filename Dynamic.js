fetch("https://dev.to/api/articles?per_page=5")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
  
