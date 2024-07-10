import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineUser, AiOutlineMenu } from 'react-icons/ai';
import { IoAnalytics } from "react-icons/io5";

import './styles.css'; // Arquivo de estilos CSS personalizados

function SandwichMenu() {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();


  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className={`sandwich-menu ${expanded ? 'expanded' : ''}`}>
      <div className="hamburger-icon" onClick={toggleMenu}>
        <AiOutlineMenu size={30} />
      </div>
      {expanded && (
        <div className="menu-items">
          
          <div className="icon-container" onClick={() => handleNavigation('/inicio')}>
            <AiOutlineHome size={24} />        
            <span>Inicio</span>
          </div>

          <div className="icon-container" onClick={() => handleNavigation('/checklist')}>
            <AiOutlineInfoCircle size={24} />
            <span>CheckList</span>
          </div>
          <div className="icon-container" onClick={() => handleNavigation('/usuario')}>
            <AiOutlineUser size={24} />
            <span>Usuario</span>
          </div>
          <div className="icon-container" onClick={() => handleNavigation('/analise')}>
            <IoAnalytics size={24} />
            <span>analise</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default SandwichMenu;
