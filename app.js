// Initial temperature in kelvin
const kelvin = 292;
console.log(`The temperature is ${kelvin} degrees Kelvin.`);

// Getting celsius from Initial temp
const celsius = kelvin - 273;
console.log(`The temperature is ${celsius} degrees Celsius.`);

// Getting fahrenheit from celsius
const fahrenheit = Math.floor(celsius * (9 / 5) + 32);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Getting newton from celsius
const newton = Math.floor(celsius * (33 / 100));
console.log(`The temperature is ${newton} degrees Newton.`);
