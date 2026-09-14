const valider = document.querySelector("#valider");
const article = document.querySelector("#article");

valider.addEventListener("click", (e) => {
    e.preventDefault();
  
  const texte = article.value.trim();
  if(text!==""){
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

    artice.value= ""

}else{
    alert("Aucun article renseinger !!! ")
}
});