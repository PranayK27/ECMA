var p1 = new Promise((resolve, reject) => {
    if (true)
        throw new Error("rejected!");
    else
        resolve(4);
});
p1.then((val) => val + 2)
    .then((val) => console.log("got ", val))
    .catch((err) => console.log("error: ", err.message));

var p2 = new Promise((resolve, reject) => {
    resolve(4);
});
p2.then((val) => val + 2)
    .then((val) => { throw new Error("step 2 failed!") })
    .then((val) => console.log("got ", val))
    .catch((err) => console.log("error: ", err.message));
