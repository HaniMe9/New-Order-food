import React from 'react'
import './Header.css'
import evangadiLogo from '../images/evangadiLogo.png';

export default function Header() {
  return (
    <div className="header-container">
            <div className="header-logo">
        <img src={evangadiLogo} alt="Evangadi Logo" />
      </div>

        <div className="header-title">
            <h1>Evangadi Families Menu</h1>
   


        </div>
        </div>

    
  )
}
