//playing the card
//activating the card
//discard pile done
//when ending your turn
//guess a card with the "guard" ability
//comparing the card without reveling the card to another players
//score tracker
//when deck of cards runs out, then compare card from the remaining players done
//discarding the "princess card" effect
//win con is met 
//deck of cards done
//hidden parts

//making the card real!!
function newImage(url){
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'absolute'
    //document.body.append(image)
    return image
}

//To make the cards into the objects and give the value
let princess = {
    image: newImage('./Assets/Princess.PNG'),
    value: 8,
    name: "Princess",
    id: "Princess",
};
let king = {
    image: newImage('./Assets/King.PNG'),
    value: 6,
    name: "King",
    id: "King",
};
let countess = {
    image: newImage('./Assets/Countess.PNG'),
    value: 7, 
    name: "Countess",
    id: "Countess",
};

//two copies of Prince cards
let Prince1 = {
    image: newImage('./Assets/Prince.PNG'),
    value: 5, 
    name: "Prince",
    id: "Prince1",
};
let Prince2 = {
    image: newImage('./Assets/Prince.PNG'),
    value: 5, 
    name: "Prince",
    id: "Prince2",
};

//two copies of Handsmaid cards
let Handsmaid1 = {
    image: newImage('./Assets/Handsmaid.PNG'),
    value: 4, 
    name: "Handsmaid",
    id: "Handsmaid1",
};
let Handsmaid2 = {
    image: newImage('./Assets/Handsmaid.PNG'),
    value: 4, 
    name: "Handsmaid",
    id: "Handsmaid2",
};

//2 copies of Baron cards
let Baron1 = {
    image: newImage('./Assets/Baron.PNG'),
    value: 3, 
    name: "Baron",
    id: "Baron1",
};
let Baron2 = {
    image: newImage('./Assets/Baron.PNG'),
    value: 3, 
    name: "Baron",
    id: "Baron2",
};

//2 copies of priest cards
let Priest1 = {
    image: newImage('./Assets/Priest.PNG'),
    value: 2, 
    name: "Priest",
};
let Priest2 = {
    image: newImage('./Assets/Priest.PNG'),
    value: 2, 
    name: "Priest",
};

//5 copies of guard cards
let Guard1= {
    image: newImage('./Assets/Guard.PNG'),
    value: 1, 
    name: "Guard",
    id: "Guard1",
};
let Guard2 = {
    image: newImage('./Assets/Guard.PNG'),
    value: 1, 
    name: "Guard",
    id: "Guard2"
};
let Guard3 = {
    image: newImage('./Assets/Guard.PNG'),
    value: 1, 
    name: "Guard",
    id: "Guard3",
};
let Guard4 = {
    image: newImage('./Assets/Guard.PNG'),
    value: 1, 
    name: "Guard",
    id: "Guard4",
};
let Guard5 = {
    image: newImage('./Assets/Guard.PNG'),
    value: 1, 
    name: "Guard",
    id: "Guard5",
};


//this place for the cards to go
let deck = []
let discardPile = []
let playersHand = []
//Function to check if the deck of cards runs out
async function runsOut(){
    if (deck.length <= 0){
        console.log("opachiki");
    }

};
console.log(deck.length)
runsOut()


/*
function gameCards(id,num,ability){
    let name = id
    let value = num
    let use = ability
    return id,num,ability
}

let card1 = gameCards(guard,1,apple) */

/*deck.push(card1)
console.log(deck[2].name)*/
