"use strict";

// Числа

let number = 5;

console.log(4/0);
console.log('string' * 10);

// Строки

const persone = 'Nikita';
let famali = 'Anna and Nikita';

// Логика

const bool = true; //false

// Объекты

const obj = {   //Объект
    name: 'Nikitosina',     //Свойство объекта
    age: 26,                //Свойство объекта
    isMarried: false        //Свойство объекта
};

console.log(obj.name); //Обращение к свойствам объекта через точку
console.log(obj['age']); //Обращение через скобки, почти не применяется

let arr = ['pineapple.jpg', 'cherry.bmp', 'orange.gif', 32, {}, []];
console.log(arr[3]);

const razdel = ('sumki');
console.log(`http//mysite.ru/${razdel}/3`);

alert('hi');

//Условия

const num = 60;

if (num < 59) {
    console.log('Error');
} else if (num > 100) {
    console.log('Дохуя');
} else {
    console.log('Самое то');
}

(num == 60) ? console.log('Самое то') : console.log('Error'); 

switch (num) {
    case 50: 
        console.log('Error');
        break;
    case 60: 
        console.log('Огонь');
        break;
    default: 
        console.log('Не сейчас');
        break;
}


//Циклы

let num2 = 50;

while (num2 < 55) {
    console.log(num2);
    num2++;
}

do {
    console.log(num2);
    num2++;
} while (num2 < 55);

for (let i = 1; i < 10; i++) { //наиболее распространено 
    if (i === 6) {
        continue;   //break - завершает выполнение цикла, 
        //continue - пропускает одну итерацию
    }
    console.log(i);
}

//вывод простых чисел от 2 до n
let n = 10;                             
primeChet:                                  //метка цикла
for (let i = 2; i <= n; i++) {                

    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue primeChet; //возвращаемся на следующую итерацию 
                                            //цикла после метки
    }
    console.log(i);
}

//Функции

function newFunction(argument) {
    console.log(argument);
    let vari = 30;        //переменная внутри функции
}

console.log(vari);        //снаружи функции JSHINT выдает ошибку

newFunction('Сосиски');

function calc(a, b) {
    return (a + b);   //возвращает сумму аргументов
}

console.log(calc(2, 3)); //5
console.log(calc(4, 5)); //9

//Методы и свойства

const strTest = "Здравствуй, Дибилушка!";
console.log(strTest.slice(12, 22));  //Дибилушка! вырезаем часть строки     (МЕТОД)
console.log(strTest.length);   //22   длина строки     (СВОЙСТВО)
console.log(strTest.toUpperCase());  //ЗДРАВСТВУЙ, ДИБИЛУШКА!

const numTest = 15.1;
console.log(Math.round(numTest)); //15 округление с помощью библиотеки Math
const sizeTest = "22.5px";
console.log(parseFloat(sizeTest)); //22.5