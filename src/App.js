import { useState } from "react";
import CreatureFeature from "./CreatureFeature";

function getRandomCreature() {
    const creatures = ['ent','kappa','kraken','lamia','loch-ness','medusa','mermaid','orc','troll'];
    return creatures[Math.floor(Math.random() * creatures.length)];
}

function App() {
    const [creatures, setCreatures] = useState([]);
    
    const handleClick = () => {
        setCreatures([...creatures, getRandomCreature()])
    };

    const renderedCreatures = creatures.map((creature, index) => {
        return <CreatureFeature type={creature} key={index} />
    });
    
    return (
        <div>
            <button onClick={handleClick}>Add Creature</button>
            <div>{renderedCreatures}</div>
        </div>
    );
}

export default App;