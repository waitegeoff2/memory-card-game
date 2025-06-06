import { useState, useEffect } from 'react'
import './App.css'
import DisplayRandomCards from './components/displayCards';

function App() {

  const [cards, setCards] = useState(null);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  //SET THE CARDS ARRAY HERE AND PASS IT IN. DO IT WITH A NEW API AND JUST GET 10 CARD OBJECTS

  //NEXT STEP: find better image API. fetch from there, grab 10 image objects. setCards to those 10 objects
  //then pass those 10 cards into displayrandomcards and run it

  //this will run when component first renders, fetch some data
  useEffect(
    () => {
      fetch('https://picsum.photos/v2/list?page=2&limit=10') 
        .then(response => {
          return response.json();
        })
        .then((data) => {
          setCards([data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8], data[9]])
        })
    }, []);

    //randomize here and then pass down
  console.log(cards)

  return (
    <>
     <div>
        {/* this component randomizes the cards. once a card is clicked, it resets */}
        {/* PASS SCORE IN THERE TO UPDATE IT */}
        {cards && <DisplayRandomCards cards={cards} score={score} />}      
     </div>
    </>
  )
}

export default App
