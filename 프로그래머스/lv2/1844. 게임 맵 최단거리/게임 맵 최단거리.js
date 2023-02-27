function solution(maps) {
    const directionArr = [[1,0], [0,1], [0,-1], [-1,0]];
    const mapN = maps.length;
    const mapM = maps[0].length;
    const queue = [[0,0]];
    let visitedArr = [];
    let x,y 
    
    if(!maps[0][1] && !maps[1][0] || !maps[mapN-1][mapM-2] && !maps[mapN-2][mapM-1]) {
        return -1;
    }
    
    for(let i = 0; i < maps.length; i++){
        visitedArr.push(new Array(mapM).fill(false))
    }
    
    while(queue.length) {
        let curPoint = queue.shift();
        visitedArr[curPoint[0]][curPoint[1]] = true;
        
        for(value of directionArr){
            x = curPoint[0] + value[0];
            y = curPoint[1] + value[1];
            
            if(x < 0 || y < 0 || x >= mapN || y >= mapM) continue;
            
            if(!visitedArr[x][y] && maps[x][y] === 1){
                maps[x][y] = maps[curPoint[0]][curPoint[1]] +1;
                  queue.push([x,y])
            }
            
            if(!visitedArr[x][y]){
                visitedArr[x][y] = true;
            }    
        }
        
    }
    
    return maps[mapN-1][mapM-1] === 1 ? -1 :maps[mapN-1][mapM-1];
}