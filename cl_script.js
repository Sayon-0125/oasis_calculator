const display=document.getElementById("display");
const displayKeys=['0','1','2','3','4','5','6','7','8','9','+','-','*','/','.']
const operators=['+','-','/','*'];
let calculated= false;
document.addEventListener('keypress', function(event){
    if(displayKeys.includes(event.key))  toDisplay(event.key);
    else if(event.key=='Enter' || event.key=='=')  calculate();
    else if(event.key=='c') clearDisplay();
})
function toDisplay(c){
    if(operators.includes(c) && calculated){
        calculated=false;
    }
    if(calculated){
        clearDisplay();
        calculated=false;
    } 
    if(display.value=="Error") display.value="";
    if(display.value=="0") display.value="";
    display.value+= c;
}

function clearDisplay(){
    display.value="0";
}

function calculate(){
    try{
        display.value= eval(display.value);
        calculated=true;
    }
    catch(error){
        display.value= "Error";
    }    
}
