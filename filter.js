const numbers = [0, 1, 2, 3, 4, 5, 10, 11];

const numbersBiggerThan0 = numbers.filter(num => num > 0);
console.log(numbersBiggerThan0);

const numbersBiggerThan5 = numbers.filter(num => num > 5);
console.log(numbersBiggerThan5);

const sumValueNumber = numbers.filter(num => num == 2+2);
console.log(sumValueNumber);

// shopping cart

const shoppingCar = [
    {name: 'Tesoura', qtd: 1, price: 24.00},
    {name: 'Controle', qtd: 0, price: 10.00},
    {name: 'Televisão', qtd: 2, price: 500.00},
    {name: 'Tapete', qtd: 10, price: 10.00},
];

const productsWherePriceIsMoreThan24 = shoppingCar.filter(products => products.price > 24);
console.log(productsWherePriceIsMoreThan24);

const productsWhereQuantityIsMoreThan0 = shoppingCar.filter(products => products.qtd > 0);
console.log(productsWhereQuantityIsMoreThan0);