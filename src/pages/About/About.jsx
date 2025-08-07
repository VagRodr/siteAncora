/*import React from 'react';*/
import React, { useEffect } from 'react';
import Button from '../../components/Button/Button'
import TeamMember from '../../components/TeamMember/TeamMember';
import styles from './About.module.css';
import teamBanner from '../../assets/images/r_bannerAbout.jpg';
import lucianoImg from '../../assets/images/r_luciano.jpg';
import vagnerImg from '../../assets/images/r_vagner.jpg';
import lucianaImg from '../../assets/images/r_luciana.jpg';
import eduardoImg from '../../assets/images/r_eduardo.jpg';



const team = [
  {
    name: 'Luciano Andrade',
    photo: lucianoImg,
    bio: 'Arquiteto, sócio Fundador da Âncora despachadoria. Com mais de 30 anos de experiência no ramo náutico',
  },
  /*{
    name: 'Luciene Andrade',
    photo: mariaImg,
    bio: 'Maria atua na área de adesivagem e traz soluções criativas para o mercado.',
  },
  {
    name: 'Pedro Andrade',
    photo: carlosImg,  
    bio: 'Carlos é responsável pelo licenciamento ambiental, garantindo o cumprimento das normas.',
  },*/
  {
    name: 'Vagner Rodrigues',
    photo: vagnerImg,  
    bio: 'Biólogo com ampla experiência em Unidades de Conservação, atua no Licenciamento Ambiental e sinalização náutica',
  },
  {
    name: 'Luciana Lafaiete',
    photo: lucianaImg,  
    bio: 'Bióloga com experiência em Licenciamento Ambiental e atua no setor de gerenciamento de processos da Âncora Despachadoria.',
  },
  {
    name: 'Eduardo Lafaiete',
    photo: eduardoImg,  
    bio: 'Carlos é responsável pelo licenciamento ambiental, garantindo o cumprimento das normas.',
  },
];

  // Aqui, se quiser colocar mais.. é só copiar os objetos e colar abaixo e trocar as infos deles, ta? 


const About = () => {

  useEffect(() => {
    // Rola para o topo da página quando o componente é montado
    window.scrollTo(0, 0);
  }, []);
  
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
            Desde 1995, a Âncora Despachadoria Marítima vem construindo uma história sólida no setor náutico em Angra dos Reis e na Costa Verde do Rio de Janeiro. Estamos na Marina Verolme desde sua fundação e crescemos ao lado dela, sempre com o propósito de servir bem, com tranquilidade, agilidade e suporte técnico de confiança para quem navega. Cuidamos da burocracia para você.
          </p>
          <p>
            Nossa equipe combina experiência, conhecimento das normas e profundo respeito pelos clientes — sejam eles marinheiros ou proprietários de embarcações.
          </p>
          <p>Hoje, nosso atendimento chega onde você estiver precisando, prezando sempre pela excelência, sigilo e clareza em cada processo. Seja para regularizar sua embarcação, cuidar da sinalização náutica ou atender às exigências ambientais, você pode contar com a Âncora para manter sua navegação segura, legal e em dia.</p>
          <p><strong>Nossa família e equipe agradecem a confiança de cada cliente que faz parte dessa história. Se você ainda não nos conhece, seja bem vindo a estar conosco nos próximos 30 anos.</strong></p>
        </article>
        <article className={styles.principles}>
          <h2>Missão</h2>
          <p>Oferecer soluções náuticas com <strong>excelência, agilidade e confiança,</strong> prestando serviços de forma ética, precisa e comprometida com a privacidade e a satisfação de cada cliente.</p>
          <h2>Visão</h2>
          <p>Ser referência em <strong>despachadoria marítima na Costa Verde e no Rio de Janeiro,</strong> reconhecida pela <strong>qualidade técnica, discrição no atendimento e compromisso com resultados seguros.</strong></p>
          <h2>Valores</h2>
          <p><strong>Confiança, Confidencialidade, Comprometimento, transparência, inovação e respeito ao cliente.</strong></p>

        </article>
        
        {/* Seção da Equipe */}
        <article className={styles.teamSection}>
          <h2>Conheça Nossa Equipe</h2>
          <div className={styles.teamList}>
            {team.map((member, index) => (
              <TeamMember key={index} member={member} alternate={index % 2 !== 0} />
            ))}
          </div>
        </article>
      </section>
      <section>
        <Button text="Conheça Nossos Serviços!" to="/services" />
      </section>
   
    </>
  );
};

export default About;
