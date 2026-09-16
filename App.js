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
  const span= documment.createElement("span");

  checkbox.addEventListener("change", ()=> {
    if (checkbox.checked){
      span.classlist.add("termine");
    }else{
      span.classlist.remove("termine");
    }
  });
    
  label.appendChild(checkbox);
  label.appendChild(span);

  nouvelElement.appendChild(label);
  articles.appendChild(nouvelElement);

    article.value= "";

}else{
    alert("Aucun article renseinger !!! ");
}
  checkbox.addEventListener("change", ()=> {
    
  })
});