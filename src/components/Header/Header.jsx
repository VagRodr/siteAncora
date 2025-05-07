import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from '../../assets/images/ancoraLogo.svg';
import Button from '../../components/Shared/Button/Button'

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Detecta scroll para alterar estilo do header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <section className={styles.container}>
        <section className={styles.navbar}>
          {/* Logo à esquerda */}
          <Link to="/" className={styles.logo}>
            <img src={Logo} alt="Logo Âncora" />
          </Link>

          {/* Menu desktop (navegação) */}
          <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
            {/* Botão de fechar menu no mobile */}
            <Button 
              buttonStyle="unstyled" 
              className={`${styles.closeBtn} ${styles.mobileOnly}`} 
              onClick={toggleMenu}>
              <FiX />
            </Button>
            <ul className={styles.navList}>
              <li><Link to="/">Início</Link></li>
              <li><Link to="/about">Sobre Nós</Link></li>
              <li><Link to="/services">Serviços</Link></li>
              <li><Link to="/salvatagem">Salvatagem</Link></li>
            </ul>
          </nav>

          {/* Botão de menu (apenas mobile) */}
          <Button 
            buttonStyle="unstyled" 
            className={`${styles.menuBtn} ${styles.mobileOnly}`} 
            onClick={toggleMenu}>
            <FiMenu />
          </Button>
        </section>
      </section>
    </header>
  );
}

export default Header;
