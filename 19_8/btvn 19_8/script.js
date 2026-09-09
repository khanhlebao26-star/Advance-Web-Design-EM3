var arr = [];

function save() {
    var a = {
        fullname: document.getElementById("fullname").value,
        idpro: document.getElementById("idpro").value,
        namepro: document.getElementById("namepro").value,
        quantitypro: Number(document.getElementById("quantitypro").value),
        pricepro: Number(document.getElementById("pricepro").value)
    };

    console.log(a);

    arr.push(a);
}


function show() {
    var html = '';

    for (i in arr) {
        var n = i;

        var amount = arr[i].quantitypro * arr[i].pricepro;
        var discount = amount * 0.15;
        var total = amount - discount;

        html += "<tr>";

        html += "<td>" + n + "</td>";
        html += "<td>" + arr[i].fullname + "</td>";
        html += "<td>" + arr[i].idpro + "</td>";
        html += "<td>" + arr[i].namepro + "</td>";
        html += "<td>" + arr[i].quantitypro + "</td>";
        html += "<td>" + arr[i].pricepro + "</td>";
        html += "<td>" + discount.toFixed(1) + "</td>";
        html += "<td>" + amount + "</td>";
        html += "<td>" + total.toFixed(1) + "</td>";

        html += "</tr>";
    }

    document.getElementById("tbl").innerHTML = html;
}


function reset() {
    document.getElementById("fullname").value = "";
    document.getElementById("idpro").value = "";
    document.getElementById("namepro").value = "";
    document.getElementById("quantitypro").value = "";
    document.getElementById("pricepro").value = "";
}