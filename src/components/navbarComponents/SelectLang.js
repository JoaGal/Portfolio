import React from "react";
import Image from "next/image";
import USA from "../../Assets/images/USA.png";
import ARG from "../../Assets/images/ARG.png";

export const SelectLang = ({ setLang, lang }) => {
  const changeLang = (e) => {
    setLang(e.target.value);
  };

  return (
    <div className="select">
        <Image src={lang === "es" ? ARG : USA} alt="Lang" />
      <select onClick={changeLang}>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
      {/* <div className="select_box">
        {lang.toUpperCase()}
        <Image src={lang === "es" ? ARG : USA} alt="Lang" />
      </div>
        <ul>
          <li onClick={()=> setLang("es")}>
            ES
          </li>
          <li onClick={()=> setLang("us")}>
            US
          </li>
        </ul> */}
    </div>
  );
};
