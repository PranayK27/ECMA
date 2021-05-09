const isSmallThenTen = (num) => {
    return new Promise((resolve, reject) => {
        if (num < 10) {
            resolve(true)
        } else {
            reject(false)
        }
    })
};

isSmallThenTen(91)
    .then(res => console.log('The number is smaller then 10'))
    .catch(err => console.log('The number is greater than 10'));

isSmallThenTen(5)
    .then(res => console.log('The number is smaller then 10'))
    .catch(err => console.log('The number is greater than 10'));
