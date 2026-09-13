const valider = document.querySelector("#valider");
const message = document.querySelector("#message");
const article = document.querySelector("#article");

valider.addEventListener("click", () => {
  const texte = article.value;
  const nouvelElement= document.createElement("li");
  const checkbox = document.createElement("input");
  const articles = document.querySelector("#articles");
  checkbox.type="checkbox";

  const label= document.createElement("label");

  const textArticle= document.createTextNode(texte);

  label.appendChild(checkbox);
  label.appendChild(textArticle);

  nouvelElement.appendChild(label);
  articles.appendChild(nouvelElement);
  
});