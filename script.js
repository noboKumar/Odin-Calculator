const display = document.getElementById("display");

//display
function appendToDisplay(value){
    if (display.value === '0' && value !== '.'){
        display.value = value; // to display 0
    } else{
        display.value += value;
    }
}

//clear display
function clearDisplay(){
    display.value = "0";
}

//delete single input
function del(){
    if (display.value.length > 1){
        display.value = display.value.slice(0, -1);
    } else {
        display.value ="0";
    }
}

//calculation function 
function calculate(){
    try {
        if (display.value.includes("+")){
            add();
        } else if (display.value.includes("-")){
            subtract();
        } else if (display.value.includes("*")){
            multiply();
        } else if (display.value.includes("/")){
            divide();
        } else if(display.value.includes("%")){
            modules()
        } else {
            throw new Error ("Invalid expression");
        }
    } catch (error){
        display.value = "Error";
    }
}

//operator function
function add(){
    const [num1, num2 ] = display.value.split("+").map(Number);
    display.value = (num1 + num2).toString();
}

function subtract(){
    const [num1, num2 ] = display.value.split("-").map(Number);
    display.value = (num1 - num2).toString();
}

function multiply(){
    const [num1, num2 ] = display.value.split("*").map(Number);
    display.value = (num1 * num2).toString();
}

function divide(){
    const [num1, num2 ] = display.value.split("/").map(Number);
    if (num2 === 0){
        throw new Error ("Math Error");
    } else {
        display.value = (num1 / num2).toString();
    }
}

function modules(){
    const [num1, num2 ] = display.value.split("%").map(Number);
    display.value = (num1 % num2).toString();
}