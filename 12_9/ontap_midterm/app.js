const API_URL = "https://6aa80c499b08676cd32bcc26.mockapi.io/products";

class Product {
    constructor(
        id,
        name,
        image,
        description,
        quantity,
        price,
    ){
        this.id = id;
        this.name = name;
        this.image = image;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
    }
};

class ProductManager {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
        this.products = [];
    }

    async getProducts() {
        try {
            const response = await fetch(this.apiUrl);

            if (!response.ok) {
                throw new Error("error")
            }
            const data = await response.json();

            this.products = data.map(item => {
                return new Product(
                    item.id,
                    item.name,
                    item.image,
                    item.description,
                    item.quantity,
                    item.price,
                )
            });

            this.show(this.products);
        } catch (error) {
            console.error(error)
        }
    };

    show(products){
        const productList = document.getElementById("productList");

        productList.innerHTML = "";

        products.forEach(product => {
            productList.innerHTML += `
            <div class="product-card">
                <img src="${product.image}">

                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <p class="product-quantity">${product.quantity}</p>
                    <p class="product-price">${product.price}</p>
                </div>
            </div>

            `;
        });
    }

    async addProduct(product) {
        try {
            const response = await fetch(`${this.apiUrl}`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(product),
            });
            if (!response.ok) {
                throw new Error("error")
            }
            await this.getProducts();
        } catch (error) {
            console.error(error);
        }
    };

    async updateProduct(id, product) {
        try {
            const response = await fetch(`${this.apiUrl}/${id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(product),
            });
            if (!response.ok) {
                throw new Error("error")
            }
            await this.getProducts();
        } catch (error) {
            console.error(error);
        }
    };

    async deleteProduct(id) {
        try {
            const response = await fetch(`${this.apiUrl}/${id}`, {
                method: "DELETE"
            });
            if (!response.ok) {
                throw new Error("error")
            }

            await this.getProducts();
        } catch (error) {
            console.error(error);
        }
    };

    searchProduct(keyword) {
        const result = this.products.filter(product => {
            return product.name.toLowerCase().includes(keyword.toLowerCase())
        });

        this.show(result);
    }
};

const productManager = new ProductManager(API_URL);

productManager.getProducts();

const productForm = document.getElementById("productForm");

productForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const id = document.getElementById("productId").value;
    const name = document.getElementById("name").value;
    const image = document.getElementById("image").value;
    const description = document.getElementById("description").value;
    const quantity = Number(document.getElementById("quantity").value);
    const price = Number(document.getElementById("price").value);

    const product = new Product(id, name, image, description, quantity, price);

    console.log(product);

    if (id) {
        await productManager.updateProduct(id, product);
    } else {
        await productManager.addProduct(product);
    }

    productForm.reset();
    document.getElementById("productId").value = "";
})