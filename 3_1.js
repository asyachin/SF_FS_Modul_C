/* Функция, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения 
только собственных свойств. Данная функция не должна возвращать значение.*/

function printOwnProperties(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key + ": " + obj[key]);
    }
  }
}

let myObject = {
  name: "John",
  age: 30,
};

printOwnProperties(myObject);