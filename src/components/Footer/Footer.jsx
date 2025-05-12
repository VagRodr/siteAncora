// src/components/Footer/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.content}>
      
        {/* Texto dos direitos no centro */}
        <section className={styles.rights}>
          <p>24 99956 1267 / luciano@ancoraservicos.com.br</p>
          <a href='https://www.google.com/maps/place/%C3%82ncora+-+Despachadoria+Mar%C3%ADtima+e+Adesivos/@-22.9975278,-44.2520603,746m/data=!3m2!1e3!4b1!4m6!3m5!1s0x9c4f3c4cbc6361:0xdfe4a942456346d!8m2!3d-22.9975328!4d-44.2494854!16s%2Fg%2F11h3zqpb0t?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D' target='blank' rel="noopener noreferrer">
            <p>Avenida Winston Maruca, s/n - LJ 15 A - Jacuacanga - Angra dos Reis - RJ</p>
          </a>
          <p>© {new Date().getFullYear()} Âncora Serviços Marítimos. Todos os direitos reservados.</p>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
