{
// ===== Завдання 6. Налагодження =====
// Файл має обчислити вартість замовлення з доставкою, вивести числа від 1 до 5
// і статус замовлення. У ньому п'ять помилок. Знайдіть і виправте кожну,
// над виправленим рядком залиште коментар:
// // Помилка N: <синтаксична | виконання | логічна> — <що було не так>
console.log("--- Завдання 6 ---");

const unitPrice = "150";
const quantity = 3;
let total = 0;

// Помилка 1: логічна — рядок unitPrice додавався до quantity замість множення чисел
total = Number(unitPrice) * quantity;
console.log("Сума замовлення:", total);

function getDeliveryCost(orderTotal) {
  // Помилка 2: логічна — неправильний порядок умов
  if (orderTotal >= 1000) {
    return 0;
  } else if (orderTotal >= 300) {
    return 40;
  }

  return 80;
}

const delivery = getDeliveryCost(total);
console.log("Доставка:", delivery);
console.log("Разом з доставкою:", total + delivery);

// Помилка 3: логічна — умова number < 5 виводила числа лише до 4 замість діапазону від 1 до 5
for (let number = 1; number <= 5; number++) {
  console.log("Число:", number);
}

// Помилка 4: логічна — використано оператор присвоєння (=) замість суворого порівняння (===)
if (total === 450) {
  console.log("Сума дорівнює 450");
}

// Помилка 5: виконання — змінна status була оголошена через const усередині блоку if і недоступна за його межами 
let status = "немає замовлення";
if (total > 0) {
  status = "є замовлення";
}

console.log("Статус:", status);
}
