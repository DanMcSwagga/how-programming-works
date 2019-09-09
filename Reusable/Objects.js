/* 1. Объявите переменную и запишите в нее свое имя как литерал строки.
2. Объявите константу и запишите в нее год своего рождения как литерал числа.
3. Создайте функцию, которая печатает приветствие и имеет один аргумент: `name`.
4. Вызовите эту функцию и передайте в нее имя как литерал строки.
5. Теперь вызовите функцию, передавая в нее переменную.
6. Вызовите функцию с константой в качестве аргумента. */

'use strict';

const CONST_OBJ = { name: '' };
let varObj = { name: '' };

CONST_OBJ.name = 'Bradley';
varObj.name = 'Sharon';

const otherObj = { someProperty: '' };

// CONST_OBJ = otherObj; // assignment not allowed as CONST_OBJ is constant
varObj = otherObj; // allowed, new pointer/referrence to an object

const createUser = (name, city) => ({ name, city });

console.log(createUser('Marcus Aurelius', 'Roma'));
