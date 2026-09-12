const valider = document.querySelector("#valider");
const message = document.querySelector("#message");
const article = document.querySelector("#article");
console.log(valider);

valider.addEventListener("click", () => {
  console.log("valider");
});

valider.addEventListener("click", ()=>{
  const texte = article.value;
  message.textContent = texte;
})