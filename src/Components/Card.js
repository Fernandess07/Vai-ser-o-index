// Card.js
import React, { useState } from 'react';
import './Card.css';
import placeholder from '../assets/placeholder.png';
import Edit from '../assets/pencil.png';
import Delete from '../assets/trash-can.png';
import Vcode from '../assets/code.png';


function Card(cardId,cards) {
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="card">
      <div className="card-image">
        <img className="image-placeholder" src={placeholder} alt="project image" />
      </div>
      <div className="card-footer">
        <span>Text</span>
        <button className="options-button" onClick={toggleDropdown}>
          ☰
        </button>
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <div className='inline-block'>
            <img className="icon" src={Vcode} alt="project image" />
            <button className="dropdown-item">Abrir VCode</button>              
            </div>
            <div className='inline-block'>
              <img className="icon" src={Edit} alt="project image" />
              <button className="dropdown-item">Editar</button>
            </div>
            <div className='inline-block'>
              <img className="icon" src={Delete} alt="project image" />
              <button className="dropdown-item">Apagar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;

