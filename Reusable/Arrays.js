/* 1. Объявите массив объектов с двумя полями: `name` и `phone` для хранения
телефонной книги. Пример: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`
2. Реализуйте функцию `findPhoneByName` с сигнатурой
`findPhoneByName(name: string): string`.
При вызове функция должна находить объект, где поле `name` равно аргументу
`name` и возвращать номер телефона из объекта. */

'use strict';

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Dan Stetsenko', phone: '+380983308847' },
  { name: 'Jamie Siminoff', phone: '+38917412XXXX' }
];

const findPhoneByName = name =>
  phonebook.find(record => name === record.name).phone;

console.log(findPhoneByName('Dan Stetsenko'));
