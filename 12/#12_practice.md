# Реорганізуйте функцію setGear всередині об’єкта bicycle, щоб використати скорочений синтаксис, описаний вище.
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);

# Використайте ключове слово class та напишіть constructor, щоб створити клас Vegetable. Клас Vegetable дозволяє створити об’єкт-овоч із властивістю name, що передається до constructor.
const carrot = new Vegetable('carrot');
console.log(carrot.name); // Повинно показувати 'carrot'

# Використайте ключове слово class, щоб створити клас Thermostat. constructor приймає температуру в градусах Фаренгейта. У класі створіть getter, щоб отримати температуру в градусах Цельсія, та setter, що приймає температуру в градусах Цельсія.
- C = 5/9 * (F - 32)
- F = C * 9.0 / 5 + 32
const thermos = new Thermostat(76); // Налаштування у шкалі Фаренгейта
let temp = thermos.temperature; // 24.44 градусів за Цельсієм
thermos.temperature = 26;
temp = thermos.temperature; // 26 градусів за Цельсієм

# Змініть оголошення weight у функції Bird, щоб вона стала приватною змінною. Потім створіть метод getWeight, який поверне значення weight 15.
function Bird() {
  this.weight = 15;
}

#
