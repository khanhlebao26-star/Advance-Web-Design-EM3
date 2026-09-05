// // Assignment 1
// var a = 7;

// var check = () => {
//     if (a % 2 == 0){
//         console.log(`a = ${a}`, "là chẵn");
//     } else {
//         console.log(`a = ${a}`, "là lẻ")
//     }
// }
// check();

// // tính tổng chẳn lẻ có tham số và ko có từ 1 -> 10 
// ko có tham số
var a = [1,2,3,4,5,6,7,8,9,10];
let sumEven = 0;
let sumOdd = 0;
let sum = 0;
const check = () => {
    for(let i = 0; i < a.length; i++) {
        sum += a[i];
        if (a[i] % 2 == 0){
            sumEven += a[i];
        } else {
            sumOdd += a[i];
        }
    }

    console.log("Tổng số chẳn: ", sumEven);
    console.log("Tổng số lẻ: ", sumOdd);
    console.log("Tổng mảng: ", sum);
}

check();

// // Có tham số
// var a = [1,2,3,4,5,6,7,8,9,10];

// const check = (arr) => {
//     let sumEven = 0;
//     let sumOdd = 0;
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];

//         if (arr[i] % 2 == 0) {
//             sumEven += arr[i];
//         } else {
//             sumOdd += arr[i];
//         }
//     }

//     console.log("Tổng số chẵn:", sumEven);
//     console.log("Tổng số lẻ:", sumOdd);
//     console.log("Tổng mảng:", sum);
// };

// check(a);