/* 
let person = {
    name : "Per",
    age: 30,
    country: "Norway"
};

(function(){
    let string = person.name + " is " + person.age + " years old and lives in " + person.country;
    console.log(string)
})(); 

(function() {
    var foo = 3;
    console.log(foo);
})();  */
/* 
function getRandomCard(){
        
    let randomNumber =   Math.floor(Math.random() * 13) + 1;
    if(randomNumber > 10){
        return 10
        console.log(10)
    }else if(randomNumber === 11){
        return 11
        console.log(11)
    }else{
        return randomNumber;
        console.log(randomNumber)
    }
    
}

let i = getRandomCard();
console.log(i); */
/* let nameof; if (Math.random() > 0.5){
    console.log(nameof = "Mike") 
}   else {   console.log( nameof = "Susan")} 
 */

/* 
let largeCountries = ["Tuvalu","India","Indonesia","Monaco"];
largeCountries.push("China");
largeCountries.push("Pakistan");
// largeCountries.pop()
largeCountries.unshift("Pakistan")
largeCountries.shift()
console.log(largeCountries)
 */


/* 
let x = (function(){
    let hands = ["rock","paper","scissor"]
    let random = Math.floor(Math.random() * 3 )
    console.log( );
    if(random === 0){
        return hands[0]
    }else if(random === 1){
        return hands[1]
    }else{
        return hands[2]
    }
})();
console.log(x);

let hands = ["rock","paper","scissor"]
function getHand(){
    let randomIndex =  Math.floor(Math.random() * 3 );
    return hands[randomIndex]
}
console.log( getHand()) */

let fruits = ["🍎","🍊","🍎","🍎","🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function makePieceFruits(){
    for(let i = 0; i < fruits.length; i++){

        if(fruits[i] === "🍎"){
            appleShelf.textContent += "🍎"
        }else{
            orangeShelf.textContent += "🍊"
        }
    }
}
makePieceFruits()
console.log(fruits[2])