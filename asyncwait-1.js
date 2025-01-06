function promiseTimeout(ms) {
    return new Promise((resovel,reject) => {
        setTimeout(resovel,ms);
    });
}

async function run () {
    //logic

    console.log("Staart!!");
    //try take of awit and compare
    await promiseTimeout(2000);
    console.log("Stop!!");
}

run();
