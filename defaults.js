
module.exports.defaults = (obj, defaultProps) => {
    for (let val in defaultProps) {
        if (obj.val === undefined) {
            obj[val] = defaultProps[val];
        }
    }

    return obj;
}