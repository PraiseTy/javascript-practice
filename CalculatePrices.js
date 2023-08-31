const shop1 = {
    mango: 20,
    banana: 30.4,
    apple: 15.40,
    orange: 40.12
  }
  
  const shop2 = {
    mango: 50,
    banana: 26,
    apple: 35.71,
    orange: 15.78
  }

  //Print the total cost of 5 oranges from shop2 and 7 apples from shop1

  totalCost = (shop1.orange * 5) + (shop2.apple * 7) 
  console.log(totalCost)

//Add a new fruit to both shops and specify any price you want.
shop1["pineapple"] = 22.08
console.log(shop1)
shop2["pineapple"] = 56.05
console.log(shop2)

// Create a new object that comprises the sum of the fruit of the same type from both shops, then printing the result to the screen.
let fruitSum = {}
for (let fruit in shop1){
    if (shop2.hasOwnProperty(fruit)){
        fruitSum[fruit] = shop1[fruit] + shop2[fruit]
    }
}

console.log(fruitSum)
