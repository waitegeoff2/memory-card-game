import { useState, useEffect } from 'react'
import './App.css'
import DisplayRandomCards from './components/displayCards';
import Header from './components/header';

function App() {

  const [cards, setCards] = useState(null);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

//ADD LOADING
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
        <Header score={score} highScore={highScore} />
        {cards && <DisplayRandomCards cards={cards} score={score} setScore={setScore} highScore={highScore} setHighScore={setHighScore}/>}      
     </div>
    </>
  )
}

export default App
