import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [cards, setCards] = useState([]);

  //STATE FOR CARDS set to null (update when you fetch them)
  //STEP ONE, DO THIS FIRST TMRW, FILL THE CARD ARRAY WITH STUFF YOU FETCH BELOW, pass it into the display card function as a prop

  //function to fetch the data from API
  //fetch 10 photos and give them ids
  //this will run when component first renders, fetch some data
  useEffect(
    () => {
      fetch('https://api.artic.edu/api/v1/artworks')
        .then(response => {
          return response.json();
        })
        .then((data) => {
          setCards(data.data)
          
        })
      console.log("use effect ran");
    }, []
  );

  console.log(cards)

  return (
    <>
     <div>
      
     </div>
    </>
  )
}

export default App
