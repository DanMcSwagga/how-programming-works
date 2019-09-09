/* eslint-disable no-use-before-define */
/* eslint-disable no-var */

/* Напишите функцию, содержащую внутри себя переменную с поднятием.
Опубликуйте пример с функцией на github.
Используйте eslint, для поиска проблем в коде.
При необходимости исправьте пример и отправьте изменеия на github. */

'use strict';

const hoisting = () => {
  console.dir(x);
  // const x = 10; // let results in a ReferenceError
  var x = 10; // var results in a hoisted variable (undefined)
};

hoisting();
