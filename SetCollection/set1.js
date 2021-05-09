let names = new Set();
names.add('Name 1');
names.add('Name 2');
names.add('Name 2');
names.add('Name 3');
names.add('Name 3');

console.log('Size: ' + names.size);
console.log('Check Name 3 Already: ' + names.has('Name 3'));

console.log('Name List');
for (let name of names) {
    console.log(name);
    console.log('----------');
}

console.log('Name List');
names.forEach(name => {
    console.log(name);
    console.log('----------');
});

names.delete('Name 3');
console.log('Size: ' + names.size);

names.clear();
console.log('Size: ' + names.size);
