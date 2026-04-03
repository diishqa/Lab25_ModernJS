// console.log("\n=== Деструктуризация массивов ===");
// const colors = ["red", "green", "blue"];
// const color1 =colors[0];
// const color2 = colors[1];
// console.log(color1, color2);
// const [firstColor, secondColor, thirdColor] = colors;
// console.log(firstColor, secondColor, thirdColor);
// const [primary, , tertiary] = colors;
// console.log(primary, tertiary);
// const [c1, c2, c3, c4 = "yelow"] = colors;
// console.log(c4);
// console.log("Деструктуризация объектов");
// const user = {
//     name: "Диана",
//     age: 18,
//     city: "Волжский",
// };
// const userName=user.name;
// const userAge = user.age;
// console.log(userName, userAge);
// const {name, age, city} = user;
// console.log(name, age, city);
// const { name: fullName, age: years} = user;
// console.log(personName, country);
// function printUserOld(user) {
//     console.log(`Имя: ${user.name}`);
//     console.log(`Возраст: ${user.age}`);
//     console.log(`Город: ${user.city}`);
// }
// function printUser ({name, age, city}) {
//     console.log(`Имя: ${name}`);
//     console.log(`Возраст: ${age}`);
//     console.log(`Город: ${city}`);
// }
// printUserOld(user);
// console.log();
// printUser(user);
// console.log("Деструктуризация объектов");
// const product = {
//     name: "Кошелек",
//     price: 500,
//     category: "Вещь",
//     inStock: true,
// };
// const {name, price, category, inStock} = product;
// console.log("Извлеченные свойства:", name, price, category, inStock);
// function printProduct ({name, price, category, inStock}) {
//     console.log(`Товар: ${name}`);
//     console.log(`Цена: ${price}`);
//     console.log(`Категория: ${category}`);
//     console.log(`В наличии: ${inStock ? "Да" : "Нет"}`);
// }
// printProduct(product);
// console.log("Spread для массивов");
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = [...arr1, ...arr2];
// console.log("Объединенный массив:", combined);
// const copy = [...arr1];
// console.log("Копия массива:", copy);
// const extended = [0, ...arr1, 7, 8];
// console.log("Расширенный массив:", extended);
// console.log("Spread для объектов");
// const person = {
//     name: "Динара",
//     age: 18,
// };
// const address = {
//     sity: "Санкт-Петербург",
//     street: "Невский проспект",
// };
// const fulInfo = {...person, ...address};
// console.log("Полная информация:", fulInfo);
// const personCopy = {...person};
// console.log("Копия объекта:", personCopy);
// const updated = {...person, age: 31, occupation: "Developer"};
// console.log("Rest оператор");
// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }
// console.log("Сумма 1,2,3:", sum(1, 2, 3));
// console.log("Сумма 1,2,3,4,5:", sum(1, 2, 3, 4, 5));
// const numbers = [10, 20, 30, 40, 50];
// const [first, second, ...rest] = numbers;
// console.log("Первое число:", first);
// console.log("Второе число:", second);
// console.log("Остальные число:", rest);
// const numbers1 = [1, 2, 3];
// const numbers2 = [4, 5, 6];
// const combined = [...numbers1, ...numbers2];
// console.log("Объединённый массив:", combined);
// function findMax(...numbers) {
//     return Math.max(...numbers);
// }
// console.log("Максимум из 1,2,3:", findMax(1, 2, 3));
// console.log("Максимум из 10,20,30,40:", findMax(10, 20, 30, 40));
// const n1 = { a: 1, b: 2 };
// const n2 = { c: 3, d: 4 };
// const ob = { ...n1, ...n2 };
// console.log("Объединённый объект:", ob);
// import {greet, add, PI} from "./utils.js";
// console.log("Модули");
// console.log(greet("Диана"));
// console.log("5 + 3=", add(5, 3));
// console.log("Значение PI:", PI);
// import { multiply as умножить} from "./utils.js";
// console.log("4 * 7=", умножить(4, 7));
// import * as Utils from "./utils.js";
// console.log(Utils.greet("Динара"));
// console.log("Умножить:", Utils.multiply(3,9));
// import {square, cube, E} from './math.js';
// console.log("Квадрат числа 5:", square(5));
// console.log("Куб числа 3:", cube(3));
// console.log("Константа E:", E);
console.log("Промисы");
const simplePromise = new Promise ((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("Операция выполнена успешно!");
    } else {
        reject("Произошла ошибка!")
    }
});
simplePromise
    .then((result) => console.log("Результат:", result))
    .catch((error) => console.log("Ошибка:", error));
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Прошло ${ms} миллисекунд`);
        }, ms);
    });
}
delay(1000)
    .then((message) => console.log(message));
// function fetchUserData(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (userId >0) {
//                 resolve({
//                     id: userId,
//                     name: "Диана Кузьмина",
//                     email: "adasdas@mail.com",
//                 });
//             } else{
//                 reject("Неверный ID пользователя");
//             }
//         }, 1500)
//     })
// }
// fetchUserData(1)
//     .then((user) => console.log("Пользователб:", user))
//     .catch((error) => console.log("Ошибка:", error));
// function step1() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve ("Шаг 1 завершен"), 500);
//     });
// }
// function step2(previousResult) {
//     return new Promise((resolve) => {
//         setTimeout(()=> resolve(`${previousResult} -> Шаг 2 завершен`), 500);
//     });
// }
// function step3 (previousResult) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(`${previousResult} -> Шаг 3 завершен`), 500);
//     });
// }
// step1()
//     .then((result1) => step2(result1))
//     .then((result2) => step3(result2))
//     .then((finalResult) => console.log("Финальный результат:", finalResult))
//     .catch((error) => console.log("Ошибка в цепочке:", error));
// function checkInventory(productName, inStock) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(inStock) {
//                 resolve(`ТОвар ${productName} в наличии`);
//             } else {
//                 reject(`Товар ${productName} не в наличии`);
//             }
//         }, 1000)
//     })
// }
// checkInventory("Кошелек", true)
//     .then((message) => console.log("В наличии:", message))
//     .catch((error) => console.log("Ошибка:", error));

// 25
// console.log("Async/Await");
// async function greet() {
//     return "Привет!"
// }
// greet().then((message) => console.log(message));
// function getWeather() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve( {temp: 22, condition: "Солнечно"});
//         }, 1000);
//     });
// }
// async function showWeather() {
//     console.log("Загрузка погоды...");
//     const weather = await getWeather();
//     console.log(`Температура: ${weather.temp}C, ${weather.condition}`);
// };
// showWeather();
// async function fetchData(shouldFail) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (shouldFail) {
//                 reject("Ошибка при загрузке данных");
//             } else {
//                 resolve( {dara: "Важные данные"});
//             }
//         }, 800);
//     });
// }
// async function getData() {
//     try {
//         const result = await fetchData(false);
//         console.log("Успешно:", result.data);
//         const failResult = await fetchData(true);
//         console.log("Это не выполнится");
//     } catch (error) {
//         console.log("Поймана ошибка:", error);
//     }
// }
// getData();

// async function cookDiner() {
//     console.log("Начинаем готовить...");
//     const pasta = await delay(1000).then(() => "Паста готова");
//     console.log(pasta);
//     const sauce = await delay(500). then(() => "Соус готов");
//     console.log(sauce);
//     const salad = await delay(700).then(() => "Салат готов");
//     console.log(salad);
//     return "Ужин готов!";
// }
// cookDiner().then((result) => console.log(result));
// async function  cookDinerFast() {
//     console.log("Готовим все одновременно...");
//     const [pasta, sauce, salad] = await Promise.all([
//         delay(1000).then(() => "Паста готова"),
//         delay(500).then(() => "Соус готов"),
//         delay(700).then(() => "Салат готов"),
//     ]);
//     console.log(pasta, sauce, salad);
//     return "Ужин готов быстрее!";
// } 


// cookDinerFast().then((result) => console.log(result));
// async function processOrder() {
//     try {
//         const inStock = await processOrder(false);
//         console.log("В наличии:", result.data);
//         const price = await processOrder();
//         console.log("Расчет");
//         const pod = await processOrder(true);
//         console.log("Подтверждение закказа");
//     } catch (error) {
//         console.log("Поймана ошибка:", error);
//     }
// }
// processOrder();
// console.log("Fetch API");
// async function getUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         if (!response.ok) {
//             throw new Error(`HTTP ошибка! Статус: ${response.status}`);
//         } 
//         const users = await response.json();
//         console.log("Первые 3 пользователя:");
//         users.slice(0, 3).forEach((user) => {
//             console.log(`- ${user.name} (${user.email})`);
//         });
//         } catch (error) {
//             console.log("Ошибка при загрузке пользователей:", error.message);
//     }
// }
// getUsers();
// async function getUserById(id) {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//         const user = await response.json();
//         console.log(`Пользователь #${id}:`);
//         console.log(`Имя: ${user.name}`);
//         console.log(`Город: ${user.address.city}`);
//         console.log(`Компания: ${user.company.name}`);
//     } catch (error) {
//         console.log("Ошибка:", error.message);
//     }
// }
// getUserById(1);
// async function createPost() {
//     try {
//         const newPost = {
//             title: "Моя первая запись",
//             body: "Это содержание моей первой записи в блоге",
//             userId: 1,
//         };
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(newPost),
//         });
//         const createdPost = await response.json();
//         console.log("Создана новая записи:");
//         console.log("ID:", createPost.id);
//         console.log("Заголовок:", createPost.title);
//     } catch(error) {
//         console.log("Ошибка при создании записи:", error.message);
//     }
// }
// createPost();