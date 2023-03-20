function solution(numbers) {
  const compareFn = (a, b) => {
    const firstN = String(a) + String(b);
    const secondN = String(b) + String(a);
    if (firstN < secondN) {
      return 1;
    } else if (firstN > secondN) {
      return -1;
    } else {
      return 0;
    }
  };

  const sortedArr = numbers.sort(compareFn);

  if (sortedArr[0] === 0) {
    return "0";
  } else {
    return sortedArr.join("");
  }
}