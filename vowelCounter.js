const vowel = ["a", "e", "i", "o", "u"]

function countVowel(str){
    let count = 0
    for(let char of str.toLowerCase()){
        if (vowel.includes(char)){
            count++
        }
    }
    return count
}

const testCase1 = "Hello World"
console.log(countVowel(testCase1))

const testCase2 = "The quick brown fox jumps over the lazy dog"
console.log(countVowel(testCase2))

const testCase3 = "aeiou"
console.log(countVowel(testCase3))

const testCase4 = "bcdfghjklmnpqrstvwxyz"
console.log(countVowel(testCase4))
