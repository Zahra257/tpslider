import Header  from './Header'
import Navbar  from  './Navbar'
import  Slider from   './Slider'
import  Cartes from './Cartes'
import React, { useState, useEffect } from "react";

import {cardData} from './CarteData'
function App() {
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    setCards(cardData);
    console.log(cards);
  }, [cards]);

console.log(cardData)
  return (
    <div className="App">
        <Header/>
        <Navbar/>
        <Slider/>
        <div className="max-w-screen-lg bg-neutral-400 mx-auto py-24 my-5 min-h-[calc(390px * var(--tw-card-count))]">
        <div className="flex justify-center flex-row flex-wrap gap-8">
          {cards.map((card) => (
            <Cartes key={card.id} data={card} />
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;
