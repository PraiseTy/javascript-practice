const removeDuplicate = (str) =>{
    let mystr = ""
    for (let char of str){
        if (mystr.includes(char)== false){
            mystr += char
        }
    }
    return mystr
}

console.log(removeDuplicate("aabbbcccdeeeee"))
console.log(removeDuplicate("ghiiikkkl"))