let x;
let y;
let symbol;
let z;
let decide = 0;

/*Limits output display to 10*/
function updateOutputNum(value){
    let outputNumInput = document.getElementById("outputNum");
    if(outputNumInput.value.length <= 9){
        outputNumInput.value += value;
    }
}

/*Clears both displays*/
function clearOutputNum(){
    document.getElementById("outputNum").value = "";
    document.getElementById("outputHistory").value = "";
}

/*Clears entry*/
function clearEntryOutputNum(){
    if(decide==0){
    document.getElementById("outputNum").value = "";
    document.getElementById("outputHistory").value = "";}
    else{
        document.getElementById("outputNum").value = "";
    }
}

/*Backspace function*/
function backspaceOutputNum(){
    let currentOutput = document.getElementById("outputNum").value;
    document.getElementById("outputNum").value = currentOutput.slice(0, -1);
}

/*Reverses the signs*/
function plusminusOutputNum(){
    let currentOutput = document.getElementById("outputNum").value;
    let numericValue = +currentOutput;
    document.getElementById("outputNum").value = -numericValue;
}

/*Checks which math symbol and calculates*/
function equalsOutputNum(){ 
    y = document.getElementById("outputNum").value;
    if(decide==1){
    z = Math.round(x/y*100)/100;}
    else if(decide==2){
        z = x*y;
    }else if(decide==3){
        z = x-y;
    }else if(decide==4){
        z = +x+ +y;
    }else{
        z = document.getElementById("outputNum").value;
    }
    document.getElementById("outputNum").value = z;
    document.getElementById("outputHistory").value += y+"=";
    decide = 0;
}

function div(){
    decide += 1;
    getX();
}

function multi(){
    decide += 2;
    getX();
}

function sub(){
    decide += 3;
    getX();
}

function add(){
    decide += 4;
    getX();
}

function power(){
    x = document.getElementById("outputNum").value;
    z = x*x;
    document.getElementById("outputNum").value = z;
    document.getElementById("outputHistory").value = "sqr("+x+")";
}

function sqrtrt(){
    x = document.getElementById("outputNum").value;
    z = Math.sqrt(x);
    z = z.toFixed(4);
    document.getElementById("outputNum").value = z;
    document.getElementById("outputHistory").value = "√("+x+")";
}

function overX(){
    x = document.getElementById("outputNum").value;
    z = 1/x;
    document.getElementById("outputNum").value = z;
    document.getElementById("outputHistory").value = "1/("+x+")";
}

/*Changes history input*/
function getX(){
    x = document.getElementById("outputNum").value.slice(0, -1);
    symbol = document.getElementById("outputNum").value;
    document.getElementById("outputHistory").value = x+symbol.slice(-1);
    document.getElementById("outputNum").value = "";
}