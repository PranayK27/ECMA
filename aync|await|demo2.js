function calculateAfter2Sec(param) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(param * 2);
        }, 2000);
    });
}

async function sum(a, b) {
    a = await calculateAfter2Sec(a);
    b = await calculateAfter2Sec(b);
    return a + b;
}

sum(1, 2).then(console.log);
