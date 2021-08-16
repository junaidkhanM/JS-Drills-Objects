module.exports.pairs = (obj) => {
   const arr = [];
   for (let val in obj) {
       arr.push([val, obj[val]]);
   }

   return arr;
}