function solution(number) {
    const combArr = [];
    let result =0;
    
    function dfs(start, count , arr){
        if(arr.length === 3){
            const sumResult = arr.reduce((acc,cur) => acc +cur,0);
            if(!sumResult) result+=1;
            return;
        }
        for(let i=start; i < number.length; i+=1){
                let choice = number[i];
                dfs(i+1, count-1, arr.concat(choice));
        }
    }
    dfs(0, count =3, arr =[])
    return result
}
//해당 배열에서 3개를 골라서 3개의 수가 0이 되는지 확인한고 카운트를 올려준다. 