/* 1. Реализуйте функцию `average` с сигнатурой
`average(a: number, b: number): number`
вычисляющую среднее арифметическое своих аргументов.
2. Реализуйте функцию `square` с сигнатурой
`square(x: number): number` вычисляющую квадрат своего аргумента.
3. Реализуйте функцию `cube` с сигнатурой
`cube(x: number): number` вычисляющую куб своего аргумента.
4. Вызовите функции `square` и `cube`
в цикле, передавая результаты их исполнения в функцию `average`.
Выведите результаты вызова `average`. */

'use strict';

const average = (a, b) => (a + b) / 2;
const square = x => x ** 2;
const cube = x => x ** 3;

for (let i = 1; i <= 5; i++) {
  console.log(average(square(i), cube(i)));
}
