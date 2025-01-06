function promiseTimeout(ms) {
    return new Promise((resovel,reject) => {
        setTimeout(resovel,ms);
    });
}

promiseTimeout(2000)
.then(() => {
    console.log("Done!!");
    return promiseTimeout(1000);
})

.then(() => {
    console.log("Also done!!");
    return Promise.resolve(42);
})

.then((result) => {
    console.log(result);
})

.catch(() => {
    console.log("Erro!!")
});