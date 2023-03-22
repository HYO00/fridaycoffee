function solution(number, k) {
    const numArr = [...number];
    const stack = [];
    
    for (let i = 0; i < numArr.length; i++) {
        while (stack.length > 0 && stack[stack.length - 1] < numArr[i] && k > 0) {
            stack.pop();
            k--;
        }
        stack.push(numArr[i]);
    }
    
    while (k > 0) {
        stack.pop();
        k--;
    }

    return stack.join('');
}

