function solution(common) {
    var answer =0;
 
    const 등차 = common[common.length-1] - common[common.length-2]

    const 등비 = common[common.length-1] / common[common.length-2]

    if(common[1] - common[0] === 등차){
        answer = common[common.length-1] + 등차
    }else{
        answer = common[common.length-1] * 등비
    }
    return answer;
}