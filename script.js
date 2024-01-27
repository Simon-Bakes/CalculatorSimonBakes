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

function equalsOutputNum(){
    try{
    document.getElementById("outputNum").value = eval(document.getElementById("outputNum").value);
    }
    catch(error){
        document.getElementById("outputNum").value = "Error";
    }
}