function solution(number, k) {
    const numArr = [...number];
    const stack = [];

    for(let i = 0; i < numArr.length; i++){ 
        
        while(stack.length && stack[stack.length-1] < numArr[i] && k > 0){
            stack.pop();
            k= k-1;
        }  
        stack.push(numArr[i]); 
        
    }
    return stack.join('').substr(0, number.length-k);
}
//while을 통해 stack에 숫자가 담겨있을 경우 반목문의 해당 요소보다 작으면 비워준다.
//stack에서 뺐으니까 k도 줄여준다.
//같은 숫자일 경우 모두 스택에 담겨있을거기 때문에 k수를 제외한 문자열을 리턴한다.
