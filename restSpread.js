//-------------- REST --------------------------------//
const sumNumbers = (...numbers) => {
    let result = 0;

    numbers.forEach(x => {
        result += x;
    });

    return result;
}

console.log(sumNumbers(5, 5, 5, 5, 5, 5));
//Output: 30

//------------------- Spread ------------------------//

const person = {
    name: "Pedro",
    idade: 18
};

const person2 = {
    ...person,
    sobrenome: "emanoel"
};

console.log(person2);
// Output: { name: 'Pedro', idade: 18, sobrenome: 'emanoel' }

