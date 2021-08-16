module.exports.mapObject = (obj, cb) => {
    const ansObj = {};
    for (let val in obj) {
        ansObj[val] = cb(obj[val]);
    }

    return ansObj;
}