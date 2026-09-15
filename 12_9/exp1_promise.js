function sumNumber(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number'){
            reject("Hai so phai la kieu number");
        } else {
            const sum = a + b;
            resolve(sum);
        }
    });
}

const a = 5;
const b = 3;
sumNumber(a, b) 
    .then(sum => {
        console.log("tong cua", a, "va", b, "la: ", sum);
    })
    .catch(error => {
        console.error(error);
    });