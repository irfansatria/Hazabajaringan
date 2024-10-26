/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function StickyWhatsAppIcon() {
  const message = encodeURIComponent(
    'Halo, saya tertarik untuk memesan layanan yang ditawarkan oleh HAZA Baja Ringan. Bisakah Anda memberi tahu saya informasi secara lengkap mengenai layanan yang ditawarkan tersebut ?',
  );

  return (
    <div className="whatsapp-icon">
      <a
        href={`https://wa.me/+6285778000156?text=${message}`}
        target="_blank"
        aria-label="Hubungi kami melalui WhatsApp"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}

export default StickyWhatsAppIcon;
