// src/pages/Home/index.jsx
import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import styles from './Home.module.css';
import Button from '../../components/Button/Button'
// Essas imagens são exemplos e nao são svg. 
import despachadoriaImg from '../../assets/images/r_carrosselDespachadoria.jpg';
import adesivosImg from '../../assets/images/r_carrosselAdesivo.jpg';
import licenciamentoImg from '../../assets/images/r_carrosselLicenciamento.jpg';
import Banner from '../../assets/images/r_bannerHome.jpg'
const services = [
  {
    title: 'Despachadoria Marítima',
    image: despachadoriaImg,
  },
  {
    title: 'Adesivos Náuticos',
    image: adesivosImg,
  },
  {
    title: 'Licenciamento Ambiental',
    image: licenciamentoImg,
  },
];

const Home = () => {
  return (
    <>      
      <section className={styles.home}>
        <figure className={styles.Banner}>
          <img src={Banner} alt="" />
        </figure>
        <article className={styles.intro}>
        
          <h1>Olá Navegantes, bem-vindos à Âncora Despachadoria Marítima</h1>
          <p>
            Com três décadas de experiência no setor náutico, somos referência em <strong>legalização de embarcações, sinalização náutica e licenciamento ambiental.</strong><br/><br/> Atuamos em toda Costa Verde e no Rio de Janeiro, com atendimento a embarcações de todos os portes com <strong>eficiência, sigilo e excelência técnica</strong>, apoiando marinheiros e proprietários em cada etapa do processo.
          </p>
        </article>
        <section className={styles.carouselSection}>
          <h2>
            Conheçam Nossos Serviços
          </h2>
          <Carousel services={services} />
        </section>
      </section>
      <section>
        <Button text="Nosso Compromisso é Servir Bem!" to="/about" />
      </section>
    </>
  );
};

export default Home;
