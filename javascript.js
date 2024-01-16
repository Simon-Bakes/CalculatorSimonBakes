let x;
let y;

function part1(){
    x = document.getElementById("output").value;
    document.getElementById("output").value = "";
}
function part2(){
    let z = x*y;
    document.getElementById("output").value = +z;
}
function equalsCode(){
    y = document.getElementById("output").value;
    part2();
}
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