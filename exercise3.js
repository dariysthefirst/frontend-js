
var firstNumber = prompt("Введіть перше число:");


if (isNaN(firstNumber)) {
    alert("Ви ввели неправильне значення. Будь ласка, введіть число.");
} else {
    var secondNumber = prompt("Введіть друге число:");

    if (isNaN(secondNumber)) {
        alert("Ви ввели неправильне значення. Будь ласка, введіть число.");
    } else {
        firstNumber = parseFloat(firstNumber);
        secondNumber = parseFloat(secondNumber);
        
        var sum = firstNumber + secondNumber;
        var difference = firstNumber - secondNumber;
        var product = firstNumber * secondNumber;
        var quotient = firstNumber / secondNumber;

        alert(
            "Результати:\n" +
            "Сума: " +
            sum +
            "\nРізниця: " +
            difference +
            "\nДобуток: " +
            product +
            "\nЧастка: " +
            quotient
        );
    }
}