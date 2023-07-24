import { useState } from "react";
import { MdOutgoingMail } from "react-icons/md";
import { ContactComponent } from "./contactComponent/ContactComponent";
import Link from "next/link";

export const ContactBanner = ({t}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="contactBanner__wrapper" id="contact">
      <h3>{t.contactBanner.title}</h3>
      <p>{t.contactBanner.subtitle}</p>
      <Link href="/#contactComponent">
        <button onClick={handleOpen} className="contacBanner__button">
          <MdOutgoingMail className="contactbanner__icon" />
        </button>
      </Link>
      {open && <ContactComponent t={t}/>}
    </div>
  );
};
