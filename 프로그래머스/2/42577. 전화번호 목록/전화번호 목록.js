function solution(phone_book) {
    let phoneBookMap = new Map();

    // 해시맵에 전화번호 저장
    for (let phoneNumber of phone_book) {
        phoneBookMap.set(phoneNumber, true);
    }

    // 각 전화번호의 일부분이 다른 전화번호의 접두어인지 확인
    for (let phoneNumber of phone_book) {
        for (let i = 1; i < phoneNumber.length; i++) {
            let prefix = phoneNumber.substring(0, i);
            if (phoneBookMap.has(prefix)) {
                return false;
            }
        }
    }

    return true;
}
//phone_book 배열의 요소들을 map 객체에 set  
//key 값에 배열의 각 요소를 저장 value 값에 true 
//반복문 돌면서 맵 키가 다른 곳에 포함되는지 여부 찾기 