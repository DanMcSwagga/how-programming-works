/* Подготовьте две реализации функции inc:
1. C сигнатурой inc(n: number): number, пример вызова:
const a = 5; const b = inc(a); console.dir({ a, b });
2. C сигнатурой inc(num: Num), где Num является объектом с полем n, чтобы
функция изменила поле исходного объекта переданного по ссылке, пример вызова:
const obj = { n: 5 }; inc(obj); console.dir(obj); */

'use strict';

const incScalar = n => n + 1;
const incRefer = num => num.n + 1;

const a = 5;
const b = incScalar(a);
console.dir({ a, b });

const obj = { n: 5 };
incRefer(obj);
console.dir(obj);
