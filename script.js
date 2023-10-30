const mob = document.getElementById("mob");
const header = document.getElementsByTagName("header")[0];
// const mobNav = document.querySelector(".mob-nav");

mob.addEventListener("click", () => {
  header.classList.toggle("mob-nav");
});
