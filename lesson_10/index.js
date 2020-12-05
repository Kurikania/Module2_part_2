
function Item(name, price) {
    this.name = name;
    this.price = price; 
}
let item1 = new Item('ель искуственная', 1500);
let item2 = new Item('хлопушка', 100);
let item3 = new Item('конфети', 50);

function ShoppingCart() {
    let cart = []; /* Массив товаров;*/
    let totalSum = 0; /*Сумма товаров*/


    this.addItem = function(item) { // - Добавить товар;
        cart.push(item);
      }
    this.getItemsNum = function() {  // - Вернуть количество товара.
        return cart.length
    }
    this.getTotalSum = function() {   // - Вернуть сумму товара;
        for (let i = 0; i < cart.length; i++) {
            totalSum += cart[i].price
        }
        return totalSum
    }
}

let cart = new ShoppingCart()

cart.addItem(item1)
cart.addItem(item2)
cart.addItem(item3)

console.log(`Итого позиций в корзине: ${cart.getItemsNum()} , общая сумма заказа: ${cart.getTotalSum()}`)

// Создать шаблон объектов «Человек».
// Свойства «Имя», «Возраст», «Пол», «Интересы».
// Метод преобразования к строке вида: «Человек: 
// Иван. Возраст: 25 лет. Пол: м. Интересы: 
// музыка, программирование.»
// Создать шаблон объектов «Студент».
// Свойства от наследованные от шаблона объектов 
// «Человек» и добавить «Институт».
// Переопределить метод преобразования к строке 
// вида: «Студент: Иван. Возраст: 25 лет. Пол: м. 
// Интересы: музыка, программирование. 
// Обучается в ИТМО.

function Person(name, age, gender, hobbies) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.hobbies = hobbies; 
    this.showInfo = function() {
        return `Краткая информация о ${this.name}  : возраст: ${this.age} пол: ${this.gender} увлечения: ${this.hobbies}`
    }
}

function Student(name, age, gender, hobbies, uni) {
    Person.call(this, name, age, gender, hobbies)
    this.uni = uni;
    this.showInfo = function() {
        return `Краткая информация о студенте ${this.name} : возраст: ${this.age} пол: ${this.gender} увлечения: ${this.hobbies} , учится в ${this.uni}`
    }
}

let person1 =  new Person("Даша", 22, "женский", "вышивка")
let student1 =  new Student("Маша", 21, "женский", "программирование", "ИТМО" )

console.log(person1.showInfo())
console.log(student1.showInfo())

// 3. Создать шаблон объектов «Пользователь».
// Метод преобразования к строке выводит имя пользователя.
// Два фабричных метода:
// - «Создать анонимного пользователя» не получает аргументов,
//  в качества имя пользователя устанавливает «Аноним».
// - «Создать пользователя из данных» в качества аргументов 
// получает объект с именем и возрастом пользователя.

function User(name, age) {
    if (arguments.length === 0) {
        this.name = "Anonim"
        this.showInfo = function() { return `Имя ${this.name}`}
    } else {
        this.name = name;
        this.age = age
        this.showInfo = function() {return `Имя ${this.name}, возраст ${age}`}
    }
}

let user1 = new User();
let user2 = new User('Иван', 25)

console.log(user1.showInfo())
console.log(user2.showInfo())

// Выбрать 10 незнакомых (которые не разбирались на занятиях) 
// шаблонов объектов (классов) доступных в глобальной области и 
// привести информацию в виде комментариев в коде для чего 
// они используются. Информацию можно найти в документации 
// (справочные системы по js, статьи по программированию и т.п.).


/* 
1. Promise

Объект Promise (промис) используется для отложенных и асинхронных вычислений.
У промиса есть 3 состояния. Это:
1. Промис в состоянии ожидания (pending). 
2. Промис решен (resolved).
3. Промис отклонен (rejected). 

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 300);
});

promise1.then((value) => {
  console.log(value);
  // expected output: "foo"
});

2. Error

Конструктор Error создаёт объект ошибки. Экземпляры объекта Error выбрасываются при возникновении ошибок во время 
выполнения. Объект Error также может использоваться в качестве базового для пользовательских исключений.

3. Map

Объект Map содержит пары ключ-значение и сохраняет порядок вставки. Любое значение 
(как объекты, так и примитивы) могут быть использованы в качестве ключей.

4. Set

5. Reflect 

Reflect - это встроенный объект, который предоставляет методы для перехватывания JavaScript операций. 
Эти методы аналогичны методам proxy handler`ов. Reflect - это не функциональный, а простой объект, 
он не является сконструированным.

6. Weak Map 

Объект WeakMap — коллекция пар ключ-значение. В качестве ключей могут быть использованы только объекты, 
а значения могут быть произвольных типов.

7. WeakSet 

Это коллекция, элементами которой могут быть только объекты. Ссылки на эти объекты в WeakSet являются слабыми. 
Каждый объект может быть добавлен в WeakSet только один раз.

8. Proxy

Объект Proxy позволяет создать прокси для другого объекта, может перехватывать и переопределить основные 
операции для данного объекта.

9. Объект JSON содержит методы для разбора объектной нотации JavaScript (JavaScript Object Notation — сокращённо JSON) 
и преобразования значений в JSON. Его нельзя вызвать как функцию или сконструировать как объект, и кроме своих двух 
методов он не содержит никакой интересной функциональности.

10. RagneError

Объект RangeError представляет ошибку, возникающую, когда значение не входит в множество или 
выходит за диапазон допустимых значений.

*/


