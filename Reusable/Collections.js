'use strict';

// const phonebook = [
//   { name: 'Marcus Aurelius', phone: '+380445554433' },
//   { name: 'Dan Stetsenko', phone: '+380983308847' },
//   { name: 'James Siminoff', phone: '+38917412XXXX' }
// ];

const phonebook = {
  'Marcus Aurelius': '+380445554433',
  'Dan Stetsenko': '+380983308847',
  'Jamie Siminoff': '+38917412XXXX'
};

const findPhoneByName = name => phonebook[name];

console.log(findPhoneByName('Jamie Siminoff'));
