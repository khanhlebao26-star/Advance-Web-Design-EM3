var shopName = "LBK Store";    // global

function orderProduct() {
    let price = 300000;        // function
    var discount = 50000; 
    if (price >= 200000) {
        const finalPrice = price - discount; // block
        console.log(finalPrice);
    }
}

orderProduct();
console.log(shopName);