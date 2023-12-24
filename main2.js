// Build a simple loop, inside a function, that takes an array and prints the value of the array to the console.

function arrLoop(arr) {
    arr.forEach(element => {
        console.log(element);
    });
}

let array1 = [1,2,3,3,5];
arrLoop(array1);