import "./style.css"
import Card from "../Card";
import { useEffect, useState } from "react";

function Podium({characters}){
	const [podium, setPodium] = useState([]);

    // useEffect(() => {
    //     const localCharacter = [...characters];
    //     const ordered = localCharacter.sort(sortCharacterByVotes).slice(0, 3);
    //     setPodium(ordered)
    // }, [characters]);

    return(
        <>
			<div className="container-podium">
                <Card characters={podium}/>
            </div>
			</>
    );
}

export default Podium;