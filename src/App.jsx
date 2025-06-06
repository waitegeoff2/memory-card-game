import { useState, useEffect } from 'react'
import './App.css'
import DisplayRandomCards from './components/displayCards';

function App() {

  const [cards, setCards] = useState();
  const [score, setScore] = useState(0);

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
          // setCards(data.data)
          console.log(data)
          //put 10 of these into CARDS -> SETCARDS
        })
    }, []
  );

  return (
    <>
     <div>
        {/* this component randomizes the cards. once a card is clicked, it resets */}
        {/* PASS SCORE IN THERE TO UPDATE IT */}
        {/* {cards && <DisplayRandomCards cards={cards} />}       */}
     </div>
    </>
  )
}

export default App
