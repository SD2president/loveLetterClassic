//playing the card
//activating the card
//discard pile
//when ending your turn
//guess a card with the "guard" ability
//comparing the card without reveling the card to another players
//score tracker
//when deck of carcs runs out, then compare card from the remaining playes
//discarding the "princess card" effect
//win con is met 
//deck of cards 
//hidden parts
//making the card real!!
function newImage(url){
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'absolute'
    //document.body.append(image)
    return image
}

let princess = {
    image: newImage('./Assets/Princess.PNG'),
    value: 8,
    name: "Princess",
};
let king = newImage('./Assets/King.PNG')

let deck = [princess, king]

document.body.append(deck[0])
