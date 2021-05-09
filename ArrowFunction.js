const sum1 = (x, y) => x + y;
console.log('Result 1: ' + sum1(6, 15));

const sum2 = (x, y) => {
    return x + y;
};
console.log('Result 2: ' + sum2(12, 3));

const sum3 = (x) => {
    return (y) => {
        return x + y;
    }
};
console.log('Result 3: ' + sum3(21)(3));

var setIdAndNameAndAge = (id, name, age) => ({ id: id, name: name, age: age });
console.log(setIdAndNameAndAge ('st01', 'Name 1', 20));
