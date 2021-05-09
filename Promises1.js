var p = new Promise((resolve, reject) => resolve(5));
p.then((val) => console.log('Value: ' + val));
