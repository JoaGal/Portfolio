import Link from 'next/link';
import { MdOutgoingMail } from 'react-icons/md';

export const ContactBanner = () => {
  return (
      <div className='container' id="contact">
        <div className="contactBanner__wrapper">
          <h3>Si necesitas contactarte conmigo</h3>
          <p>Tenes algo en mente?</p>
          <Link href='/contact'>
          <button><MdOutgoingMail className="contactbanner__icon" /></button>
          </Link>
        </div>
      </div>
  )
}
