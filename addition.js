alert("сложение числа a и числа b");            // вызво диалогового окна
let number1 = prompt("Введите число a: ");      // Создание переменных
let number2 = prompt("Введите число b: ");
number1 = Number(number1);                      // Перевод из str в int
number2 = Number(number2);
let conclusion = number1 + number2;
alert((number1) + '+' + (number2) + '=' + (conclusion));    //Вывод