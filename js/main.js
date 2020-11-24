
// task 1

const numericArray = [1,2,3,4,5];
const multiplyArray = numericArray.map(item => item * 1.27);
console.log(multiplyArray);

console.log(multiplyArray.reduce((previousValue, currentValue) => previousValue + currentValue));


