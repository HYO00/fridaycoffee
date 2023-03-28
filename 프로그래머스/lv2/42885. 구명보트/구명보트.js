function solution(people, limit) {
    let answer = 0;
    const stack = [];
    const sortedArr = people.sort((a,b) => b-a);

    for(let i =0; i < sortedArr.length; i++){
        stack.push(sortedArr[i]);
        if(stack[stack.length-1] + 40 > limit){
            stack.pop();
            answer+=1;
        }
        while(stack.length && stack[stack.length-1] +stack[stack.length-2] <= limit){
            stack.pop();
            stack.pop();
            answer+=1;
        }
        
    }
    if(stack.length){
        answer += stack.length;
    }
    return answer;
}