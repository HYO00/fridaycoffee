function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    let count = 0;
    let result 
    function dfs(str) {
        
        if(str === word){
            result = count;
        }
        
        if(str.length === 5){
            return;
        }
        
        for(let i =0; i < vowels.length; i+=1){
            count+=1;
            dfs(str + vowels[i]);
        }
    }
    
    dfs("")
    return result;
}