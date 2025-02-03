// function mario() {
//   getElementById("whatass").innerHTML = "in love i stand for ever";
// }

theme = () => {
  document.getElementById("lightmood").href = "assets/css/dark.css";
  document.getElementById("darkTheme").style.display = "none";
};

darkTheme = () => {
  document.getElementById("lightmood").href = "assets/css/light.css";

  document.getElementById("lightTheme").style.display = "";
};
const scrollup = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
