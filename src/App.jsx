import { useState, useEffect } from 'react'
import './App.css'
import DisplayRandomCards from './components/displayCards';
import Header from './components/header';

function App() {

  const [cards, setCards] = useState(null);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

//ADD LOADING
  useEffect(
    () => {
      fetch('https://picsum.photos/v2/list?page=2&limit=10') 
        .then(response => {
          return response.json();
        })
        .then((data) => {
          setCards([data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8], data[9]])
          setIsLoading(false)          
        })
  }, []);

  console.log(cards)

  return (
    <>
     <div>
        <Header score={score} highScore={highScore} />
        {isLoading && <h1 className="loading">Loading...</h1>}
        {cards && <DisplayRandomCards cards={cards} score={score} setScore={setScore} highScore={highScore} setHighScore={setHighScore}/>}      
     </div>
    </>
  )
}

export default App
