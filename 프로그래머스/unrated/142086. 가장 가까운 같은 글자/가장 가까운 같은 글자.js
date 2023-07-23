function solution(s) {
    let answer = [];
    const map = new Map();
    for(let i=0; i < s.length; i+=1){
        if(!map.has(s[i])){
            answer.push(-1)
        }else{
            answer.push(i - map.get(s[i]));
        }
        map.set(s[i], i);
    }
    return answer;
}