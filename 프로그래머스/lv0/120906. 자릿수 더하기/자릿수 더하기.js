function solution(n) {
    const answer = String(n).split('').reduce((ac,cur) => {
        return Number(ac) + Number(cur)
    },0)
    return answer;
}