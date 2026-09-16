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
        this.price = price;
    }
}

class ProductManager {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
        this.products = [];
    }

    getProducts() {
        return new Promise((resolve, reject) => {

            fetch(this.apiUrl)
                .then(response => {

                    if (!response.ok) {
                        throw new Error("Cannot fetch products");
                    }

                    return response.json();
                })
                .then(data => {

                    this.products = data.map(item => {
                        return new Product(
                            item.id,
                            item.name,
                            item.image,
                            item.description,
                            item.quantity,
                            item.price
                        );
                    });

                    this.show(this.products);

                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                });

        });
    }

    show(products) {

        const productList = document.getElementById("productList");

        productList.innerHTML = "";

        products.forEach(product => {

            productList.innerHTML += `
                <div class="product-card">

                    <img src="${product.image}">

                    <div class="product-info">

                        <h3 class="product-name">
                            ${product.name}
                        </h3>

                        <p class="product-description">
                            ${product.description}
                        </p>

                        <p class="product-quantity">
                            Quantity: ${product.quantity}
                        </p>

                        <p class="product-price">
                            ${product.price}
                        </p>

                        <div class="action">
                            <button onclick="editProduct('${product.id}')">
                                Edit
                            </button>

                            <button onclick="deleteProduct('${product.id}')">
                                Delete
                            </button>
                        </div>

                    </div>

                </div>
            `;
        });
    }

    addProduct(product) {

        return new Promise((resolve, reject) => {

            fetch(this.apiUrl, {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(product)
            })

                .then(response => {

                    if (!response.ok) {
                        throw new Error("Cannot add product");
                    }

                    return response.json();
                })

                .then(data => {

                    this.getProducts();

                    resolve(data);
                })

                .catch(error => {

                    reject(error);
                });

        });
    }

    updateProduct(id, product) {

        return new Promise((resolve, reject) => {

            fetch(`${this.apiUrl}/${id}`, {

                method: "PUT",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(product)
            })

                .then(response => {

                    if (!response.ok) {
                        throw new Error("Cannot update product");
                    }

                    return response.json();
                })

                .then(data => {

                    this.getProducts();

                    resolve(data);
                })

                .catch(error => {

                    reject(error);
                });

        });
    }

    deleteProduct(id) {

        return new Promise((resolve, reject) => {

            fetch(`${this.apiUrl}/${id}`, {

                method: "DELETE"
            })

                .then(response => {

                    if (!response.ok) {
                        throw new Error("Cannot delete product");
                    }

                    return response.json();
                })

                .then(data => {

                    this.getProducts();

                    resolve(data);
                })

                .catch(error => {

                    reject(error);
                });

        });
    }

    searchProduct(keyword) {

        const result = this.products.filter(product => {

            return product.name
                .toLowerCase()
                .includes(keyword.toLowerCase());

        });

        this.show(result);
    }
}

const productManager = new ProductManager(API_URL);

productManager
    .getProducts()

    .then(data => {
        console.log("Products loaded:", data);
    })

    .catch(error => {
        console.error("Error:", error);
    });

const productForm = document.getElementById("productForm");

productForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const id = document.getElementById("productId").value;
    const name = document.getElementById("name").value;
    const image = document.getElementById("image").value;
    const description =
        document.getElementById("description").value;
    const quantity =
        Number(document.getElementById("quantity").value);
    const price =
        Number(document.getElementById("price").value);

    const product = new Product(
        id,
        name,
        image,
        description,
        quantity,
        price
    );


    let request;

    if (id) {

        request = productManager.updateProduct(
            id,
            product
        );

    } else {

        request = productManager.addProduct(
            product
        );
    }


    request

        .then(data => {

            console.log("Success:", data);

            productForm.reset();

            document.getElementById("productId").value = "";

        })

        .catch(error => {

            console.error("Error:", error);

        });

});

function editProduct(id) {

    const product = productManager.products.find(
        product => product.id === id
    );


    if (!product) {
        return;
    }


    document.getElementById("productId").value =
        product.id;

    document.getElementById("name").value =
        product.name;

    document.getElementById("image").value =
        product.image;

    document.getElementById("description").value =
        product.description;

    document.getElementById("quantity").value =
        product.quantity;

    document.getElementById("price").value =
        product.price;

}

function deleteProduct(id) {

    const confirmDelete = confirm(
        "Are you sure you want to delete this product?"
    );


    if (!confirmDelete) {
        return;
    }


    productManager

        .deleteProduct(id)

        .then(data => {

            console.log("Deleted:", data);

        })

        .catch(error => {

            console.error("Error:", error);

        });
}

const searchInput =
    document.getElementById("searchInput");


searchInput.addEventListener("input", (event) => {

    productManager.searchProduct(
        event.target.value
    );

});

const cancelBtn =
    document.getElementById("cancleBtn");


cancelBtn.addEventListener("click", () => {

    productForm.reset();

    document.getElementById("productId").value = "";

});