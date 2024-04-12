function solution(A,B){

    const sortedArr = A.sort((a,b)=> a-b);
    const sortedArr2 = B.sort((a,b)=> a-b);

    let minSum = 0;
    for (let i = 0; i < A.length; i++) {
        minSum += A[i] * B[A.length - 1 - i];
    }
   
    return minSum;
}