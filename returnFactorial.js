const printNum = (num) =>{
    if (num <= 0 || num === 1)
        return 1
    
    
    for (let i = num - 1; i > 1; i--){
        num *= i    
    }
    return num
}
console.log(printNum(5))
console.log(printNum(10))
console.log(printNum(0))
console.log(printNum(-4))