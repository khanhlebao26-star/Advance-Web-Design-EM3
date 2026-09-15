function addNewFood(newFood) {
    return new Promise((resolve, reject) => {
        fetch('https://6a9b6c4e0ad174e139e8a9d1.mockapi.io/foods', {
            method: 'POST',
            body: JSON.stringify(newFood),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("cannot add new food");
            }
            return response.json();
        })
        .then(data => {
            resolve(data);
        })
        .catch(error => {
            reject(error);
        });
        
    });
}

const newFood = {
    name: "Matcha Ice Cream",
    price: 4.5,
    description: "Creamy green tea ice cream served with sweet red bean topping.",
    ingredients: ["Matcha Powder", "Milk", "Cream", "Red Bean"]
};

addNewFood(newFood) 
    .then(data => {
        console.log("món mới đã được thêm:", data);
    })
    .catch(error => {
        console.log("Co loi:", error);
    })
    
