// Gốc
function hello(name, message){
    console.log(`Hello ${name}, bạn thật ${message}`);
}
hello("Long", "xinh đẹp");

// Arrow function
// Ví dụ có tham số
var hello = (name, message) => {
    console.log(`Hello ${name}, bạn thật ${message}`);
}
hello("Long", "xinh đẹp");

// Không có tham số
var hello = () => {
    console.log("Hello Long, bạn thật xinh đẹp");
}
hello();

// Assignment
var a = 7;

var check = () => {
    if (a % 2 == 0){
        console.log(`a = ${a}`, "là chẵn");
    } else {
        console.log(`a = ${a}`, "là lẻ")
    }
}
check();