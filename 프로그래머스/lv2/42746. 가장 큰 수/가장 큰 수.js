function solution(numbers) {
    const quickSort = (numbers)  => {
        if(numbers.length <= 1) return numbers;
        const left = [];
        const right = [];
        const pivot = numbers[0];

        for(let i=1; i < numbers.length; i++){
            let firstN = String(numbers[i]) + String(pivot)
            let secondN = String(pivot) +  String(numbers[i])
        
            if(firstN < secondN) right.push(numbers[i])
            else left.push(numbers[i])
        }
        
        const leftSorted = quickSort(left);
        const rightSorted = quickSort(right);
        
        return [...leftSorted, pivot, ...rightSorted]
    }
    
    const sortedArr = quickSort(numbers)
    
    if(sortedArr[0] === 0){
        return '0';
    }else{
        return sortedArr.join('')
    }

}