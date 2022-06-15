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

//making the image of card present in the web and give it a unique id
function newImage(url,name){
    let image = document.createElement('img')
    image.src = url
    image.id = name
    image.style.position = 'absolute'
    //document.body.append(image)
    return image
}

//To make the cards into the objects and give the value
let princess = {
    image: newImage('./Assets/Princess.PNG', 'Princess'),
    value: 8,
    name: "Princess",
    id: "Princess",
};
let king = {
    image: newImage('./Assets/King.PNG', 'King'),
    value: 6,
    name: "King",
    id: "King",
};
let countess = {
    image: newImage('./Assets/Countess.PNG', 'Countess'),
    value: 7, 
    name: "Countess",
    id: "Countess",
};

//two copies of Prince cards
let Prince1 = {
    image: newImage('./Assets/Prince.PNG', 'Prince'),
    value: 5, 
    name: "Prince",
    id: "Prince1",
};
let Prince2 = {
    image: newImage('./Assets/Prince.PNG','Prince'),
    value: 5, 
    name: "Prince",
    id: "Prince2",
};

//two copies of Handsmaid cards
let Handsmaid1 = {
    image: newImage('./Assets/Handsmaid.PNG', 'Handsmaid'),
    value: 4, 
    name: "Handsmaid",
    id: "Handsmaid1",
};
let Handsmaid2 = {
    image: newImage('./Assets/Handsmaid.PNG', 'Handmaid'),
    value: 4, 
    name: "Handsmaid",
    id: "Handsmaid2",
};

//2 copies of Baron cards
let Baron1 = {
    image: newImage('./Assets/Baron.PNG','Baron'),
    value: 3, 
    name: "Baron",
    id: "Baron1",
};
let Baron2 = {
    image: newImage('./Assets/Baron.PNG','Baron'),
    value: 3, 
    name: "Baron",
    id: "Baron2",
};

//2 copies of priest cards
let Priest1 = {
    image: newImage('./Assets/Priest.PNG','Priest'),
    value: 2, 
    name: "Priest",
};
let Priest2 = {
    image: newImage('./Assets/Priest.PNG', 'Priest'),
    value: 2, 
    name: "Priest",
};

//5 copies of guard cards
let Guard1= {
    image: newImage('./Assets/Guard.PNG','Guard'),
    value: 1, 
    name: "Guard",
    id: "Guard1",
};
let Guard2 = {
    image: newImage('./Assets/Guard.PNG','Guard'),
    value: 1, 
    name: "Guard",
    id: "Guard2"
};
let Guard3 = {
    image: newImage('./Assets/Guard.PNG','Guard'),
    value: 1, 
    name: "Guard",
    id: "Guard3",
};
let Guard4 = {
    image: newImage('./Assets/Guard.PNG','Guard'),
    value: 1, 
    name: "Guard",
    id: "Guard4",
};
let Guard5 = {
    image: newImage('./Assets/Guard.PNG','Guard'),
    value: 1, 
    name: "Guard",
    id: "Guard5",
};


//this place for the cards to go
let deck = [princess, king, Guard1]
let discardPile = []
let playersHand = []


//Function to check if the deck of cards runs out
async function runsOut(){
    if (deck.length <= 0){
        console.log("opachiki");
    }

};
console.log(playersHand)

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
