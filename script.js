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
function calculate (){
    try{
        const result = new Function ('return ' + display.value)();
        display.value = result.toString();
    } catch(error){
        display.value = "Error";
    }
}