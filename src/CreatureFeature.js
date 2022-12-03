import { useState } from 'react';
import ent from './images/ent.png';
import kappa from './images/kappa.png';
import kraken from './images/kraken.png';
import lamia from './images/lamia.png';
import lochness from './images/lochness.png';
import medusa from './images/medusa.png';
import mermaid from './images/mermaid.png';
import orc from './images/orc.png';
import troll from './images/troll.png';
import potion from './images/potion.png';
import './CreatureFeature.css';

const pngMap = {
    ent,
    kappa,
    kraken,
    lamia,
    lochness,
    medusa,
    mermaid,
    orc,
    troll
}

function CreatureFeature({ type }) {
    const [clicks, setClicks] = useState(0);
    
    const handleClick = () => {
        setClicks(clicks +1);
    }

    return (
        <div className='creature-feature' onClick={handleClick}>
            <img className='creature' alt="creature" src={pngMap[type]} />
            <img 
                className="potion"
                alt="potion" 
                src={potion}
                style={{width: 10+10 * clicks + 'px'}}
            />
        </div>
    );
}

export default CreatureFeature;