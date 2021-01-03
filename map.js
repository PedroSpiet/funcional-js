//numbers
const numbers = [1, 2, 3, 4, 5];
const updatedNumbers = numbers.map(num => num * 2);
console.log(updatedNumbers);

// strings
const names = ['Pedro', 'Amanda', 'Gabs'];
const firstCharAtName = names.map(name => name.charAt(0));
console.log(firstCharAtName);

//objects
const shoppingCar = [
    {name: 'Tesoura', qtd: 1, price: 24.00},
    {name: 'Controle', qtd: 2, price: 10.00},
    {name: 'Televisão', qtd: 2, price: 500.00},
    {name: 'Tapete', qtd: 10, price: 10.00},
];

const namesProducts = shoppingCar.map(products => products.name);
console.log(namesProducts);

const prices = shoppingCar.map(products => products.price * products.qtd);
console.log(prices);