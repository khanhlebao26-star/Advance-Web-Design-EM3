console.log('Start');

fetch('https://6a9b6c4e0ad174e139e8a9d1.mockapi.io/foods')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

console.log('In coming ....');