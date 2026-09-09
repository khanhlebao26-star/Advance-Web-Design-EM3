function check (a, callback) {
    if (a %2 == 0) {
        return callback(a, 'Even');
    }
    return callback(a, 'Odd');
}

function displayResult(num, result) {
    console.log(`The number ${num} is ${result}`);
}

check(5, displayResult);