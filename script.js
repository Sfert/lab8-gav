// Лабораторна робота № 8. Варіант 2, Гавинський Тимофій

// ===== Завдання 1. Змінні, типи, перетворення =====
console.log("--- Завдання 1 ---");

const groupName = "ІСТ-26";
const variant = 2;
let attempts = 0;

attempts += 1;

console.log("groupName:", groupName, "| typeof:", typeof groupName);
console.log("variant:", variant, "| typeof:", typeof variant);
console.log("attempts:", attempts, "| typeof:", typeof attempts);

const priceText = "250";

console.log("priceText + 10:", priceText + 10);
console.log("Number(priceText) + 10:", Number(priceText) + 10);

console.log('Number.isNaN(Number("ціна")):', Number.isNaN(Number("ціна")));


// ===== Завдання 2. Умови =====
console.log("--- Завдання 2 ---");

function getGrade(score) {
  if (typeof score !== "number" || Number.isNaN(score) || score < 0 || score > 100) {
    return null;
  }

  if (score >= 88) {
    return "Відмінно";
  } else if (score >= 70) {
    return "Добре";
  } else if (score >= 55) {
    return "Задовільно";
  } else {
    return "Не зараховано";
  }
}

console.log(`Бал ${88} (перша межа):`, getGrade(88));
console.log(`Бал ${70} (друга межа):`, getGrade(70));
console.log(`Бал ${55} (третя межа):`, getGrade(55));
console.log(`Бал ${50} (нижче третьої межі):`, getGrade(50));
console.log('Рядок "90":', getGrade("90"));
console.log("Від'ємне число (-10):", getGrade(-10));

const borderlineScore = 54;
const passStatus = borderlineScore >= 55 ? "зараховано" : "не зараховано";

console.log(`Результат для балу ${borderlineScore}:`, passStatus);

// ===== Завдання 3. Цикли =====
console.log("--- Завдання 3 ---");

let amount = 0;
for (let i = 1; i <= 30; i++) 
    {
        if (i % 4 === 0 ) {
            console.log(i);
            amount += 1;
        }
    }
console.log("Кількість чисел, що діляться на 4:", amount);
let n = 1;

while (n * n <= 30) 
{
  n += 1;
}

console.log(`Найменше натуральне число n, для якого n * n > ${30}:`, n);

// ===== Завдання 4. Функції =====
console.log("--- Завдання 4 ---");

function calculateDiscount(price, percent = 10) {
  if (
    typeof price !== "number" ||
    Number.isNaN(price) ||
    typeof percent !== "number" ||
    Number.isNaN(percent) ||
    percent < 0 ||
    percent > 100
  ) {
    return null;
  }

  return price - (price * percent) / 100;
}

const formatPrice = (amount) => `${amount} грн`;


console.log("1. Лише з ціною (знижка за замовчуванням):", formatPrice(calculateDiscount(200)));
console.log("2. З ціною та відсотком 40%:", formatPrice(calculateDiscount(200, 40)));
console.log("3. З некоректним відсотком 150:", calculateDiscount(200, 150));

// ===== Завдання 5. Передавання аргументів і область видимості =====
console.log("--- Завдання 5 ---");

function increase(value) {
  value += 1;
  return value;
}

function addPoints(student) {
  student.score += 5;
}

let counter = 10;
const student = { name: "Ім'я", score: 60 };


increase(counter);
addPoints(student);

console.log("counter після виклику:", counter);
console.log("student.score після виклику:", student.score);
console.log("Чи збігається з прогнозом:", counter === 10 && student.score === 65);


const status = "глобальний";

if (true) {
  const status = "блоковий";
  console.log("status усередині блоку:", status);
}

console.log("status після блоку:", status);
// Прогноз до запуску: counter = 10, student.score = 65


