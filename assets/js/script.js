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

let product = {
  amount: 34,
  productPrice: 20,
  productDiscount: 0.2,
};
product.amount =
  product.amount -
  (product.productPrice - product.productDiscount * product.productPrice);
console.log(product.amount);

//object
let portfolio = {
  name: "Omoifoh Mary",
  service: "software engineering",
  about: "where is my house",
  contact: 09070133324,
};
portfolio["portfolio.about"] = 23 + "a abbah johnson";
console.log(portfolio);

let schools = ["hta", "nnpc", "ppcc", "nndc"];
schools[3] = 9;
console.log(schools.length); // array
function myName() {
  console.log("my world");
}
