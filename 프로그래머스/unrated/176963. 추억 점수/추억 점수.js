function solution(name, yearning, photo) {
    const result = [];
    const obj= new Object();

    for(let i = 0; i < name.length; i+=1){
        obj[name[i]] = yearning[i];
    }

    photo.forEach((el) => {
        let sum = 0;
        el.forEach((al) => {
            if(!isNaN(obj[al])) sum += obj[al];
        })
        result.push(sum);
    })

    return result;
}