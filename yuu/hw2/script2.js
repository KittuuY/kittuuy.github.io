let name2 = prompt("What is your cat's name?");
length = name2.length;
for (let i = 0; i < length; i++) {
  console.log(name2[i]);
}

let Monday = {
  breakfast: "cereal",
  lunch: "sandwiches",
  dinner: "pasta",
};
let Tuesday = {
  breakfast: "nothing",
  lunch: "something",
  dinner: "more pasta",
};
function meals({ breakfast, lunch, dinner }) {
  console.log(breakfast, lunch, dinner);
}
meals(Monday);
