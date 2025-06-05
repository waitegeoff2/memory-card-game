import '../styles/displayCardsStyles.css'

//to store the cards the person has already chosen
//map it to prevent duplicates
//length it to count current score
let chosenCards = []; //STATE
let cardOrder = [] //STATE (this is where you put the cards and then put it into the array)


//https://www.artic.edu/iiif/2/{identifier}/full/843,/0/default.jpg
//identifier is thing.image_id

function handleClick () {
    //when someone clicks a card, take that card and put it into an array of chosen card (useState?)
    //update score
    //run randomizecard again
}

function cardArray() {
    //function to build cardarray
}

export default function displayRandomCards(propcards) {
    //TWO STEPS: randomize the array and display it (each on has an onclick)

    //take array of cards
    //randomize order and SETSTATE in array
        //const card1 = cardorder[1]
            //array.map(item) => return <div>{item}<div> (MAYBE YOU JUST NEED THIS, you're just mapping the new array each time)
        //etc.
    //return divs with random order of cards. onclick {function }
}

