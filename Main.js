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
    return image
}

//To make the cards into the objects and give the value
let princess = {
    image: newImage('./Assets/Princess.PNG', 'Princess'),
    value: 8,
    valueImg: newImage('./Assets/ValueImg/8value.PNG', 'PrincessValue'),
    name: "Princess",
    id: "Princess",
};
let king = {
    image: newImage('./Assets/King.PNG', 'King'),
    value: 6,
    valueImg: newImage('./Assets/ValueImg/6value.PNG', 'KingValue'),
    name: "King",
    id: "King",
};
let countess = {
    image: newImage('./Assets/Countess.PNG', 'Countess'),
    value: 7,
    valueImg: newImage('./Assets/ValueImg/7value.PNG', 'CountessValue'),
    name: "Countess",
    id: "Countess",
};

//two copies of Prince cards
let prince1 = {
    image: newImage('./Assets/Prince.PNG', 'Prince'),
    value: 5,
    valueImg: newImage('./Assets/ValueImg/5value.PNG', 'PrinceValue'), 
    name: "Prince",
    id: "Prince1",
};
let prince2 = {
    image: newImage('./Assets/Prince.PNG','Prince'),
    value: 5,
    valueImg: newImage('./Assets/ValueImg/5value.PNG', 'PrinceValue'),
    name: "Prince",
    id: "Prince2",
};

//two copies of Handsmaid cards
let handsmaid1 = {
    image: newImage('./Assets/Handsmaid.PNG', 'Handsmaid'),
    value: 4,
    valueImg: newImage('./Assets/ValueImg/5value.PNG', 'HandsmaidValue'),
    name: "Handsmaid",
    id: "Handsmaid1",
};
let handsmaid2 = {
    image: newImage('./Assets/Handsmaid.PNG', 'Handmaid'),
    value: 4, 
    valueImg: newImage('./Assets/ValueImg/5value.PNG', 'HandsmaidValue'),
    name: "Handsmaid",
    id: "Handsmaid2",
};

//2 copies of Baron cards
let baron1 = {
    image: newImage('./Assets/Baron.PNG','Baron'),
    value: 3,
    valueImg: newImage('./Assets/ValueImg/3value.PNG', 'BaronValue'),
    name: "Baron",
    id: "Baron1",
};
let baron2 = {
    image: newImage('./Assets/Baron.PNG','Baron'),
    value: 3,
    valueImg: newImage('./Assets/ValueImg/3value.PNG', 'BaronValue'),
    name: "Baron",
    id: "Baron2",
};

//2 copies of priest cards
let priest1 = {
    image: newImage('./Assets/Priest.PNG','Priest'),
    value: 2, 
    valueImg: newImage('./Assets/ValueImg/2value.PNG', 'PriestValue'),
    name: "Priest",
    id: "Priest1",
};
let priest2 = {
    image: newImage('./Assets/Priest.PNG', 'Priest'),
    value: 2, 
    valueImg: newImage('./Assets/ValueImg/2value.PNG', 'PriestValue'),
    name: "Priest",
    id: "Priest2"
};

//5 copies of guard cards
let guard1= {
    image: newImage('./Assets/Guard.PNG','Guard'),
    value: 1, 
    name: "Guard",
    valueImg: newImage('./Assets/ValueImg/1value.PNG', 'GuardValue'),
    id: "Guard1",
};
let guard2 = {
    image: newImage('./Assets/Guard.PNG','Guard'),
    value: 1,
    valueImg: newImage('./Assets/ValueImg/1value.PNG', 'GuardValue'),
    name: "Guard",
    id: "Guard2"
};
let guard3 = {
    image: newImage('./Assets/Guard.PNG','Guard'),
    value: 1, 
    valueImg: newImage('./Assets/ValueImg/1value.PNG', 'GuardValue'),
    name: "Guard",
    id: "Guard3",
};
let guard4 = {
    image: newImage('./Assets/Guard.PNG','Guard'),
    value: 1, 
    valueImg: newImage('./Assets/ValueImg/1value.PNG', 'GuardValue'),
    name: "Guard",
    id: "Guard4",
};
let guard5 = {
    image: newImage('./Assets/Guard.PNG','Guard'),
    value: 1, 
    valueImg: newImage('./Assets/ValueImg/1value.PNG', 'GuardValue'),
    name: "Guard",
    id: "Guard5",
};


//this place for the cards to go 
let deck = [princess, king, guard1]
let discardPile = []
let playersHand1 = []
let playersHand2 = []




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
