import { useState } from 'react';
import '../styles/displayCardsStyles.css'

let cardOrder = [] //STATE (this is where you put the cards and then put it into the array)

//https://www.artic.edu/iiif/2/{identifier}/full/843,/0/default.jpg
//identifier is thing.image_id

export default function DisplayRandomCards({cards, score}) {
    const [chosenCards, setChosenCards] = useState([]);

    //MOVE THIS SOMEWHERE? so it can run this component again????
    function handleClick(id) {
        console.log(id);
        //if id matches something already in array
        //end game
        let newChosen = [...chosenCards]

        if(newChosen.includes(id)) {
            console.log("game failed")
            console.log(chosenCards)
        } else {
            newChosen.push(id)
            setChosenCards(newChosen)
            console.log(chosenCards)
        }
        
        console.log(chosenCards)
    }

    //randomize the array each time to display on screen in different order
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
        //SETCARDS with newarray
    }

    //TWO STEPS: randomize the array and display it (each on has an onclick)
    //randomize array

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

