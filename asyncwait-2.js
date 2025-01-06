function promiseTimeout(ms) {
    return new Promise((resovel,reject) => {
        setTimeout(resovel,ms);
    });
}

async function LongRunningOperation() {
    //logic
    return 42;
}

async function run () {
    //logic

    console.log("Staart!!");
    await promiseTimeout(2000);
    
    //try take of awit out and see

    const reponse = await LongRunningOperation();
    console.log(reponse);
     

    console.log("Stop!!");
}

run();
