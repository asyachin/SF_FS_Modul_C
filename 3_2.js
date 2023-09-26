/* Написать функцию JS, которая принимает в качестве аргументов строку и объект, а затем проверяет, 
есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.*/

function ownProperty(obj, Name) {
  return obj.hasOwnProperty(Name);
}

// Пример использования:
let Obj = {
  name: "John",
  age: 30,
};

let Name = "name";
let result = ownProperty(Obj, Name);
console.log(result); // true

Name = "address";
let Person = ownProperty(Obj, Name);
console.log(Person); // false