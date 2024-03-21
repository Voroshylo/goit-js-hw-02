function getExtremeElements(array) {
  const firstElements = array[0];
  const lastIndex = array.length - 1;
  const lastElements = array[lastIndex]
  return [firstElements, lastElements];
}
console.log(getExtremeElements([1, 2, 3, 4, 5]));
console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));