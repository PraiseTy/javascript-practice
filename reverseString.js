const reverseString = str => {
    let a = ""
    let b = ""
    for(let i = str.length-1; i >= 0; i--){
        a = str[i].toLowerCase();
        if (a >="a" && a<= "z"){
            b += a
        }
      }
      return b;
    }
console.log(reverseString("Hello, I’m Jappy-Lappy-Happy"))
console.log(reverseString("Hello, I’m Jappy-Lappysdtfgyjhkml;,/.y"))
