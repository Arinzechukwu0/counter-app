let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0

 function increment(){
     count += 1
     countEl.innerText = count
 }

 function save(){
    saveCount = count + " - "
    saveEl.innerHTML += saveCount
    countEl.innerText = 0
    count = 0
 }