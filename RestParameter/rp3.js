function sum(...numbers) {
    let s = 0;
    for (let number of numbers) {
        s += number;
    }
    return s;
}

console.log('Sum 1: ' + sum(3, 2));
console.log('Sum 2: ' + sum(3, 2, 6));
console.log('Sum 3: ' + sum(3, 2, 9, 10));
