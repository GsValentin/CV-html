const valider = document.querySelector("#valider");
const message = document.querySelector("#message");

console.log(valider);

valider.addEventListener("click", () => {
  console.log("valider");
});

valider.addEventListener("click", ()=>{
  message.textContent = "Valider !!!";
})