module.exports.keys = (obj) => {
    const arr = [];
    for (let key in obj) {
        arr.push(key);
    }

    return arr;
}