const removeDuplicate = (str) => [...new Set(str)].join('')

console.log(removeDuplicate("aabbbcccdeeeee"))
console.log(removeDuplicate("ghiiikkkl"))