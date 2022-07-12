import Photos from './Components/Photos';
import AboutMe from './Components/AboutMe';
import Magazines from './Components/Magazines';
import Comissions from './Components/Commissions';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";


var clients = [
  'Kemono',
  'Melody',
  'BatteryBoy2'
];

var blarg = 1;


function Navigation() {

  return (

    <div className='Body'>
      <div className='Navi'>
        <Link to='/AboutMe'>About Me</Link> <br />
        <Link to='/Comissions'>Commision Info</Link> <br />
        < h2><Link to='/Photos'>VRChat</Link></h2>
        {ListShoots()}
        <Link to='/Magazines'>Magazines</Link> <br />
      </div>
      <div className='Display'>
        <Routes>
          <Route path='/' exact element={<Photos />} />
          <Route path='/AboutMe' exact element={<AboutMe />} />
          <Route path='/Comissions' exact element={<Comissions />} />
          <Route path='/Photos' exact element={<Photos />} />
          <Route path='/Magazines' exact element={<Magazines />} />
        </Routes>
      </div>
    </div>

  );

}

function ListShoots() {
  return (
    <ul className='ShootList'>
      {clients.map(item => (<li> {item} </li>))}
    </ul>
  )
}

export default Navigation;
