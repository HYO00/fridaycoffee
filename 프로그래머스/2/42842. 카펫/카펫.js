function solution(brown, yellow) {
    const total = brown + yellow;
    for (let width = 1; width <= total; width++) {
        if (total % width === 0) { 
            const height = total / width; 
            
            const yellowCount = (width - 2) * (height - 2); 
            const brownCount = (width * 2) + (height * 2) - 4; 
            
            if (yellowCount === yellow && brownCount === brown) {
                return [height, width]; 
            }
        }
    }
}