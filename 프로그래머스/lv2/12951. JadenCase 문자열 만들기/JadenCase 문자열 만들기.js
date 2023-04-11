function solution(s) {
    const words = s.split(' ');
    const result = words.map((word) => {
        if(word === '') return word;
        word = word.toLowerCase();
        if(!isNaN(word[0])){
            return word;
        }else{
            return word = word.replace(word[0], word[0].toUpperCase());
        }
    })  
    return result.join(' ');
}
