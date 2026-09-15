async function fetchFoodData() {
    try {
        const response = await fetch('https://6a9b6c4e0ad174e139e8a9d1.mockapi.io/foods');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const foodData = await response.json();

        const container = document.getElementById('food-menu');
        container.innerHTML = ''; 

        foodData.forEach(({ id, name, price, description, ingredients }) => {
            const foodCardHTML = `
                <div class="card" id="food-${id}">
                    <h2>${name}</h2>
                    <p><strong>Price:</strong> $${price}</p>
                    <p>${description}</p>
                    <p><small><strong>Ingredients:</strong> ${ingredients.join(', ')}</small></p>
                </div>
            `;
            container.innerHTML += foodCardHTML;
        });

    } catch (error) {
        console.error('Error fetching food data:', error);
        
        const container = document.getElementById('food-menu');
        container.innerHTML = `<p style="color: red;">Không thể tải dữ liệu từ MockAPI. Vui lòng kiểm tra lại URL!</p>`;
    }
}

fetchFoodData();