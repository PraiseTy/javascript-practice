const countVowel = str => {
    const vowel = ["a", "e", "i", "o", "u"]
    let count = 0
    for(let char of str.toLowerCase()){
        if (vowel.includes(char)){
            count++
        }
    }
    return count
}


console.log(countVowel("Hello World"))

console.log(countVowel("The quick brown fox jumps over the lazy dog"))

console.log(countVowel("aeiou"))

console.log(countVowel("bcdfghjklmnpqrstvwxyz"))
