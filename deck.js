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
   playerHandNum.push(deck.shift([0]))
   document.querySelector('#'+id).append(playerHandNum[0].image())
}

upKeep(playersHand2,'Player1Hand')


