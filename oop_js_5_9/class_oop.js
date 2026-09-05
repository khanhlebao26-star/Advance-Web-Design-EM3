class Products {
    // Khai báo thuộc tính sản phẩm trực tiếp
    id = 0;
    name = '';
    price = 0;

    // Phương thức khởi tạo
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    // Phương thức hiển thị thông tin sản phẩm
    displayInfo() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Price: ${this.price}`);
    }
}

// Tạo đối tượng mới từ Product
const product1 = new Products(1, 'Laptop', 1000);
const product2 = new Products(2, 'Mouse', 500);

// Hiển thị thông tin
product1.displayInfo(); // Output: ID: 1, Name: Laptop, Price: 1000
product2.displayInfo(); // Output: ID: 2, Name: Mouse, Price: 500
