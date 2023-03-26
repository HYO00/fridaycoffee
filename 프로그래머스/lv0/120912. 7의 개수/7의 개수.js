function solution(array) {
    var answer = 0;
    const newArr = [...array.join('')];
    const filteredArr = newArr.filter((el) => el === '7')
    return filteredArr.length;
}