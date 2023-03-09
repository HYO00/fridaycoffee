function solution(babbling) {
    const pronArr = ["aya", "ye", "woo", "ma"];
    let copyBabbling = babbling.slice();

    for(let i =0; i < copyBabbling.length; i++){
        for(let j=0; j < pronArr.length; j++){
            copyBabbling[i] =copyBabbling[i].replace(pronArr[j], ' ')
         }
        copyBabbling[i] = copyBabbling[i].trim()
    }

    const result = copyBabbling.filter((el) => (el === ''))

    return result.length;
}
