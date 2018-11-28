// YOUR CODE BELOW
const bacteriaTime = (currentNum, targetNum) => {

    let minutes = 0;

    if (targetNum < currentNum) return 'targetNum must be larger than currentNum';

    for (currentNum; currentNum < targetNum; currentNum *= 2) {
        minutes += 20;
    }

    return minutes;

}

console.log(bacteriaTime(10, 8));