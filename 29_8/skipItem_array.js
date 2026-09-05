var [greeting,,,name] = ["Hello", "I", "am", "Sarah"];
console.log(greeting);
console.log(name);


var [greeting,...intro] = ["Hello", "I", "am", "Sarah"];
console.log(greeting);
console.log(intro);
