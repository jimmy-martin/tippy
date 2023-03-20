module.exports.exclude = (arr, keysToExclude) => {
  if (!arr) {
    return null;
  }
  for (let key of keysToExclude) {
    delete arr[key];
  }
  return arr;
};
