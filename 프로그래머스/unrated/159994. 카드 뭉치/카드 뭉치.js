function solution(cards1, cards2, goal) {
    let answer = '';
    let goalArr = [];
    
    goal.forEach((el,idx)=>{
        if(cards1[0] === el){
            goalArr.push(cards1.shift());
        }
        if(cards2[0] === el){
             goalArr.push(cards2.shift());
        }
    })
    
    if(goalArr.join() === goal.join()){
        answer = "Yes"
    }else{
        answer = "No"
    }
    return answer;
}