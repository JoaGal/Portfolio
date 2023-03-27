'use client';
import { useState } from 'react';
import { MdMenu } from 'react-icons/md';

export const NavBar = () => {
    const [showNav, setShowNav] = useState(false);

    const changeState = () => {
        setShowNav(!showNav);
    };

  return (
    <div className="nav" onClick={changeState}>
      <div
        className="mobile__menu__icon"
        onClick={changeState}
        role="button"
        onKeyDown={changeState}
      >
        <MdMenu />
      </div>
      <ul className="navItems" id={`${!showNav && "hide__item"}`}>
        <li className="nav__li">
          <a
            href="#home"
            onClick={changeState}
            role="button"
          >
            Inicio
          </a>
        </li>
        <li className="nav__li">
          <a
            href="#about"
            onClick={changeState}
            role="button"
          >
            Perfil
          </a>
        </li>
        <li className="nav__li">
          <a
            href="#projects"
            onClick={changeState}
            role="button"
          >
            Proyectos
          </a>
        </li>
        <li className="nav__li">
          <a
            href="#contact"
            onClick={changeState}
            role="button"
          >
            Contacto
          </a>
        </li>
      </ul>
    </div>
  )
}
