import { useEffect, useState} from 'react';
import './style.css';

function Ranking({characters, sortCharacterByVotes}){
     const [rankingCharacters, setRankingCharacters] = useState([]);



     

     useEffect(() => {
        const localCharacters = [...characters];
        const ordered = localCharacters.sort(sortCharacterByVotes)  
        console.log(ordered);
        setRankingCharacters(ordered);
    }, [characters]);  

    

    return(
        <div className="container-ranking">
            <h3>Ranking</h3>
            {rankingCharacters.map(item => (
                    <div className="character-ranking" key={item.id}>
                        <strong>{item.name}</strong>
                        <strong>{item.votes}</strong>
                    </div>
            ))}
        </div>
    );
}

export default Ranking;
