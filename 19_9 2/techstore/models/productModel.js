// Đây là nơi quản lý dữ liệu sản phẩm
const products = [
    { id: 1, name: 'Laptop', price: 1500},
    { id: 2, name: 'Phone', price: 800},
    { id: 3, name: 'Tai nghe', price: 100},
];

// Hàm lấy tất cả sản phẩm 
exports.getAll = () => products;

// Lấy sản phẩm theo ID
exports.getById = (id) => products.find(p => p.id == id);

// Thêm sản phẩm mới
exports.add = (product) => {
    products.push(product);
};