function clearCode(){
    document.getElementById("output").value = "";
}
function backspace(){
    let currentOutput = document.getElementById("output").value;
    document.getElementById("output").value = currentOutput.slice(0, -1);
}
function numCode(buttonValue) {
    document.getElementById("output").value += buttonValue;
}