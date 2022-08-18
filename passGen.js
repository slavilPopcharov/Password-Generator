const symbols = [":", ";", "<", "=", ">", "?", "!", "\", ",",#","$","%","&","'","(",")","*","+",",","-",".", ]
const lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// Users password choises
const lenghtElement = document.getElementById("len");
const upperCaseElement = document.getElementById("upper");
const lowerCaseElement = document.getElementById("lower");
const numbersElement = document.getElementById("numbers");
const symbolsElement = document.getElementById("symbols");

const outputElement = document.getElementById("pw");
const generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click", onGenerate);
const copyBtn = document.getElementById("copy");
copyBtn.addEventListener("click", onCopy);

function onGenerate(ev) {
  let useFuncs = []
  let output = ""
  if (upperCaseElement.checked) useFuncs.push(genUpperCaseLetter);
  if (lowerCaseElement.checked) useFuncs.push(genLowerCaseLetter);
  if (numbersElement.checked) useFuncs.push(genNums);
  if (symbolsElement.checked) useFuncs.push(genSymbols);
  if(useFuncs.length === 0) {
    return alert("Please choose the type/s of symbols you want your password to include");
  }

   for (let i = 0; i < Number(lenghtElement.value); i++) {  
    let index = [Math.floor(Math.random()*useFuncs.length)]
    let executeFunc = useFuncs[index]();
    output += executeFunc; 
   }
   
   outputElement.textContent = output;
   let checkBoxElements = [upperCaseElement, lowerCaseElement, numbersElement, symbolsElement]
   checkBoxElements.forEach(e => e.checked = false);
}
function onCopy(ev) {
  const textArea = document.createElement("textarea");
  textArea.value = outputElement.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
  alert("password copied to clipboard");
  outputElement.textContent = "Password Here"
}

//Generate functions
function genNums() {
  return Math.floor(Math.random()*10);  
}
function genSymbols() {
  return symbols[Math.floor(Math.random()*symbols.length)];
}
function genUpperCaseLetter() {
  return upperCaseLetters[Math.floor(Math.random()*upperCaseLetters.length)];
}
function genLowerCaseLetter() {
  return lowerCaseLetters[Math.floor(Math.random()*lowerCaseLetters.length)];
}


