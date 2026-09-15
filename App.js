const valider = document.querySelector("#valider");
const article = document.querySelector("#article");
const articles = document.querySelector("#articles");

valider.addEventListener("click", (e) => {
    e.preventDefault();
  
  const texte = article.value.trim();
  console.log("texte recup :", texte)
  if(texte!==""){
  const nouvelElement= document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type="checkbox";

  const label= document.createElement("label");

  const textArticle= document.createTextNode(texte);

  label.appendChild(checkbox);
  label.appendChild(textArticle);

  nouvelElement.appendChild(label);
  articles.appendChild(nouvelElement);

    artice.value= "";

}else{
    alert("Aucun article renseinger !!! ");
}
});