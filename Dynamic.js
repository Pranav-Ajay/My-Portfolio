def action():
 {fetch("https://dev.to/api/articles?per_page=5")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
  }
  
btn=document.createlement("Button")
btn.textcontext="Retrieve"
btn.addEventListener("click", action())



