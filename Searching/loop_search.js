const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const loopSearch = (arr, value) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return console.log(`value found at index ${i}`);
    // else console.log(`value not found at index ${i}`);
    return -1;
  }
};
loopSearch(array, 4);
