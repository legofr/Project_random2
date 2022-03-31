

function Sends() {

    number1s = document.getElementById("number1").value;
    number2s = document.getElementById("number2").value;

    answer = parseInt("number1s") * parseInt("number2s");

    question = "<h4>"  + number1s + "x" + number2s + "</h4>";
    input_box = " <br> <p> Answer = </p> <input type='text' id= 'input_box' ";
    check_button = "<br> <br> <button class = ' btn btn-info' onclick = 'sendi()'> Check </button>"
    row = question + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1 ").value = "";
    document.getElementById("number2 ").value = "";

}