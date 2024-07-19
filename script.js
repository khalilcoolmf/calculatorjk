document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("resText").innerHTML = "0";

});
function appendNumber(number) {
    let resText = document.getElementById("resText");
    if (resText.innerText === "0" || resText.innerText === "Error") {
        resText.innerText = number;
    } else {
        resText.innerText += number;
    }
}


function appendOperator(operator) {
    let resText = document.getElementById("resText");
    let lastChar = resText.innerText.slice(-1);

    
    if (["+", "-", "*", "/"].includes(lastChar)) {
        return;
    }

    if (resText.innerText !== "0" && resText.innerText !== "Error") {
        resText.innerText += operator;
    }
}

ß
function calculateResult() {
    let resText = document.getElementById("resText");
    try {
        let expression = resText.innerText.replace("×", "*").replace("÷", "/");
        let result = eval(expression);
        resText.innerText = result;
    } catch (error) {
        resText.innerText = "Error";
    }
}


function clearDisplay() {
    document.getElementById("resText").innerText = "0";
}


function deleteLast() {
    let resText = document.getElementById("resText");
    if (resText.innerText.length > 1) {
        resText.innerText = resText.innerText.slice(0, -1);
    } else {
        resText.innerText = "0";
    }
}