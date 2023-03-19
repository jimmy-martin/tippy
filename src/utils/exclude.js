module.exports.exclude = (arr, keysToExclude) => {
  console.log(arr);
  for (let key of keysToExclude) {
    delete arr[key];
  }
  console.log(arr);
  return arr;
};
