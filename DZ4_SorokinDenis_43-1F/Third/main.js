
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("inputButton");

    button.addEventListener("click", function() {
        const userInput = prompt("Введите цвет (Красный, Желтый, Зеленый)").toLowerCase();

        const redLight = document.getElementById('red');
        const yellowLight = document.getElementById('yellow');
        const greenLight = document.getElementById('green');
        const message = document.getElementById('message');

        redLight.style.backgroundColor = "gray";
        yellowLight.style.backgroundColor = "gray";
        greenLight.style.backgroundColor = "gray";

        message.innerText = "";
        message.style.color = "black";

        if (userInput === "красный") {
            redLight.style.backgroundColor = "red";
            message.innerText = "STOP";
            message.style.color = "red";
        } else if (userInput === "желтый") {
            yellowLight.style.backgroundColor = "yellow";
            message.innerText = "WAIT";
            message.style.color = "yellow";
        } else if (userInput === "зеленый") {
            greenLight.style.backgroundColor = "green";
            message.innerText = "GO";
            message.style.color = "green";
        } else {
            message.innerText = "Неверный ввод!";
        }
    });
});
