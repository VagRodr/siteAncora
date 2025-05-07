import React from 'react';

import TeamMember from '../../components/TeamMember/TeamMember';
import styles from './About.module.css';
import teamBanner from '../../assets/images/equipe.png';
import joaoImg from '../../assets/images/joao.png';
import mariaImg from '../../assets/images/maria.png';
import carlosImg from '../../assets/images/carlos.png';


const team = [
  {
    name: 'João Silva',
    photo: joaoImg,
    bio: 'João é especialista em logística marítima e possui 10 anos de experiência.',
  },
  {
    name: 'Maria Oliveira',
    photo: mariaImg,
    bio: 'Maria atua na área de adesivagem e traz soluções criativas para o mercado.',
  },
  {
    name: 'Carlos Souza',
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
            A Âncora Serviços Marítimos nasceu com a missão de oferecer soluções inovadoras e de alta qualidade no setor marítimo.
            Nossa trajetória é marcada por compromisso com a excelência e a satisfação de nossos clientes. (Texto fictício, a ser alterado futuramente)
          </p>
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
      </section>
   
    </>
  );
};

export default About;
