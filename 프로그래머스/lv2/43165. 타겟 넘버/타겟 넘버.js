function solution(numbers, target) {
    let answer = 0;
    
    function dfs(curIdx, sum) {
        if(curIdx === numbers.length){
            if(sum === target){
                answer +=1;
            }
            return; 
        }
        dfs(curIdx + 1, sum + numbers[curIdx]);
        dfs(curIdx + 1, sum - numbers[curIdx]);
    }
    
    dfs(0, 0);
    
    return answer;
}
    