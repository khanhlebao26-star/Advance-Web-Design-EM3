// Hàm lấy dữ liệu từ API
async function fetchUserData() {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users/1'
        );

        // Kiểm tra xem phản hồi có thành công không
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const userData = await response.json();

        // Destructuring dữ liệu trả về
        const {
            id,
            name,
            email,
            address: { street, city }
        } = userData;

        // In ra các thông tin đã destructured
        console.log(`ID: ${id}`);
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Street: ${street}`);
        console.log(`City: ${city}`);

    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

// Gọi hàm để thực hiện yêu cầu API
fetchUserData();