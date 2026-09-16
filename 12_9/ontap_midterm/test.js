const API_URL = "https://6aa80c499b08676cd32bcc26.mockapi.io/products";


class Product {
    constructor(
        id,
        name, 
        image,
        description,
        quantity,
        price
    ) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.description = description;
        this.quantity = quantity;
        this.price = price
    }
}


class Productmanager {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
        this.products = [];
    }

    show(products) {
        const productList = document.getElementById("productList");

        productList.innerHTML = "";

        products.forEach(product => {
            productList.innerHTML += `
                <div class="product-card">
                    <img src="${product.image}">

                    <div class="product-info">
                        <h3 class="product-name">${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                        <p class="product-quanity">${product.quantity}</p>
                        <p class="product-price">${product.price}</p>
                    </div>
                </div>
            `;
        })
    }

    getProduct() {
        return new Promise((resolve, reject) => {
            fetch(this.apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Cannot get product")
                }
                return response.json();
            })
            .then(data => {

                this.products = data.map(item => {
                    item.id,
                    item.image,
                    item.name,
                    item.description,
                    item.quantity,
                    item.price
                })
                this.show(this.products)
                resolve(data);
            })

            .catch(error => {
                reject(error)
            }) 
        })
    };

    addProduct(product) {
        return new Promise((resolve, reject) => {
            fetch(this.apiUrl, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(product)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Cannot add product")
                }
                return response.json();
            })
            .then(data => {
                this.getProduct();
                resolve(data)
            })
            .catch(error => {
                reject(error)
            })
        })
    };

    updateProduct(id, product) {
        return new Promise((resolve, reject) => {
            fetch(`${this.apiUrl}/${id}`,{
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(product)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Cannot update product")
                }
                return response.json();
            })
            .then(data => {
                this.getProduct();
                resolve(data);
            })
            .catch (error => {
                reject(error)
            })
        })
    };

    deleteProduct(id) {
        return new Promise((resolve, reject) => {
            fetch(`${this.apiUrl}/${id}`, {
                method: "DELETE"
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Cannot delete product")
                }
                return response.json();
            })
            .then(data => {
                this.getProduct();
                resolve(data)
            })
            .catch(error => {
                reject(error)
            })
        })
    }

    searchProduct(keyword) {
        const result = this.products.filter(product => {
            return product.name.toLowerCase().includes(keyword.toLowerCase());
        });
        this.show(result)
    }
}

const productManager = new Productmanager(API_URL);

productManager.getProduct();

