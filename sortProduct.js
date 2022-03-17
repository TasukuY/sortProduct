
let sortnum = arr => {
    let numArr = [];
    let pairArr = [];
    let returnArr = [];
    for(let i = 0; i < arr.length; i++){
        let pair = [];
        let index = i+1;
        numArr.push(arr[i] * index);
        pair.push(arr[i] * index);
        pair.push(index);
        pairArr.push(pair);
    }
    // console.log(numArr)
    // console.log(pairArr)
    // console.log(Math.max(...numArr));
    for(let i = 0; i < arr.length; i++){
        let max = Math.max(...numArr);
        let maxIndex = numArr.indexOf(max);
        returnArr.unshift(pairArr[maxIndex][0] / pairArr[maxIndex][1]);
        numArr.splice(maxIndex, 1);
        pairArr.splice(maxIndex, 1);
    }
    return returnArr;
}

console.log(sortnum([23, 2, 3, 4, 5]));


let arr = [23, 2, 3, 4, 5]

sortProduct = (arr) => {
    let array = arr.map(elem => [elem, arr.indexOf(elem)+1])
    let newArr = array.map(elem => [elem[0]*elem[1], elem[1]])
    let sortedArr = newArr.sort((a,b) => a[0]-b[0])
    let finalArr = sortedArr.map(elem => elem[0]/elem[1])
    console.log(finalArr)
}
sortProduct(arr)