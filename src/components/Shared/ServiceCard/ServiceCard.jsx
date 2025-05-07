import React from 'react';
import styles from './ServiceCard.module.css';

const ServiceCard = ({ service }) => {
  return (
    <section className={styles.card}>
      <figure className={styles.imageWrapper}>
        <img src={service.image} alt={service.title} className={styles.image} />
      </figure>
      <article className={styles.content}>
        <p className={styles.description}>{service.description}</p>
        <h4 className={styles.detailsTitle}>Detalhes:</h4>
        <ol className={styles.itemList}>
          {service.items.map((item, idx) => (
            <li key={idx} className={styles.item}>{item}</li>
          ))}
        </ol>
      </article>
    </section>
  );
};

export default ServiceCard;
