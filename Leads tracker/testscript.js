/* 
let click =  document.getElementById("div-el");
let text = document.getElementById("h1-el")
click.addEventListener("click", function(){
    
    text.textContent = "Click"

})

const welcomEl = document.getElementById("welcom-el")
function greetUser(greeting,name){
    welcomEl.textContent = ` ${greeting}, ${name} 🖐️ `
   
}
greetUser("Welcome","Dony")
 */

let letters = ["A","B","C","D","E"]
function getFirst(arr){
    return arr[1]
}
console.log(getFirst(letters))