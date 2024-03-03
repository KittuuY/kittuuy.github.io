a = 0;
function show() {
switch (a){

case 0:
  document.getElementById("text").innerHTML = "Loading..."
  a = 1;
  break;

  case 1:
    document.getElementById("text").innerHTML = "Almost there!"
    a = 2

    break;
  case 2:
    document.getElementById("text").innerHTML = "Web page has been loaded!"
    a = 3
    
    break;
  case 3:
    document.getElementById("text").innerHTML = ""
    a = 0
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
let name = prompt("What is you cat's name?")
let words = 0;
if (name == 'cutie pie'){
    words = ("Welcome, "+name+ "!")
   }
else
    words = ("Nice to meet you, "+name+ "!")
    }
document.getElementById("hello").innerHTML = words;
