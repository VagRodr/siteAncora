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
        
          <h1>Bem-vindo(a) à Âncora Náutica e arquitetura</h1>
          <p>
            Somos especialistas em serviços marítimos, oferecendo soluções em despachadoria, adesivos náuticos e licenciamento ambiental.
          </p>
        </article>
        <section className={styles.carouselSection}>
          <h2>
            Conheça os nossos serviços
          </h2>
          <Carousel services={services} />
        </section>
      </section>
    </>
  );
};

export default Home;
