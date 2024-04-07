function solution(s) {
    const numArr = s.split(' ');
    
    const maxNum = Math.max(...numArr);
    const minNum = Math.min(...numArr);
    
    return `${minNum} ${maxNum}`
}