function solution(players, callings) {
    const playerIndices = new Map();
    
    for(let i =0; i < players.length; i+=1) {
        playerIndices.set(players[i], i);
    }
    
    for(let i=0; i < callings.length; i+=1) {
        const calling = callings[i];
        const playerIdx = playerIndices.get(calling);
        
        if(playerIdx > 0){
            [players[playerIdx], players[playerIdx - 1]] = [players[playerIdx - 1], players[playerIdx]];
            playerIndices.set(players[playerIdx], playerIdx);
            playerIndices.set(players[playerIdx -1], playerIdx -1);
        }
        
    }
    return players;
}
