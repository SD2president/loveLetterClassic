//checks the deck of card if it's runs out
async function runsOut(){
    if (deck.length <= 0){
        console.log("opachiki");
    }

};

//function to give cards to players 
function startOfGame(){
    upKeep(playersHand1)
    upKeep(playersHand2)
}

//This draw your card on beginning your turn
function upKeep(playerHandNum,id){
   for (let x = playerHandNum.length; x <= 2; x++){
    playerHandNum.push(deck.shift([0])) 
    document.querySelector('#'+id).append(playerHandNum[x].image)
    return playerHandNum.image
   }
}

//protoype for shuffler
/*function shuffleCards(){
    let shuffleCounter = 0;
    const id = setInterval(shuffle)
}

function shuffle(){
    if (shuffleCount === 500){

    }
    clearInterval(id)
} else {
    shuffleCount++
}*/


upKeep(playersHand1,'Player1Hand')
upKeep(playersHand1,'Player1Hand')

console.log(deck)
console.log(playersHand1)
console.log(playersHand1.length)