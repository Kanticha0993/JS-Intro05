function yay0rNay() {
    return new Promise((resovel,reject) => {
        const val = Math.round(Math.random() * 1);
        // 0 or 1 at random
        val ? resovel("Lucky!!") : reject("Nope-_-");
    });
}

async function msg () {
    try {
        const msg = await yay0rNay();
        console.log(msg);
    }catch (err) {
        console.log(err);
    }
}

msg();
msg();
msg();
msg();
msg();
msg();
msg();
