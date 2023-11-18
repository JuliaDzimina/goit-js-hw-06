// Задача 1. Генератор slug

// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title і повертає slug, створений із цього рядка.
// Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
// Усі символи slug повинні бути в нижньому регістрі.
// Усі слова slug повинні бути розділені тире.
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.
function slugify(title){
    const arrayTitle = title.split(" ");
    const stringTitle = arrayTitle.join("-").toLowerCase();
    return stringTitle;
}

console.log("Task-1:", slugify("Arrays for begginers")); 
console.log("Task-1:", slugify("English for developer")); 
console.log("Task-1:", slugify("Ten secrets of JavaScript")); 
console.log("Task-1:", slugify("How to become a JUNIOR developer in TWO WEEKS")); 