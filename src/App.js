import {useEffect, useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Ranking from './components/Ranking';
import Podium from './components/Podium';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect (() =>{
    handlePopulationCharacterers();
  }, [])

  function sortCharacterByVotes(a,b){
    console.log(a, b);
    return (a.votes > b.votes)?-1:(a.votes < b.votes)?1:0;

}

  async function handlePopulationCharacterers(){
    const response = await fetch ('https://www.breakingbadapi.com/api/characters?limit=10', {
      method: 'GET',
      headers: {
        "content-type": "application/json"
      }
    });


    const data = await response.json();
    const formattedCharacter = [];

    for (const character of data) {
      formattedCharacter.push({
        id: character.char_id,
        name: character.name,
        img: character.img,
        votes:0
      })
    }
    setCharacters(formattedCharacter);
  }

  function handleAddVote(value, characterId){
    const localCharacter = [...characters];
    const indexCharacter = localCharacter.findIndex(item => item.id === characterId);
    if(indexCharacter === -1){
      return;
    }
    const newCountVotes = localCharacter[indexCharacter].votes + value;

    if (newCountVotes >= 0){
      localCharacter[indexCharacter].votes = newCountVotes
    }
    setCharacters([...localCharacter]);

  }

  return (
    <div className="app">
      <Navbar />
      <h1>Podium</h1>
      <Podium characters={characters} sortCharacterByVotes={sortCharacterByVotes}/>
      <h1>Vote no seu personagem favorito</h1>
    <div className="container"> 
      <div className="character-list">
          <Card characters={characters} handleAddVote={handleAddVote} showButtons/>
        </div>
        <Ranking characters={characters} sortCharacterByVotes={sortCharacterByVotes} />
    </div>
    </div>
  );
}

export default App;
