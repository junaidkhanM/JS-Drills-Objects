
module.exports.invert = (obj) => {
    const ansObj = {};
    for (let val in obj) {
        ansObj[obj[val]] = val;
    }

    return ansObj;
}
