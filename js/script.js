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
