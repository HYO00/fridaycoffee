function solution(progresses, speeds) {
    const resultArr = [];
    const queue = [];
    
    for(let i =0; i< progresses.length; i+=1 ){
        const day =  Math.ceil((100 - progresses[i]) / speeds[i]) ;
        queue.push(day)
    }
    
    let maxDay = queue[0];
    let count = 0;
    
    while(queue.length){
        let day  = queue.shift();
        if(day <= maxDay){
            count+=1;
        }else{
            resultArr.push(count);
            count=1;
            maxDay = day;
        }  
    }
    resultArr.push(count);
    return resultArr;
}