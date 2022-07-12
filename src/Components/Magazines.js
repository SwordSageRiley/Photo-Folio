import RileyMag from '../Magazines/RileyMag.jpg';
import MelodyMag from '../Magazines/MelodyMag.jpg';
import CarTest from '../Magazines/CarTest.png';

import './Photos.css'; 

function Magazines () {

    return (
        <div className='Magazines'>
            <img src={MelodyMag} />
            <img src={RileyMag} />
            <img src={CarTest} />
        </div>
    );
}

export default Magazines;