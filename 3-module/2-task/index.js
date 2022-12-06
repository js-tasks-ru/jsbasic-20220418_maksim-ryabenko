function filterRange(arr, a, b) {
  let newArr = arr.slice();
  return newArr.filter((item) => item >= a && item <= b);
}
