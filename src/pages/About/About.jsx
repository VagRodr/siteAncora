import React from 'react';
import NextPage from '../../components/NextPage/NextPage';
import TeamMember from '../../components/TeamMember/TeamMember';
import styles from './About.module.css';
import teamBanner from '../../assets/images/bannerSobreNos.svg';
import joaoImg from '../../assets/images/joao.png';
import mariaImg from '../../assets/images/maria.png';
import carlosImg from '../../assets/images/carlos.png';


const team = [
  {
    name: 'Luciano Andrade',
    photo: joaoImg,
    bio: 'João é especialista em logística marítima e possui 10 anos de experiência.',
  },
  {
    name: 'Luciene Andrade',
    photo: mariaImg,
    bio: 'Maria atua na área de adesivagem e traz soluções criativas para o mercado.',
  },
  {
    name: 'Pedro Andrade',
    photo: carlosImg,  
    bio: 'Carlos é responsável pelo licenciamento ambiental, garantindo o cumprimento das normas.',
  },
  {
    name: 'Vagner Rodrigues',
    photo: carlosImg,  
    bio: 'Biólogo com ampla experiência em Unidades de Conservação, atua no Licenciamento Ambiental e sinalização náutica',
  },
  {
    name: 'Luciana Lafaiete',
    photo: mariaImg,  
    bio: 'Bióloga com experiência em Licenciamento Ambiental e atua no setor de gerenciamento de processos da Âncora Despachadoria.',
  },
  {
    name: 'Eduardo Lafaiete',
    photo: carlosImg,  
    bio: 'Carlos é responsável pelo licenciamento ambiental, garantindo o cumprimento das normas.',
  },
  {
    name: 'Rafael',
    photo: carlosImg,  
    bio: 'Carlos é responsável pelo licenciamento ambiental, garantindo o cumprimento das normas.',
  },
];

  // Aqui, se quiser colocar mais.. é só copiar os objetos e colar abaixo e trocar as infos deles, ta? 


const About = () => {
  return (
    <>
    
      <section className={styles.about}>
        {/* Banner com foto fake da equipe */}
        <section className={styles.banner}>
          <img src={teamBanner} alt="Equipe" />
        </section>
        
        {/* Conteúdo "Sobre Nós" */}
        <article className={styles.content}>
          <h1>Sobre Nós</h1>
          <p>
            A Âncora Despachadoria está se aproximando de três décadas de serviços prestados ao mercado náutico, em Angra dos Reis e região.  Localizada na Marina Verolme, trabalhamos pelo apoio à segurança do tráfego aquaviário, com o propósito de servir bem.
          </p>
          <p>
            Com presença desde o início da Marina Verolme, nosso compromisso é proporcionar tranquilidade e segurança para que nossos clientes possam desfrutar plenamente da experiência náutica, contando com o suporte de uma equipe experiente e dedicada que conhece as particularidades da região e os requisitos legais do setor marítimo.
          </p>
          <p>Em nome de nossa família e colaboradores, agradecemos aos nossos clientes e amigos por toda a confiança e apoio depositados.</p>
          <p>Convidamos você que ainda não conhece a Âncora. Vem nos visitar, tomar um café conosco, falar de náutica, de arquitetura, e fazer parte dos nossos próximos trinta anos!</p>
        </article>
        <article className={styles.principles}>
          <h2>Missão</h2>
          <p>Oferecer soluções náuticas com excelência e agilidade.</p>
          <h2>Visão</h2>
          <p>Ser referência em despachadoria marítima na Costa Verde e Rio de Janeiro.</p>
          <h2>Valores</h2>
          <p>Comprometimento, transparência, inovação e respeito ao cliente.</p>

        </article>
        
        {/* Seção da Equipe */}
        <article className={styles.teamSection}>
          <h2>Conheça a nossa equipe</h2>
          <div className={styles.teamList}>
            {team.map((member, index) => (
              <TeamMember key={index} member={member} alternate={index % 2 !== 0} />
            ))}
          </div>
        </article>
        <NextPage link='/services' frase='Conheça os Serviços que Oferecemos' />
      </section>
   
    </>
  );
};

export default About;
