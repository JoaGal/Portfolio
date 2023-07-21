import { useState } from "react";
import { MdOutgoingMail } from "react-icons/md";
import { ContactComponent } from "./contactComponent/ContactComponent";
import Link from "next/link";

export const ContactBanner = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="contactBanner__wrapper" id="contact">
      <h3>Si necesitas contactarte conmigo</h3>
      <p>Tenes algo en mente?</p>
      <Link href="/#contactComponent">
        <button onClick={handleOpen} className="contacBanner__button">
          <MdOutgoingMail className="contactbanner__icon" />
        </button>
      </Link>
      {open && <ContactComponent />}
    </div>
  );
};
