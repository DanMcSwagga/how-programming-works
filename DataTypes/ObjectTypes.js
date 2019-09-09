/* Подсчет элементов различных типов в массиве. */

'use strict';

const data = [
  true,
  'Abraham Lincoln',
  1984,
  false,
  'somewhere over the ranbows',
  '42',
  0,
  false,
  { Metarhia: -42 },
  '!!!'
];

const filledTypes = { number: 0, string: 0, boolean: 0, object: 0 };

for (const item of data) {
  filledTypes[typeof item]++;
}

console.dir(filledTypes); // { number: 2, string: 4, boolean: 3, object: 1 }

const emptyTypes = {};

for (const item of data) {
  // emptyTypes[typeof item] ?
  Object.keys(emptyTypes).includes(typeof item) ?
    emptyTypes[typeof item]++ :
    (emptyTypes[typeof item] = 1);
}

console.dir(emptyTypes); // { boolean: 3, string: 4, number: 2, object: 1 }
