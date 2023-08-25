const getlargestNumbers = (arr = []) => {
    let largestNumber = 0
    let secondLargestNumber = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > largestNumber){
            secondLargestNumber = largestNumber
            largestNumber = arr[i]
        }
        else if (arr[i] > secondLargestNumber && arr[i] != largestNumber){
            secondLargestNumber = arr[i]
        }
    }
    return [largestNumber, secondLargestNumber]

}

console.log(getlargestNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(getlargestNumbers([4, -2, 0, 20, 14, 6, 7, -4, 24, 10]))
