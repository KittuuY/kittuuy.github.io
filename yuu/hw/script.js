a = 0;
function show() {
  switch (a) {
    case 0:
      document.getElementById("text").innerHTML = "Loading...";
      a = 1;
      break;

    case 1:
      document.getElementById("text").innerHTML = "Almost there!";
      a = 2;

      break;
    case 2:
      document.getElementById("text").innerHTML = "Web page has been loaded!";
      a = 3;

      break;
    case 3:
      document.getElementById("text").innerHTML = "";
      a = 0;
      break;
  }
  /*if (a){
  document.getElementById("text")
  .innerHTML  = "searching...";
  a = false;
}else{
  document.getElementById("text").innerHTML = ""
  a = true;
}*/
}
let name = prompt("What is you cat's name?");
let words = 0;
if (name == "cutie pie") {
  words = "Welcome, " + name + "!";
} else {
  words = "Nice to meet you " + name;
}
document.getElementById("hello").innerHTML = words;
console.log(name.length);
let namesome = "My name is Yuu";
name2 = namesome.indexOf("name");
console.log(name2);
nomnom = "1. Alvin 2. Yuu 3. Kirthie 4. Kaifeng";
yumyum = nomnom.split(" ");
console.log(yumyum);
for (let i = 0; i < 5; i++) {
  let a = yumyum.indexOf(i.toString() + ".");
  console.log(a);
  if (a != -1) {
    yumyum.splice(a, 1);
  }
}
console.log(yumyum);
math = "Mathemathics";
math = math.toLowerCase();
math2 = math.toUpperCase();
console.log(math.indexOf("math"));
console.log(math.lastIndexOf("math"));
console.log(math);
console.log(math2);
function play(a) {
  let playerChoice = a;
  let rps = Math.floor(Math.random() * 3);
  /*if (rps == 0) {
    console.log("Rock");
  }
  if (rps == 1) {
    console.log("Paper");
  }
  if (rps == 2) {
    console.log("Scissors");
  }*/
  rps == 0 ? (rps = "Rock") : rps == 1 ? (rps = "Paper") : (rps = "Scissors");
  console.log("AI Choice" + rps);
  console.log("playerchoice:" + playerChoice);
  // playerChoice == rps
  //   ? console.log("TIE")
  //   : playerChoice == "Rock" && rps == "Paper"
  //   ? console.log("LOSE")
  //   : playerChoice == "Paper" && rps == "Scissors"
  //   ? console.log("LOSE")
  //   : playerChoice == "Scissors" && rps == "Rock"
  //   ? console.log("LOSE")
  //   : console.log("WIN");
  document.getElementById("h3").innerHTML =
    "AI Choice:" + rps + "<br>" + "playerchoice:" + playerChoice;
  document.getElementById("h2").innerHTML =
    playerChoice == rps
      ? "TIE"
      : playerChoice == "Rock" && rps == "Paper"
      ? "LOSE"
      : playerChoice == "Paper" && rps == "Scissors"
      ? "LOSE"
      : playerChoice == "Scissors" && rps == "Rock"
      ? "LOSE"
      : "WIN";
}
