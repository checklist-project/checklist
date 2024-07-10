import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineMenu } from 'react-icons/ai';
import { MdOutlinePendingActions } from "react-icons/md";


import './styles.css'; // Arquivo de estilos CSS personalizados

function SandwichMenu() {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();


  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  const handleNavigation = (path) => {
    setExpanded(false);
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
            <span>Fazer CheckList</span>
          </div>
          <div className="icon-container" onClick={() => handleNavigation('/pendente')}>
            <MdOutlinePendingActions size={24} />
            <span>Pendente CheckList</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default SandwichMenu;
