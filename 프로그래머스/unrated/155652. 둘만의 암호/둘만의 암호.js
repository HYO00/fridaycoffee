function solution(s, skip, index) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let answer = '';
    let newAlphabet = '';
    
    for (let i = 0; i < alphabet.length; i += 1) {
        if (!skip.includes(alphabet[i])) {
            newAlphabet += alphabet[i];
        }
    }

    for (let i = 0; i < s.length; i += 1) {
        const char = s[i];
        const idx = newAlphabet.indexOf(char) + index;

        const correctedIdx = idx >= 0 ? idx : idx + newAlphabet.length;

        answer += newAlphabet[correctedIdx % newAlphabet.length];
    }

    return answer;
}