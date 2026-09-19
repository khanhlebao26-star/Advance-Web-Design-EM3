const searchInput =
    document.getElementById("searchInput");

const productCards =
    document.querySelectorAll(".product-card");

const jsNoResults =
    document.getElementById("jsNoResults");


searchInput.addEventListener("input", () => {

    const keyword =
        searchInput.value.toLowerCase().trim();


    let visibleProducts = 0;


    productCards.forEach(card => {

        const productName =
            card.dataset.productName.toLowerCase();


        if (productName.includes(keyword)) {

            card.style.display = "";

            visibleProducts++;

        } else {

            card.style.display = "none";

        }

    });


    if (visibleProducts === 0) {

        jsNoResults.style.display = "block";

    } else {

        jsNoResults.style.display = "none";

    }

});