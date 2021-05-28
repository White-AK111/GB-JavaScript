"use strict";

/*
______________________________________________________________________

1. С помощью цикла for написать алгоритм для вывода чисел (выводите в консоль, с помощью console.log) от 0 до 10
включительно, чтобы результат выглядел так:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
Для решения этой задачи используйте остаток от деления на 2, подробнее здесь
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
______________________________________________________________________
*/

//выводим чётные\нечётные, поное ветвление
for (let i = 0; i <= 10; i++) {
    if (i == 0) {
        console.log(`${i} - это ноль`)
    } else if (i % 2 == 0) {
        console.log(`${i} - четное число`)
    } else {
        console.log(`${i} - нечетное число`)
    }
}

/*
______________________________________________________________________
2. Выведите в консоль значения, указанные рядом с комментариями:
______________________________________________________________________
*/

const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [{
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

//author: "John"
console.log(post.author);
//dislikes: 2
console.log(post.comments[0].rating.dislikes);
//userId: 5
console.log(post.comments[1].userId);
//text: "lorem ipsum 2"
console.log(post.comments[1].text);

/*
______________________________________________________________________
3. Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку
15%, можете использовать метод forEach https://mzl.la/1AOMMWX :
______________________________________________________________________
*/

const productsTask3 = [{
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

//добавляем свойство discount каждому объекту в массиве

//вариант 1, для ES6 через forEach
productsTask3.forEach(function(product) {
    product.discount = 15;
})

//выводим в консоль
productsTask3.forEach(function(product) {
    console.log(product);
})

//вариант 2, через map
productsTask3.map(product => ({...product, discount: 15 }))

//выводим в консоль
for (let i = 0; i < productsTask3.length; i++) {
    console.log(productsTask3[i])
}

/*
______________________________________________________________________
4. Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
1 Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
2 Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort
https://mzl.la/2Y79hbZ , как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0 или в
дополнительных видео в материалах урока.
______________________________________________________________________
*/

//немного увеличил выборку для теста
const productsTask4 = [{
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
    {
        id: 11,
        price: 10,
        photos: [
            "6.jpg"
        ]
    },
    {
        id: 1,
        price: 666,
        photos: [
            "666.jpg"
        ]
    },
    {
        id: 64,
        price: 3,
    },
];

/*
фильтруем исходный массив объектов, получаем на выходе массив объектов содержащих не пустое свойство photos
проверяем есть ли свойство photos у объекта и что количество элементов в данном свойстве(массиве) > 0
*/
const filteredProductsTask4 = productsTask4.filter(product => (product.hasOwnProperty('photos') && product.photos.length > 0));

//функция сравнения по свойству price
function compareNumbers(a, b) {
    return a.price - b.price;
}

//сортируем отфильтрованный массив объектов по свойству price, в порядке возрастания с использованием функции compareNumbers
const sortProductsTask4 = filteredProductsTask4.sort(compareNumbers)

//выводим в консоль
sortProductsTask4.forEach(function(product) {
    console.log(product);
})

/*
______________________________________________________________________
5. (По желанию, т.к. такая особенность практически не используется) Вывести с помощью цикла for числа от 0 до 9,
НЕ используя тело цикла. То есть выглядеть должно примерно так:
for(…){/ здесь пусто /}
Помните, что в первом, втором и третьем раздела цикла можно не только писать условия, или увеличивать счетчик
например на 1, допустимы любые выражения, например вызовы функций.
______________________________________________________________________
*/

//вызываем вывод в консоль перед инкрементом счётчика
for (let i = 0; i < 10; console.log(i), i++);

/*
______________________________________________________________________
6. Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
только у вашей горки должно быть 20 рядов, а не 5:
______________________________________________________________________
*/

//при каждой итеррации цикла дополняем строку на один "х"
let printString = "x";
for (let i = 0; i < 20; i++) {
    console.log(printString);
    printString += "x";
}