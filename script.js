let firstNum = "";
let firstNumSwitch = false;
let secondNum = "";
let operator;
let screenEl = document.getElementById("display");

window.addEventListener("keydown", function (e) {
  //keyboard input
  const key = document.querySelector(`button[data-key='${e.keyCode}']`);
  key.click();
});

function clearAll() {
  firstNum = "";
  firstNumSwitch = false;
  secondNum = "";
  operator = null;
  secondOp = null;
  screenEl.innerText = "0";
}

function del() {
  if (firstNumSwitch) { 
    if (secondNum != "") {
      secondNum = secondNum.slice(0, secondNum.length - 1);
      screenEl.innerText = secondNum;
    }
    return;
  }
  if (firstNum != "") {
    firstNum = firstNum.slice(0, firstNum.length - 1);
    screenEl.innerText = firstNum;
  }
}

function float() {
  if (firstNumSwitch) {
    if (!secondNum.includes(".")) {
      secondNum += ".";
      screenEl.innerText = secondNum;
    }
    return;
  }
  if (!firstNum.includes(".")) {
    firstNum += ".";
    screenEl.innerText = firstNum;
  }
}

function button(num) {
  if (firstNum == "0" || secondNum == "0"){
    return;
  }
  if (firstNumSwitch) {
    if (secondNum.length <= 19) {
      secondNum += num;
      screenEl.innerText = secondNum;
    }
    return;
  }
  if (firstNum.length <= 19) {
    firstNum += num;
    screenEl.innerText = firstNum;
  }
}

function opType(opType) {
  if (firstNumSwitch) {
    equal();
    operator = opType;
  }
  operator = opType;
  firstNumSwitch = true;
}

function plusMinus() {
  if (firstNumSwitch) {
    if (secondNum != "") {
      if (!secondNum.includes("-")) {
        secondNum = "-" + secondNum;
      } else {
        secondNum = secondNum.slice(1, secondNum.length);
      }
      screenEl.innerText = secondNum;
    }
    
    return;
  }
  if (firstNum != "") {
    if (!firstNum.includes("-")) {
      firstNum = "-" + firstNum;
    } else {
      firstNum = firstNum.slice(1, firstNum.length);
    }
    screenEl.innerText = firstNum;
  }
}
function plusMinusBasic(firstOrSecond) {
  if (firstOrSecond != "") {
    if (!firstOrSecond.includes("-")) {
      firstOrSecond = "-" + firstOrSecond;
    } else {
      firstOrSecond = firstOrSecond.slice(1, firstOrSecond.length);
    }
  }
  screenEl.innerText = firstOrSecond;
}

function equal() {
  if (secondNum == "") {
    return;
  }
  switch(operator){
    case "/":
      if (secondNum == 0) {
        clearAll();
        screenEl.innerText = "thou art no more brain than stone";
        console.log("what?")
        return;
      } else {
        firstNum = Number(firstNum) / Number(secondNum);
      }
      break;
    case "*":
      firstNum = Number(firstNum) * Number(secondNum);
      break;
    case "+":
      firstNum = Number(firstNum) + Number(secondNum);
      break;
    case "-":
      firstNum = Number(firstNum) - Number(secondNum);
      break;
    default:
      break;
  }
  secondNum = "";
  if ((""+firstNum).includes(".")){
    screenEl.innerText = firstNum.toFixed(4);
  }
  else {
    screenEl.innerText = firstNum;
  }
}
