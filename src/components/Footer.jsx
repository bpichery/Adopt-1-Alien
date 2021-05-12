import React from "react";
import './Footer.css';
import go from '../assets/go.svg';
import Ma_recherche from '../assets/Ma_recherche.svg';
import Mon_compte from '../assets/Mon_compte.svg';

function Footer(){
  
  return(
    <div className="Footer">
      <div class="container">
          <div><a href="/"><img src={Ma_recherche} alt="recherche"/></a><p>Ma recherche</p></div>
          <div><a href="/compte"><img src={Mon_compte} alt="compte"/></a><p>Mon compte</p></div>
          <div><a href="/pecho"><img src={go} alt="go"/></a><p>Go pour pécho</p></div>
        </div>
    </div>
  )
}

export default Footer;