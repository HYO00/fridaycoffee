function solution(n, m, section) {
    let answer = 0;
    let paintNum = 0
    for(let i =0; i < section.length; i+=1){
        if(paintNum < section[i]){
            paintNum = section[i] + m - 1;
            answer+=1;
        }
    }
    return answer;
}