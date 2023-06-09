// Задание 1 
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

const getCube = (num) => Math.pow(num, 3);

console.log('Задание 1');
let number = 2;
console.log(`${number} в кубе = ${getCube(number)}`);

number = 3;
console.log(`${number} в кубе = ${getCube(number)}`);

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

console.log('Задание 2');

const nalog = (sal) => sal * 0.87;

const salary = +prompt('Введите Вашу заработную плату:');
if (isNaN(salary)) {
    console.log('Введено неверное значение');
} else {
    console.log(`Размер заработной платы за вычетом налогов равен ${nalog(salary)}`);
}

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

console.log('Задание 3');

const maxNumber = (num1, num2, num3) => Math.max(num1, num2, num3);

const number1 = +prompt('Введите первое число:');
const number2 = +prompt('Введите второе число:');
const number3 = +prompt('Введите третье число:');

if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
    console.log('Введено неверное значение');
} else {
    console.log(`Максимальное из 3-х чисел: ${maxNumber(number1, number2, number3)}`);
}

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

const sumNumber = (num1, num2) => num1 + num2;
const differenceNumber = (num1, num2) => num1 > num2 ? num1 - num2 : num2 > num1 ? num2 - num1 : 0;
const multiplicationNumber = (num1, num2) => num1 * num2;
const divisionNumber = (num1, num2) => num1 / num2;

console.log(`Сумма чисел 2 и 7: ${sumNumber(2, 7)}`);

console.log(`Разность чисел 2 и 7: ${differenceNumber(2, 7)}`);
console.log(`Разность чисел 7 и 2: ${differenceNumber(7, 2)}`);
console.log(`Разность чисел 2 и 2: ${differenceNumber(2, 2)}`);

console.log(`Произведение чисел 2 и 7: ${multiplicationNumber(2, 7)}`);

console.log(`Частное чисел 2 и 7: ${divisionNumber(2, 7).toFixed(2)}`);

