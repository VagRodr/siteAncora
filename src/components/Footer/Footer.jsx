// src/components/Footer/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.content}>
      
        {/* Texto dos direitos no centro */}
        <section className={styles.rights}>
          <p>© {new Date().getFullYear()} Âncora Serviços Marítimos. Todos os direitos reservados.</p>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
