import React from 'react';
import { FaWhatsapp, FaInstagram, FaEnvelope} from 'react-icons/fa';
import styles from './SocialLinks.module.css';

const SocialLinks = () => {
  return (
    <section className={styles.socialLinks}>
      <a href="https://api.whatsapp.com/send?phone=5524999561267" target="_blank" rel="noopener noreferrer" title="WhatsApp">
        <FaWhatsapp />
      </a>
      <a href="https://www.instagram.com/ancoranauticabr/" target="_blank" rel="noopener noreferrer" title="Instagram">
        <FaInstagram />
      </a>
      <a href="mailto:luciano@ancoraservicos.com.br" title="Enviar Email">
        <FaEnvelope />
      </a>
    </section>
  );
};

export default SocialLinks;
