function solution(babbling) {
    let pronArr = ["aya", "ye", "woo", "ma"];
    let copyBabbling = babbling;

    for(let i =0; i < copyBabbling.length; i++){
        for(let j=0; j < pronArr.length; j++){
            copyBabbling[i] =copyBabbling[i].replace(pronArr[j], '1')
         }  

        if(copyBabbling[i].includes('e')){
          copyBabbling[i] = copyBabbling[i].replace('e', 'z')
        }
    }
    
    const result = copyBabbling.filter((el) => (!Number.isNaN(Number(el))))

    return result.length;
}
