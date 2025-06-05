import { useState } from 'react';
import '../styles/displayCardsStyles.css'


//to store the cards the person has already chosen
//map it to prevent duplicates
//length it to count current score

let cardOrder = [] //STATE (this is where you put the cards and then put it into the array)


//https://www.artic.edu/iiif/2/{identifier}/full/843,/0/default.jpg
//identifier is thing.image_id

function handleClick(id) {
    console.log(id);
    //if id matches something already in array
    //end game

    if(cardOrder.includes(id)) {
        console.log("game failed")
    } else {
        cardOrder.push(id)
    }
    
    console.log(cardOrder)
    
    //when someone clicks a card, take that card and put it into an array of chosen card (useState?) WITH AN INDEX
    //update score
    //run randomizecard again
}

function cardArray() {
    //function to build cardarray
}

function randomizeArr(array) {

    let newArray = [...array];
    let currentIndex = newArray.length;

    while (currentIndex != 0) {

    // Pick a remaining element
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex], newArray[currentIndex]];
  }
  return newArray;
}

export default function DisplayRandomCards({cards}) {
    const [chosenCards, setChosenCards] = useState([]);
    //TWO STEPS: randomize the array and display it (each on has an onclick)
    //randomize array
    console.log(cards)

    let newArray = randomizeArr(cards);
    console.log(newArray)

    let cardOne = newArray[0];
    let cardOneURL = newArray[0].image_id
    let cardOneID = newArray[0].id
    let cardTwoURL = newArray[1].image_id
    let cardTwoID = newArray[1].id

    return (
        <div className="card-tiles">
            <img src= {`https://www.artic.edu/iiif/2/${cardOneURL}/full/843,/0/default.jpg`} onClick={() => handleClick(cardOneID)}/>
            <img src= {`https://www.artic.edu/iiif/2/${cardTwoURL}/full/843,/0/default.jpg`} onClick={() => handleClick(cardTwoID)}/>
        </div>
    )



    //take array of cards
    //randomize order and SETSTATE in array
        //const card1 = cardorder[1]
            //array.map(item) => return <div>{item}<div> (MAYBE YOU JUST NEED THIS, you're just mapping the new array each time)
        //etc.
    //return divs with random order of cards. onclick {function }
}

