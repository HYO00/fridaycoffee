function solution(numbers) {
    const numArr = numbers.split('');
    const visited = Array(numArr.length).fill(false);
    const result = new Set(); // 중복 제거
    
    function dfs(idx, str) {
        if (str.length > 0) {
            const num = parseInt(str);
            if (isPrime(num)) result.add(num);
        }
        if (idx === numArr.length) return;


        for (let i = 0; i < numArr.length; i++) {
            if (!visited[i]) {
                visited[i] = true;
                dfs(idx + 1, str + numArr[i]);
                visited[i] = false;
            }
        }
    }
    
     function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    
    dfs(0, '');
    
    console.log([...result])
    
    return result.size
}