    
    let cards = [] // array
    let sum = 0;
    let hasBlackJack = false;
    let isAlive = false;

        
    console.log(cards);

    let cardContent = document.getElementById('cards-el');
    let newCardContent = document.getElementById('newCards-el');
    let allCardContent = document.getElementById('allCards-el');
    let sumContent = document.getElementById('sum-el');
    let resultContent = document.getElementById('result-el');

    //Object
    let player = {
         
        name: "Per",
        chips: 145
    }
    
    let playerEl = document.getElementById('player-el');
    playerEl.textContent = player.name + ": $" + player.chips ;
  
   
    let btn = document.querySelector('button');

    function startGame() {

        isAlive = true       
        let firstcard =  getRandomCard() // Math.floor(Math.random() * 11) + 2;
        let secondCard = getRandomCard()// Math.floor(Math.random() * 11) + 2;
        cards = [firstcard,secondCard];
        sum = firstcard + secondCard
        renderGame()

    }

    function getRandomCard(){
        
        let randomNumber =   Math.floor(Math.random() * 13) + 1;
        if(randomNumber > 10){
            return 10
        }else if(randomNumber === 11){
            return 11
        }else{
            return randomNumber;
        }
        
    }
    // getRandomCard()
    function renderGame() {

        cardContent.textContent = "Cards: "
        for (let i = 0; i < cards.length; i++) {
            cardContent.textContent = " firstCard : " + cards[0] + " secondCard: " + cards[1];
            console.log(cards[i])
        }
        
        sumContent.textContent = "The Sum: " + sum;

        if(sum  <= 20){
            console.log("Do you want to draw a new card 🤦‍♂️")
            resultContent.textContent = "Do you want to draw a new card 🤦‍♂️"
        }else if(sum === 21){
            console.log("Wohoo! you have get a Blackjack 😁")
            resultContent.textContent = "Wohoo! you have get a Blackjack 😁"
            hasBlackJack = true
        }else{
            console.log("You are out of the game 😥")
            resultContent.textContent = "You are out of the game 😥"
            isAlive = false
        }

    }

 function newCard(){
      
    if( isAlive === true && hasBlackJack === false ){
        let card = getRandomCard();
        sum += card;
        //let cardnew = cards.push(card);
        cards.push(card);
        allCardContent.textContent = "All Cards: " + cards;
        newCardContent.innerHTML += "New Card : " + card;
        console.log(card)
        renderGame();
    }
     
} 

btn.addEventListener('click', function(){

    startGame();
     
});