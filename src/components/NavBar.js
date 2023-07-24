"use client";
import Link from "next/link";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { ButtonTheme } from "./navbarComponents/ButtonTheme";

export const NavBar = ({toggled, setToggled, t}) => {
  const [showNav, setShowNav] = useState(false);

  const changeState = () => {
    setShowNav(!showNav);
  };

  const componentsNav = [
    {
      id: 1,
      name:`${t.navBar.home}` ,
      href: "#home",
    },
    {
      id: 2,
      name: `${t.navBar.about}`,
      href: "#about",
    },
    {
      id: 3,
      name: `${t.navBar.projects}`,
      href: "#projects",
    },
    {
      id: 4,
      name: `${t.navBar.contact}`,
      href: "#contact",
    },
  ];

  return (
    <div className="nav">
      <div
        className="mobile__menu__icon"
        onClick={changeState}
        role="button"
        onKeyDown={changeState}
      >
        <MdMenu/>
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
      <ButtonTheme toggled={toggled} setToggled={setToggled}/>
    </div>
  );
};
