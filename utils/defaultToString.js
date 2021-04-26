function defaultToString(item){
   return String(item).toString();
}

// console.log(defaultToString(123.34));
// console.log(defaultToString('qwe'));
// console.log(defaultToString(null));
// console.log(defaultToString(undefined));
// console.log(defaultToString(new Date()));
// console.log(defaultToString([1,2,3]));

module.exports = defaultToString;