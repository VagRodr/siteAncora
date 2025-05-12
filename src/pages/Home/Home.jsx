// src/pages/Home/index.jsx
import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import styles from './Home.module.css';
// Essas imagens são exemplos e nao são svg. 
import despachadoriaImg from '../../assets/images/despachadoria.png';
import adesivosImg from '../../assets/images/adesivos.png';
import licenciamentoImg from '../../assets/images/licenciamento.png';
import Banner from '../../assets/images/banner_drone.png'
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
        
          <h1>Olá Navegantes, bem-vindos à Âncora Despachadoria Marítima.</h1>
          <p>
            Com mais de 30 anos de atuação no mercado náutico, oferecemos soluções inteligentes em despachadoria marítima, sinalização de embarcações com adesivos náuticos e licenciamento ambiental.
          </p>
        </article>
        <section className={styles.carouselSection}>
          <h2>
            Conheçam Nossos Serviços
          </h2>
          <Carousel services={services} />
        </section>
      </section>
    </>
  );
};

export default Home;
