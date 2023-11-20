function solution(participant, completion) {
   const hashMap = new Map();
    
    // 참가자 목록을 객체에 추가
    for (let person of participant) {
        if (hashMap[person]) {
            hashMap[person] += 1;
        } else {
            hashMap[person] = 1;
        }
    }
    
    // 완주자 목록에서 빼기
    for (let person of completion) {
        hashMap[person] -= 1;
    }
    
    // 남아있는 완주하지 못한 사람 찾기
    for (let key in hashMap) {
        if (hashMap[key] > 0) {
            return key;
        }
    }
}