const allNumbers = (arr = []) =>{
    let sumNum = 0
    for (i = 0; i < arr.length; i++){
        sumNum += arr[i]
    }
    return sumNum
}

console.log(allNumbers([1, 2, 3, 4, 5]));
console.log(allNumbers([4, -2, 0, 20, 14, 6, 7, -4, 24, 10]))
console.log(allNumbers([]))
console.log(allNumbers([1]))
console.log(allNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ,13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 30, -20, -10, 34, 56, 78, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]))