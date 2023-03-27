export function removeDuplicates(arr, prop) {
  return arr.reduce((acc, obj) => {
    if (!acc.some((item) => item[prop] === obj[prop])) {
      acc.push(obj);
    }
    return acc;
  }, []);
}
