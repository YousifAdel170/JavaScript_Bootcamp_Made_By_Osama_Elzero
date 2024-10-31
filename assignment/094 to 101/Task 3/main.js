let createdStartDiv = document.querySelector("div").cloneNode();
createdStartDiv.setAttribute("title", "Start Element");
createdStartDiv.setAttribute("data-value", "Start");
createdStartDiv.className = "start";
createdStartDiv.textContent = "Start";

let createdEndDiv = createdStartDiv.cloneNode(true);
createdEndDiv.setAttribute("title", "End Element");
createdEndDiv.setAttribute("data-value", "End");
createdEndDiv.textContent = "End";
createdEndDiv.className = "end";

document.querySelector("p").remove();
document.querySelector("div.our-element").before(createdStartDiv);
document.querySelector("div.our-element").after(createdEndDiv);