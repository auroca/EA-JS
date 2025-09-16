// Call Stack 
function first() {
    console.log("First");
}
  
// MacroTask Queue
function second() {
    setTimeout(() => { 
        console.log("Second")
    }, 0); 
}

// MicroTask Queue
function third() {
    Promise.resolve().then(() => {
        console.log("Third")
    }) 
}

// Call Stack 
forth = () => {
    console.log("Forth")
}

first(); // call stack
second(); // macrotask queue
third(); // microtask queue
forth(); // call stack

