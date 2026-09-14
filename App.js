const valider = document.querySelector("#valider");
const article = document.querySelector("#article");

valider.addEventListener("click", (e) => {
    e.preventDefault();
  
  const texte = article.value.trim();
  
  console.log("texte recup :", texte);
  
  if(text!==""){
  console.log("IF")
}else{
    console.log("Else")
}
});