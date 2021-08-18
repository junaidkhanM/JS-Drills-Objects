module.exports.mapObject = (obj, cb) => {
  if (cb === undefined) {
    return;
  }
  const ansObj = {};
  for (let val in obj) {
    ansObj[val] = cb(obj[val]);
  }

  return ansObj;
};
