import {NavLink} from 'react-router-dom';
import logo from 'C:/Users/Hemanth KR/OneDrive/Desktop/webD/NCC_Web/src/images/logo.png'

import './Nav.css';



<style>
@import url('https://fonts.googleapis.com/css2?family=Alegreya:ital@1&family=Amatic+SC:wght@700&family=Belanosima&family=Bree+Serif&family=Caveat:wght@700&family=Chakra+Petch:ital@1&family=Courier+Prime&family=Exo+2:wght@300&family=Fasthand&family=Fredericka+the+Great&family=Handjet:wght@300&family=Kalam&family=Lugrasimo&family=Lumanosimo&family=Montserrat+Alternates&family=Montserrat:wght@300;400&family=Pangolin&family=Rajdhani&family=Raleway:wght@300&family=Red+Hat+Display:wght@500&family=Rubik&family=Sacramento&family=Sarabun&family=Slabo+27px&family=Ysabeau+Infant:wght@200&family=Ysabeau+SC:wght@300&family=Zeyada&display=swap');
</style>

function Nav(){
        return (
            

            <div className="nav1">
                        <img src={logo} alt="" className='logo'/>
                        <ul className="ul1">
                            <li className="li1"><NavLink to='/' className="n1 n0 b b1">HOME</NavLink></li>
                            <li className="li2"><NavLink to="/Faq" className="n1 b b2">FAQs</NavLink></li>
                            <li className="li3"><NavLink to="/Update" className="n1 b b3">UPDATES</NavLink></li>
                        </ul>
            </div>
            
        );
}

export default Nav;
