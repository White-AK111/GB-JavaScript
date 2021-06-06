"use strict";

/*
______________________________________________________________________

1.
(это задание делайте по желанию) Написать функцию, преобразующую число в объект. Передавая на
вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)
Например, для числа 45 мы должны получить следующий объект:
{
units: 5, //это единицы
tens: 4, //это десятки
hundreds: 0, //это сотни
}
Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
Вам может пригодиться:

Number.isInteger(value) – функция проверяет, является ли переданное число целым, подробнее здесь
https://mzl.la/2XCVSsx

Math.floor(value) - метод возвращает целое число, которое меньше или равно данному числу (проще
говоря округляет в меньшую сторону), подробнее здесь https://mzl.la/2Qx42SO .

Используйте также остаток от деления на 10, например 123 % 10 будет 3

Вам также может пригодится делить число на 100 и на 10
______________________________________________________________________
*/

//сделал через класс, т.к класс в JS это разновидность функции
//изначально свойства объекта класса заполняем дефолтными значениями 0
class NumObj {
    constructor() {
        this.num = 0;
        this.units = 0;
        this.tens = 0;
        this.hundreds = 0;
    }

    //описываем геттер, будет возвращать в консоль свойства объекта
    get dischargesValue() {
        return console.log(`${this.num} - число\n${this.units} - единицы\n${this.tens} - десятки\n${this.hundreds} - сотни\n`);
    }

    //описываем сеттер, будет заполнять свойства объекта (разряды), либо выводить ощибку в консоль
    set dischargesValue(num) {
        //можно было через цикл для неограниченного интервала значений, но напишем так для наглядности
        //проверяем что это число и число в интервале от 0 до 100 и число является целым
        //если да, то заполняем свойства разрядов, иначе выводим ошибку в консоль
        if (Number.isFinite(num) && (num >= 0 && num < 1000) && (Number.isInteger(num))) {
            //заполняем свойство исходного числа
            this.num = num;
            //временная переменная для расчётов
            let numRegress = num;

            //вычисляем значение сотен, делим на 100, если > 0, то заполняем свойство hundreds округляя результат деления
            //забираем остаток от деления во временную переменную 
            if ((numRegress / 100) > 0) {
                this.hundreds = Math.floor(numRegress / 100);
                numRegress = Math.floor(numRegress % 100);
            }

            //вычисляем значение десятков, делим на 10, если > 0, то заполняем свойство tens округляя результат деления
            //забираем остаток от деления в свойство units округляя результат деления
            //если < = 0, значит это уже единицы, возвращаем в свойство units
            if ((numRegress / 10) > 0) {
                this.tens = Math.floor(numRegress / 10);
                this.units = Math.floor(numRegress % 10);
            } else {
                this.units = numRegress;
            }
        } else {
            console.log("Операцию разложения на разряды можно проводить только с целыми числами от 0 до 999.");
            return new NumObj();
        }
    }
}

//вызов через set и get, в данном контексте, выглядит крипово, как и реализация ООП в JS для меня, но хотелось их пощупать
let testNum = new NumObj();
testNum.dischargesValue = 459;
testNum.dischargesValue;

/*
______________________________________________________________________
1.1.
(это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных
видео -> 3 примеры наследования -> типы на es5 и es6), конструктор Product, который принимает параметры name
и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод
make25PercentDiscount, который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод
make25PercentDiscount не должен быть внутри функции-конструктора, и также не нужно создавать отдельный
объект-прототип (как объект transport в уроке).
______________________________________________________________________
*/

//ES5
function ProductES5(name, price) {
    this.name = name;
    this.price = price;
}

ProductES5.prototype.make25PercentDiscount = function() {
    this.price = this.price - (this.price * 0.25);
}

let product1 = new ProductES5("Сатива", 1500);
console.log(`${product1.name} цена без скидки: ${product1.price}`);
product1.make25PercentDiscount();
console.log(`${product1.name} цена со скидкой: ${product1.price}`);

//ES6
class ProductES6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price - (this.price * 0.25);
    }
}

let product2 = new ProductES6("Индика", 1000);
console.log(`${product2.name} цена без скидки: ${product2.price}`);
product2.make25PercentDiscount();
console.log(`${product2.name} цена со скидкой: ${product2.price}`);

/*
______________________________________________________________________
1.2.
(это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных
видео -> 3 примеры наследования -> механика наследования),
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты
типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с
помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться
свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
highlighted значение true.
______________________________________________________________________
*/

//ES5
function PostES5(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

PostES5.prototype.edit = function(editedText) {
    this.text = editedText;
}

function AttachedPostES5(author, text, date) {
    PostES5.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPostES5.prototype = Object.create(PostES5.prototype);
AttachedPostES5.prototype.constructor = AttachedPostES5;

AttachedPostES5.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
}

let comment1 = new AttachedPostES5("Андрей", "С причала рыбачил я.", "01.06.2021");
console.log(`Автор: ${comment1.author}; Текст: ${comment1.text}; Дата: ${comment1.date}; Выделения: ${comment1.highlighted}`);
comment1.edit("А спаситель ходил по воде.");
comment1.makeTextHighlighted();
console.log(`Автор: ${comment1.author}; Текст: ${comment1.text}; Дата: ${comment1.date}; Выделения: ${comment1.highlighted}`);

//ES6
class PostES6 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(editedText) {
        this.text = editedText;
    }
}

class AttachedPostES6 extends PostES6 {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let comment2 = new AttachedPostES6("Пётр", "Ехал на тракторе к границе.", "02.06.2022");
console.log(`Автор: ${comment2.author}; Текст: ${comment2.text}; Дата: ${comment2.date}; Выделения: ${comment2.highlighted}`);
comment2.edit("Не смог.");
comment2.makeTextHighlighted();
console.log(`Автор: ${comment2.author}; Текст: ${comment2.text}; Дата: ${comment2.date}; Выделения: ${comment2.highlighted}`);