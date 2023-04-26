const generateRandomNumber = () => {
    return Math.random();
}

// console.log(generateRandomNumber(100));

const generateRandomNumbersThatCreateSum = (randomNumbersCount, totalSum) => {
    const temp = [];
    
    for (let i = 0; i < randomNumbersCount; i++) {
        const randomNumber = Math.random();
        temp.push(randomNumber);
    }
    const randomNumbers = [];
    let accumulator = temp.reduce((a, b) => a + b, 0);
    for (let num of temp) {
        const rand = num * totalSum; 
        const final = rand/accumulator;
        randomNumbers.push(final); 
    }
    return randomNumbers;
}

console.log(generateRandomNumbersThatCreateSum(11, 100));