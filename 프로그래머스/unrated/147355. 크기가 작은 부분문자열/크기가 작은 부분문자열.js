function solution(t, p) {
    let answer = 0;
    const pLen = p.length;
    
    for(let i =0; i < t.length-(pLen-1); i++){
        let curNum = t.slice(i, pLen+i)
        if(Number(curNum) <= Number(p)){
            answer +=1;
        }
    }
    return answer;
}