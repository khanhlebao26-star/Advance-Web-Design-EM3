function calculateSum(a, b, callback) {
    const sum = a + b;
    callback(sum);
}

function displayResult(result) {
    console.log('The sum is:', result);
}

calculateSum(5, 10, displayResult);

