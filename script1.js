const red = document.querySelector ('#red')
const parent= document.querySelector ('#parent')
red.addEventListener("click", () => {
  parent.style.display="none";
});
