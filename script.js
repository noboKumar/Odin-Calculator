const display = document.getElementById("display");


function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value = ""
}
function del(){
    display.value = display.value.slice(0, -1);
}
function calculate(){
    const expression = display.value;
    const correctedExpression = expression.replaceAll('÷', '/').replaceAll('x', '*').replaceAll('%', '/100');
}