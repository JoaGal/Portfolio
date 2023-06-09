"use client";
import Link from "next/link";
import { useState } from "react";
import { MdMenu } from "react-icons/md";

export const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  const changeState = () => {
    setShowNav(!showNav);
  };

  const componentsNav = [
    {
      id: 1,
      name: "Inicio",
      href: "#home",
    },
    {
      id: 2,
      name: "Perfil",
      href: "#about",
    },
    {
      id: 3,
      name: "Proyectos",
      href: "#projects",
    },
    {
      id: 4,
      name: "Contacto",
      href: "#contact",
    },
  ];

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
        {componentsNav.map((item) => (
          <li className="nav__li" key={item.id}>
            <Link href={item.href} scroll={false} onClick={changeState} role="button">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
