function updateOutputNum(value){
    let outputNumInput = document.getElementById("outputNum");
    if(outputNumInput.value.length <= 9){
        outputNumInput.value += value;
    }
}

function clearOutputNum(){
    document.getElementById("outputNum").value = "";
}

function backspaceOutputNum(){
    let currentOutput = document.getElementById("outputNum").value;
    document.getElementById("outputNum").value = currentOutput.slice(0, -1);
}

function plusminusOutputNum(){
    let currentOutput = document.getElementById("outputNum").value;
    let numericValue = +currentOutput;
    document.getElementById("outputNum").value = -numericValue;
}

let x;
let y;
let symbol;
let z;
let decide = 0;

function equalsOutputNum(){ 
    y = document.getElementById("outputNum").value;
    if(decide==1){
    z = Math.round(x/y*100)/100;}
    else if(decide==2){
        z = x*y;
    }else if(decide==3){
        z = x-y;
    }else{
        z = +x+ +y;
    }
    document.getElementById("outputNum").value = z;
    document.getElementById("outputHistory").value += y+"=";
}

function div(){
    decide += 1;
    x = document.getElementById("outputNum").value.slice(0, -1);
    symbol = document.getElementById("outputNum").value;
    document.getElementById("outputHistory").value = x+symbol.slice(-1);
    document.getElementById("outputNum").value = "";
}

function multi(){
    decide += 2;
    x = document.getElementById("outputNum").value.slice(0, -1);
    symbol = document.getElementById("outputNum").value;
    document.getElementById("outputHistory").value = x+symbol.slice(-1);
    document.getElementById("outputNum").value = "";
}

function sub(){
    decide += 3;
    x = document.getElementById("outputNum").value.slice(0, -1);
    symbol = document.getElementById("outputNum").value;
    document.getElementById("outputHistory").value = x+symbol.slice(-1);
    document.getElementById("outputNum").value = "";
}

function add(){
    x = document.getElementById("outputNum").value.slice(0, -1);
    symbol = document.getElementById("outputNum").value;
    document.getElementById("outputHistory").value = x+symbol.slice(-1);
    document.getElementById("outputNum").value = "";
}