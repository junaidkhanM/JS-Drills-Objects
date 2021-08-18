const { defaults } = require('../defaults');

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham', flavor: undefined };
const defObj =  {flavor: "vanilla", sprinkles: "lots"};

const result = defaults(testObject, defObj);
console.log(result);