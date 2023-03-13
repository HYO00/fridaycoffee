function solution(s, n) {
    var answer = '';
    const alfabet = "abcdefghijklmnopqrstuvwxyz"
    
    for(let i =0; i < s.length; i++){
        if(s[i] === " "){
            answer += " "
        } 
        else if(s[i] === s[i].toLowerCase()){
            let findIdx = alfabet.indexOf(s[i])
            let moveIdx = (findIdx + n) % alfabet.length
            answer += alfabet[moveIdx]
        }else{
             findIdx = alfabet.indexOf(s[i].toLowerCase())
             moveIdx = (findIdx + n) % alfabet.length
             answer += alfabet[moveIdx].toUpperCase()
        } 
    }
    return answer;
}
