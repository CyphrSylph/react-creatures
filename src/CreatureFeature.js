import ent from './images/ent.png';
import kappa from './images/kappa.png';
import kraken from './images/kraken.png';
import lamia from './images/lamia.png';
import lochness from './images/lochness.png';
import medusa from './images/medusa.png';
import mermaid from './images/mermaid.png';
import orc from './images/orc.png';
import troll from './images/troll.png';

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
    return <div>
        <img alt="creature" src={pngMap[type]} />
    </div>;
}

export default CreatureFeature;