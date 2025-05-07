// src/components/Carousel/Carousel.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import styles from './Carousel.module.css';

// Import dos estilos do react-slick (caso não sejam importados globalmente)
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ services }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section className={styles.carouselContainer}>
      <Slider {...settings}>
        {services.map((service, index) => (
          <section key={index} className={styles.carouselItem}>
            <Link to="/services">
              <img src={service.image} alt={service.title} className={styles.carouselImage} />
              <h3 className={styles.carouselTitle}>{service.title}</h3>
            </Link>
          </section>
        ))}
      </Slider>
    </section>
  );
};

export default Carousel;
