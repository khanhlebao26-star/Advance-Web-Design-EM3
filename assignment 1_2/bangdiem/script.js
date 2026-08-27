function calculate() {
    const a = Number(document.getElementById("semester1").value);
    const b = Number(document.getElementById("semester2").value);
    const c = document.getElementById("year").value;

    const average1 = (a + b) / 2;
    const average2 = (a + (b * 2)) / 3;

    let average;

    if (c == "1") {
        average = average1;
    } else if (c == "2") {
        average = average2;
    }

    document.getElementById("summary").value = average.toFixed(2);

    if (average >= 9) {
        document.getElementById("result").textContent = "Học sinh giỏi";
        document.getElementById("result").style.color = "red";
    } else if (average < 9) {
        document.getElementById("result").textContent = "Học sinh khá";
        document.getElementById("result").style.color = "black";
    }
}

function cancelForm() {
    document.getElementById("semester1").value = "";
    document.getElementById("semester2").value = "";
    document.getElementById("year").value = "1";
    document.getElementById("summary").value = "";
    document.getElementById("result").textContent = "";
}
