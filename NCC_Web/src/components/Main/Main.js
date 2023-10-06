import './Main.css'
import React from 'react';
import Nav from '../Nav/Nav'
import Foot from '../Foot/Foot'
import ncc10 from 'C:/Users/Hemanth KR/OneDrive/Desktop/webD/NCC_Web/src/images/ncc-10.jpg'
import co_img from 'C:/Users/Hemanth KR/OneDrive/Desktop/webD/NCC_Web/src/images/co-img.png';
import logo from "C:\\Users\\Hemanth KR\\OneDrive\\Desktop\\webD\\NCC_Web\\src\\images\\NCC Logo.png"


<style>
  @import url('https://fonts.googleapis.com/css2?family=Alegreya:ital@1&family=Amatic+SC:wght@700&family=Belanosima&family=Bree+Serif&family=Caveat:wght@700&family=Chakra+Petch:ital@1&family=Courier+Prime&family=Exo+2:wght@300&family=Fasthand&family=Fredericka+the+Great&family=Handjet:wght@300&family=Kalam&family=Lugrasimo&family=Lumanosimo&family=Montserrat+Alternates&family=Montserrat:wght@300;400&family=Pangolin&family=Rajdhani&family=Raleway:wght@300&family=Red+Hat+Display:wght@500&family=Rubik&family=Sacramento&family=Sarabun&family=Slabo+27px&family=Ysabeau+Infant:wght@200&family=Ysabeau+SC:wght@300&family=Zeyada&display=swap');
</style>

function Main() {
    // const [table, settable] = useState;
    return (
        <>
        <Nav></Nav>
        <div className="main1">
                            <div className="con">
                                    <img src={logo} alt="" className="img1" />
                                    <h3 className="eng">National Cadet Corps</h3>
                                    <h2 className="clg">Sri Jayachamarajendra Govt Polytechnic</h2>
                                    <h5 className="ban">Bangalore - 560001</h5>
                            </div>

        </div>
        <div className="con2">
                <div className="incon">
                            <h3 className="wel">Welcome !</h3>
                            <div className="movb">
                                    <h2 className="head">Our Mission</h2>
                                    <p className="mp">We need to be disciplined, responsible, and patriotic citizens who are committed to serving the nation. <br /><br />NCC aims to shape the youth of the nation into well-rounded individuals who are prepared to face the challenges of life with confidence and integrity.</p>
                             </div>
                </div>
         </div>   

         <div className="events">

                            <div className="evcon">
                                            <h4 className="eve">Our Events !</h4>
                                            <div className="e1">
                                                        <img src={ncc10} alt="" className="eimg1" />
                                                        <h4 className="eh1 eh">Republic Day Celebration</h4>
                                                         
                                            </div>
                                            <div className="e2">
                                                        <img src="" alt="" className="eimg2" />
                                                        <h4 className="eh2 eh">Independence Day Celebration</h4>
                                            </div>
                            </div>

                            

         </div>

         <div className="ano">
                                            <h4 className="ano_name">Our Officers</h4>
                                            <div className="bothoff">
                                                     <div className="co_col">
                                                                <img src={co_img} alt="" className="co_img" />
                                                                <h4 className="co_name">Lt Col. <br /> Pradeep Singh Pathania </h4>
                                                                <h4 className="co_rank">Commanding Officer (CO)</h4>
                                                     </div>
                                                     <hr className="hr1"/>
                                                     <div className="ano_col">
                                                                <img src="#" alt="" className="ano_img" />
                                                                <h4 className="ano_nam">Lt. Raja Shekar</h4>
                                                                <h4 className="ano_rank">Associate NCC Officer (ANO)</h4>
                                                     </div>
                                            </div>
                            </div>
                            <Foot></Foot>
</>         
    );
}

export default Main;

