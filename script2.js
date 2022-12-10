let result;
let currNum = "";
let operation = [];
let screenEl = document.getElementById("display");
let type;

window.addEventListener("keydown", function (e) { //keyboard
  const key = document.querySelector(`button[data-key='${e.keyCode}']`);
  key.click();
});

function clearAll() {
  currNum = "";
  operation = [];
  screenEl.innerText = "0";
}

function del() {
  if (currNum != "") {
    currNum = currNum.slice(0, currNum.length - 1);
    screenEl.innerText = currNum;
  } else if (operation[0] != undefined) {
    operation[0] = String(operation[0]);
    operation[0] = operation[0].slice(0, operation[0].length - 1);
    screenEl.innerText = operation[0];
    operation[0] = Number(operation[0]);
  }
}

function float() {
  if (!currNum.includes(".")) {
    currNum += ".";
    screenEl.innerText = currNum;
  }
}

function button(num) {
  if (currNum.length <= 20) {
    currNum += num;
    screenEl.innerText = currNum;
  }
}

function opType(type) {
  if (operation[0] == undefined) {
    operation[0] = Number(currNum);
    operation[1] = type;
    currNum = "";
  } else {
    equal();
    operation[1] = type;
    currNum = "";
  }
}

function plusMinus() {
  if (currNum != "") {
    if (!currNum.includes("-")) {
      currNum = "-" + currNum;
    } else {
      currNum = currNum.slice(1, currNum.length);
    }
    screenEl.innerText = currNum;
  } else if (operation[0] != undefined) {
    operation[0] = String(operation[0]);
    if (!operation[0].includes("-")) {
      operation[0] = "-" + operation[0];
    } else {
      operation[0] = operation[0].slice(1, operation[0].length);
    }
    screenEl.innerText = operation[0];
    operation[0] = Number(operation[0]);
  }
}

function equal() {
  if(currNum == ""){
    return
  }
  else{
    operation[2] = Number(currNum);
    if (operation[1] == "/") {
      if (operation[2] == 0) {
        //error message
        screenEl.innerText = "thou art no more brain than stone";
        currNum = "";
        operation = [];
        result = null;
        return;
      } else {
        result = operation[0] / operation[2];
      }
    } else if (operation[1] == "*") {
      result = operation[0] * operation[2];
    } else if (operation[1] == "+") {
      result = operation[0] + operation[2];
    } else if (operation[1] == "-") {
      result = operation[0] - operation[2];
    }
    currNum = "";
    operation = [];
    operation[0] = result;
    if (("" + operation[0]).length <= 19) {
      screenEl.innerText = operation[0];
    } else {
      screenEl.innerText = operation[0].toFixed(19);
    }
    result = null;
  }
}