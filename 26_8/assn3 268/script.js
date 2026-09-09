// Thời trang nữ
const thoiTrangNu = [
    {
        id: "001",
        tensanpham: "Quần jean nữ",
        gia: 300000,
        giaCu: 370000,
        image: "public/images/quanaonu/quanjeannu.png"
    },
    {
        id: "002",
        tensanpham: "Áo thun nữ",
        gia: 180000,
        giaCu: 250000,
        image: "public/images/quanaonu/aothunnu.png"
    },
    {
        id: "003",
        tensanpham: "Váy nữ",
        gia: 350000,
        giaCu: 450000,
        image: "public/images/quanaonu/vaynu.png"
    },
    {
        id: "004",
        tensanpham: "Găng tay nữ",
        gia: 100000,
        giaCu: 150000,
        image: "public/images/quanaonu/gangtaynu.png"
    }
];

// Thời trang nam
const thoiTrangNam = [
    {
        id: "001",
        tensanpham: "Quần jean nam",
        gia: 320000,
        image: "public/images/quanaonam/quanjeannam.png"
    },
    {
        id: "002",
        tensanpham: "Áo thun nam",
        gia: 200000,
        image: "public/images/quanaonam/aothunnam.png"
    },
    {
        id: "003",
        tensanpham: "Áo sơ mi nam",
        gia: 350000,
        image: "public/images/quanaonam/aosominam.png"
    },
    {
        id: "004",
        tensanpham: "Quần kaki nam",
        gia: 380000,
        image: "public/images/quanaonam/quankakinam.png"
    }
];

function listproduct() {

    for (let i = 0; i <= thoiTrangNu.length - 1; i++) {

        let demo = '<div class="col-3">';
        demo += '<div class="card" style="width: 18rem;">';
        demo += '<img src="' + thoiTrangNu[i].image + 
                '" class="card-img-top" style="height: 400px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">' + 
                thoiTrangNu[i].tensanpham + '</h5>';
        demo += '<p class="card-text">';
        demo += thoiTrangNu[i].gia + ' VND ';
        demo += '<del>' + thoiTrangNu[i].giaCu + ' VND</del>';
        demo += '</p>';
        demo += '<a href="#" class="btn btn-danger" onclick="order()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        document.getElementById("women").innerHTML += demo;
    }

    for (let i = 0; i <= thoiTrangNam.length - 1; i++) {
        let demo = '<div class="col-3">';
        demo += '<div class="card" style="width: 18rem;">';
        demo += '<img src="' + thoiTrangNam[i].image + 
                '" class="card-img-top" style="height: 400px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">' + 
                thoiTrangNam[i].tensanpham + '</h5>';
        demo += '<p class="card-text">' + 
                thoiTrangNam[i].gia + ' VND</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="order()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';

        document.getElementById("men").innerHTML += demo;
    }
}

function order() {
    alert("Bạn đã đặt mua thành công");
}