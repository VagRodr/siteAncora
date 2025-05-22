import React from 'react';
import ServiceCard from '../../components/Shared/ServiceCard/ServiceCard'; 
import styles from './Services.module.css';
import NextPage from '../../components/NextPage/NextPage';
// Imagens exemplo png
import servicosBanner from '../../assets/images/bannerServicos.svg'
import despachadoriaImg from '../../assets/images/despachadoria.svg';
import adesivosImg from '../../assets/images/adesivos.svg';
import licenciamentoImg from '../../assets/images/licenciamento.svg';

const servicesData = [
  {
    title: 'Despachadoria Marítima',
    description:
      'Regularize sua embarcação com agilidade e segurança.',
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
      'Personalize sua embarcação com qualidade e durabilidade.',
    items: ['Adesivos em vinil', 'Adesivos resinados'],
    image: adesivosImg
  },
  {
    title: 'Licenciamento Ambiental',
    description:
      'Garanta a regularidade ambiental do seu imóvel ou empreendimento.',
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
            Na Âncora, cuidamos da burocracia para que você aproveite o melhor da navegação. Atendemos na Marina Verolme, em toda a Costa Verde e na capital do Rio de Janeiro, indo até você sempre que necessário. Aguardamos seu contato.
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
