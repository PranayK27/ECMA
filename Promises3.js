const timeoutIn = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(time), time)
    })
}

timeoutIn(2000).then(res => console.log(`Resloved in ${res/1000} seconds`))
