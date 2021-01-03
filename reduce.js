const numbers = [5, 5, 5, 5];

const updatedNumbers = numbers.reduce((acumulator, currentValue) => acumulator + currentValue);
console.log(updatedNumbers);

//shopping cart

const shoppingCart = [
    {name: 'Tesoura', qtd: 1, price: 24.00},
    {name: 'Controle', qtd: 2, price: 10.00},
    {name: 'Televisão', qtd: 2, price: 500.00},
    {name: 'Tapete', qtd: 10, price: 10.00},
];

const values = shoppingCart.map(products => products.qtd * products.price);
console.log(values);

const totalValues = values.reduce((acumulator, cv) => acumulator + cv);
console.log(totalValues);