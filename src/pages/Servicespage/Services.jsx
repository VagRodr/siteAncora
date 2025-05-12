import React from 'react';
import ServiceCard from '../../components/Shared/ServiceCard/ServiceCard'; 
import styles from './Services.module.css';
import NextPage from '../../components/NextPage/NextPage';
// Imagens exemplo png
import servicosBanner from '../../assets/images/services.png'
import despachadoriaImg from '../../assets/images/despachadoria.png';
import adesivosImg from '../../assets/images/adesivos.png';
import licenciamentoImg from '../../assets/images/licenciamento.png';

const servicesData = [
  {
    title: 'Despachadoria Marítima',
    description:
      'Serviço especializado para resolver toda a burocracia e documentação, garantindo uma regularização ágil e segura.',
    items: [
      'Inscrição Inicial',
      'Transferência de propriedade',
      'Transferência de jurisdição',
      'Alteração de características',
      'Legalização de poitas e decks',
      'Renovação de habilitação'
    ],
    image: despachadoriaImg
  },
  {
    title: 'Adesivos Náuticos',
    description:
      'Soluções personalizadas para adesivagem de embarcações com alta durabilidade e qualidade visual.',
    items: ['Adesivos em vinil', 'Adesivos resinados'],
    image: adesivosImg
  },
  {
    title: 'Licenciamento Ambiental',
    description:
      'Serviços para garantir a regularidade ambiental de imóveis e empreendimentos, respeitando as normas vigentes.',
    items: ['Legalização de imóveis', 'Legalização de empreendimentos', 'Outorga de água'],
    image: licenciamentoImg
  }
];

const Services = () => {
  return (
    <>
      <section className={styles.services}>
        <figure className={styles.Banner}>
          <img src={servicosBanner} alt="" />
        </figure>
        <article className={styles.intro}>
          <h1>Serviços</h1>
          <p>
            Conheça os serviços que oferecemos para atender todas as necessidades no setor marítimo.
          </p>
        </article>
        <section className={styles.servicesList}>
          {servicesData.map((service, index) => (
            <article key={index} className={styles.serviceSection}>
              <h2 className={styles.subtitle}>{service.title}</h2>
              <ServiceCard service={service} />
            </article>
          ))}
        </section>
        <NextPage link='/salvatagem' frase='Confira os Equipamentos de Salvatagem Necessários' />
      </section>
    </>
  );
};

export default Services;
