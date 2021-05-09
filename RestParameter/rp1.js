function myFunc(a, b, ...args) {
    console.log('Length: ' + args.length);
    console.log(args);
}
myFunc(1, 2);
myFunc(1, 2, 3, 4);
