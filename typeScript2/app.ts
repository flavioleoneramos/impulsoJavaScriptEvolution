let button = document.getElementById("button");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

function somar(num1,num2){
  return num1 + num2;
}

button?.addEventListener("click", () => {
  console.log(somar(input1,input2));
})