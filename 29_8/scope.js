var example = 5;
function test(){
    var testVariable = 10;
    console.log(example); // Export output = 5
    console.log(testVariable); // Export output = 10
}
test();
console.log(testVariable); // Export error