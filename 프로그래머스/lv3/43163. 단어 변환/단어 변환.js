function solution(begin, target, words) {
    const visited = [];
    let result = 0;
    
    function dfs(word, cnt){
        if(word === target) {
            result = cnt;
            return;
        }
        for(let i =0; i < words.length; i+=1){
            if(!visited[i]){
                const difCnt = [...word].filter((el, idx) => el !== words[i][idx]).length
                if(difCnt === 1){
                    visited[i] =true;
                    dfs(words[i], cnt +1)
                    visited[i] = false;
                }
            }
        }
    }
    dfs(begin, 0);
    return result;
}
//배열에서 지금 단어에서 한글자만 바꿔서 만들수 있는 단어를 찾는다 <->
//어떻게 찾나? 일단 바꿀수있는 단어는 현재 단어와 길이가 같고 2글자 이상 다르면 안된다. 
//배열에서 찾았다면 해당 단어는 배열에서 한 번만 골라 바꿀수있다.
//즉 배열에 있는 단어는 한 번만 선택 가능하다. 