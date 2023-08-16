let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(countEl)

let count = 0

function myPraise(){
    count += 1
    countEl.textContent = count 
    console.log(count)
}

function save(){
    let savenum = count + " - "
    saveEl.textContent  += savenum
    console.log(count)
    countEl.textContent = 0
    count = 0 
}
