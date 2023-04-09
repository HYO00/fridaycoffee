function solution(n, computers) {

    let answer = 0;
    const visitedArr = [];
    
    for(let i =0; i < n; i+=1){
        if(!visitedArr[i]){
            dfs(i)
            answer+=1;
        }
    }
    
    function dfs (index) {
        visitedArr[index] = true;
        for(let i =0; i < n; i+=1){
            if(!visitedArr[i] && computers[index][i]){
                dfs(i); 
            }
        }
    }
    
    return answer;
}
//주어진 컴퓨터들이 몇개의 네트워크로 이뤄졌는지 찾는다!
//컴퓨터의 개수만큼 반복문을 돌면서 해당 컴퓨터가 다른 컴퓨터와 연결되었는지 확인한다. 
//내가 해당 컴퓨터를 확인할 땐 확인했다고 표시를 해줌으로 또 다시 방문하지 않는다. 
