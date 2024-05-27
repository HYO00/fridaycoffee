function solution(n) {
    let maxLangth =0;
    let num =0;
    const results = [];
    while(num < n){
        maxLangth += 1;
        num = maxLangth * (maxLangth + 1) / 2;
    }
    
     for (let i = 1; i <= maxLangth; i += 1){
         
        let sumOfFirstKNumbers = i * (i + 1) / 2;

        if ((n - sumOfFirstKNumbers) % i === 0) {
              let start = (n - sumOfFirstKNumbers) / i + 1;
              let sequence = [];
              for (let j = 0; j < i; j++) {
                sequence.push(start + j);
              }
              results.push(sequence);
            }
     }
    return results.length;
    
}