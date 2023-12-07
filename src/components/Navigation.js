import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <NavLink to="/" className={(navLink) => (navLink.isActive ? "navLink-active" : "")}>
          <li>Mon parcours</li>
        </NavLink>
        <NavLink to="/skills" className={(navLink) => (navLink.isActive ? "navLink-active" : "")}>
          <li>Mes compétences</li>
        </NavLink>
        <NavLink to="/projects" className={(navLink) => (navLink.isActive ? "navLink-active" : "")}>
          <li>Mes réalisations</li>
        </NavLink>
        <NavLink to="/contact" className={(navLink) => (navLink.isActive ? "navLink-active" : "")}>
          <li>Contactez-moi</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;