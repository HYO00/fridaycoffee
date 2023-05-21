function solution(n, wires) {
    const graph = [];
    for(let i =0; i < n; i+=1){
        graph.push(new Array(n).fill(false));
    }

    for(let [a,b] of wires) {
        graph[a-1][b-1] = true;
        graph[b-1][a-1] = true;
    }
    
    let minDifference = Infinity;
    
    for (let i = 0; i < wires.length; i++) {
        const [a, b] = wires[i];
        graph[a - 1][b - 1] = false;
        graph[b - 1][a - 1] = false;
    
        const visited = new Array(n).fill(false);
    
        const countA = dfs(a - 1, visited);
        const countB = n - countA;
    
        const difference = Math.abs(countA - countB);
        minDifference = Math.min(minDifference, difference);
    
        graph[a - 1][b - 1] = true;
        graph[b - 1][a - 1] = true;
    }
    
    function dfs(node, visited) {
        visited[node] = true;

        let count =1;
            
        for(let i =0; i < graph.length; i+=1){
            if (graph[node][i] && !visited[i]) {
                count += dfs(i, visited);
            }
        }

        return count;
    }
    return minDifference;
}