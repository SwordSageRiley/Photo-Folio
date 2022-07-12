import Photo1 from '../photoFolder/Photo1.jpg';
import Photo2 from '../photoFolder/Photo2.jpg';
import Photo3 from '../photoFolder/Photo3.jpg';
import Photo4 from '../photoFolder/Photo4.jpg';
import Photo5 from '../photoFolder/Photo5.jpg';
import Photo6 from '../photoFolder/Photo6.jpg';
import Photo7 from '../photoFolder/Photo7.jpg';
import Photo8 from '../photoFolder/Photo8.jpg';
import Photo9 from '../photoFolder/Photo9.jpg';
import Photo10 from '../photoFolder/Photo10.jpg';


import './Photos.css';

let imagesLand = [
    "https://i.imgur.com/H7HelhH.png",
    "https://i.imgur.com/5PzUfyn.png",
    "https://i.imgur.com/VVgkFXK.jpg",
    "https://i.imgur.com/GyNoZAh.jpg",
    "https://i.imgur.com/q2zBU2V.jpg",
    "https://i.imgur.com/jkudZYQ.jpg",
    "https://i.imgur.com/ebGdaap.jpg"
    
];

let imagesPort = [
    "https://i.imgur.com/l1wmcgd.png",
    "https://i.imgur.com/l1BKp9u.png",
    "https://i.imgur.com/e1koRsC.jpg",
    "https://i.imgur.com/SMbgNkT.jpg",
    "https://i.imgur.com/4GIdV18.jpg",
    "https://i.imgur.com/jnpFt1A.png"
    
]

function Photos() {
    let k = require.context('../photoFolder', false, /\.(png|jpe?g|svg)$/);

    return (
        <div>
            <div className='Photos'>
                {imagesLand.map(im => (<img src={im} className="Landscape" />))}
            </div>
            <div className='Photos'>
                {imagesPort.map(im => (<img src={im} className="Portrait" />))}
            </div>
        </div>
    );
}


export default Photos;

// {imagesPort.map(im => (<img src={im} className="Portrait"/>))}