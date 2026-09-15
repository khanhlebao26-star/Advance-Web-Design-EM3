const API_URL = "https://6aa80c499b08676cd32bcc26.mockapi.io/products";

class Product {
    constructor(
        id,
        name,
        image,
        description,
        quantity,
        price,
    ) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
    }
}

class ProductManager {
    constructor(apiUrl){
        this.apiUrl = apiUrl;
        this.products = [];
    }

    show(products){
        const productList = document.getElementById("productList");

        productList.innerHTML = "";

        products.forEach(product => {
            productList.innerHTML += `
                <div class="product-card">
                    <img src="${product.image}">

                    <div class="produc-info">
                        <h3 class="product-name">${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                        <p class="product-quantity">${product.quantity}</p>
                        <p class="product-price">${product.price}</p>
                    </div>
                </div>
            `;
        })
    }

    async getProduct(){
        try {
            const response = await fetch(this.apiUrl);

            if (!response.ok){
                throw new Error("Error")
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
            console.error(error);
        }
    };

    async addProduct(product){
        try {
            const response = await fetch(`${this.apiUrl}`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(product),
            });

            if (!response.ok){
                throw new Error("Error")
            }

            await this.getProduct();
        } catch (error) {
            console.error(error);
        }
    };

    async updateProduct(id, product) {
        try {
            const response = await fetch(`${this.apiUrl}/${id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(product)
            });

            if (!response.ok){
                throw new Error("Error")
            }

            await this.getProduct();
        } catch (error) {
            console.error(error);
        }
    };

    async deleteProduct(id){
        try {
            const response = await fetch(`${this.apiUrl}/${id}`, {
                method: "DELETE"
            });

            if (!response.ok){
                throw new Error("Error")
            }
            
            await this.getProduct();
        } catch (error) {
            console.error(error);
        }
    };

    searchProduct(keyword){
        const result = this.products.filter(product => {
            return product.name.toLowerCase().includes(keyword.toLowerCase())
        });

        this.show(result);
    }
}

const ProductManager = new ProductManager(API_URL);
productManager.getProduct();