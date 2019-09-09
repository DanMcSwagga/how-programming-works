/* 1. Выведите все нечетные числа из диапазона [15, 30] включая крайние числа.
2. Реализуйте функцию `range(start: number, end: number)` которая выполняет
предыдущую задачу. */

'use strict';

for (let i = 15; i <= 30; i++) {
  if (i % 2) {
    console.log(i);
  }
}

const range = (start, end) => {
  for (let i = start; i <= end; i++) {
    if (i % 2) {
      console.log(i);
    }
  }
};

range(2, 12);
