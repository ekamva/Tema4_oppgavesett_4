import React, {useState} from 'react';

import './App.css';

const App = () => {

  const names = ["Rick Sanchez","Morty Smith","Summer Smith","Beth Smith","Jerry Smith","Abadango     Cluster Princess","Abradolf Lincler","Adjudicator Rick","Agency Director","Alan Rails","Albert    Einstein","Alexander","Alien Googah","Alien Morty","Alien Rick","Amish Cyborg","Annie","Antenna   Morty","Antenna Rick","Ants in my Eyes Johnson"]
  
  const [characters, removeCharacters] = useState(names)
  const [favourites, setFavourites] = useState([])
  
   //oppgave 4
  const addFavourites = (index)=>{
  setFavourites([...favourites, characters[index]]) 
 }
  
 //oppgave 3
  const removeItem = (index) => {
  const kopi = [...characters]
  kopi.splice(index, 1)
  removeCharacters(kopi)
}
  
  
  return (
    // oppgave 1
        //<div className = "main">
        //    <h1> Rick and Morty characters </h1>
        //    <div className ="characters">
        //       
        //          {names.map( (name, index) => <div className ="character" key={index}> <h3>{name}//</h3> </div>)}
        //        
        //    </div>
        //
        //</div>
        
        //oppgave 2, 3

        <div className = "main">
            <h1> Rick and Morty characters </h1>
            <div className ="favName">
              <h4> Click character name to pick your favourites </h4>
                <ul>
              {
                favourites.map( (favourites, index) => 
                <li key ={index}>{favourites}</li>)
              }
              </ul>
            </div>
            <div className ="characters">
                  {characters.map( (character, index) => <div className ="character" key={index}> <h3 onClick={() => addFavourites(index) } >{character}</h3> <button onClick={ () => removeItem(index) }>take me away</button> </div>)}
                 
            </div>
        
        </div>
      )
  
}

export default App;
