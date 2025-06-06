import { useState } from 'react';
import '../styles/displayCardsStyles.css'

export default function DisplayRandomCards({cards, score}) {
    const [chosenCards, setChosenCards] = useState([]);

    //MOVE THIS SOMEWHERE? so it can run this component again????
    function handleClick(id) {

        if(chosenCards.includes(id)) {
            alert("game failed")
            setChosenCards([])            
        } else {
            let newChosen = [...chosenCards]
            newChosen.push(id)
            setChosenCards(newChosen)            
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

    let cardOneURL = newArray[0].download_url
    let cardOneID = newArray[0].id
    let cardTwoURL = newArray[1].download_url
    let cardTwoID = newArray[1].id
    let cardThreeURL = newArray[2].download_url
    let cardThreeID = newArray[2].id
    let cardFourURL = newArray[3].download_url
    let cardFourID = newArray[3].id
    let cardFiveURL = newArray[4].download_url
    let cardFiveID = newArray[4].id
    let cardSixURL = newArray[5].download_url
    let cardSixID = newArray[5].id
    let cardSevenURL = newArray[6].download_url
    let cardSevenID = newArray[6].id
    let cardEightURL = newArray[7].download_url
    let cardEightID = newArray[7].id
    let cardNineURL = newArray[8].download_url
    let cardNineID = newArray[8].id
    let cardTenURL = newArray[9].download_url
    let cardTenID = newArray[9].id

    return (
        <div className="card-tiles">
            <div className="img-container">
                <img src= {cardOneURL} onClick={() => handleClick(cardOneID)}/>
            </div>
            <div className="img-container">
                <img src= {cardTwoURL} onClick={() => handleClick(cardTwoID)}/>
            </div>
            <div className="img-container">
                <img src= {cardThreeURL} onClick={() => handleClick(cardThreeID)}/>
            </div>
            <div className="img-container">
                <img src= {cardFourURL} onClick={() => handleClick(cardFourID)}/>
            </div>
            <div className="img-container">
                <img src= {cardFiveURL} onClick={() => handleClick(cardFiveID)}/>
            </div>
            <div className="img-container">
                <img src= {cardSixURL} onClick={() => handleClick(cardSixID)}/>
            </div>
            <div className="img-container">
                <img src= {cardSevenURL} onClick={() => handleClick(cardSevenID)}/>
            </div>
            <div className="img-container">
                <img src= {cardEightURL} onClick={() => handleClick(cardEightID)}/>
            </div>
            <div className="img-container">
                <img src= {cardNineURL} onClick={() => handleClick(cardNineID)}/>
            </div>
            <div className="img-container">
                <img src= {cardTenURL} onClick={() => handleClick(cardTenID)}/>
            </div>

        </div>
    )
}

