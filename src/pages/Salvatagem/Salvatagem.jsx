import React from 'react';
import styles from './Salvatagem.module.css';
import salvatagemBanner from '../../assets/images/Salvatagem.png'

const salvatagemData = [
  {
    topic: "Navegação Interior",
    items: [
      <strong>EMBARCAÇÕES MIÚDAS - (Embarcações com até 6 m de comprimento)</strong> ,
      "- COLETES SALVA-VIDAS",
      "- HABILIAÇÃO (mínima) - Veleiro, Arrais ou Motonauta (conforme o tipo de embarcação)",
      "- LUZES DE NAVEGAÇÃO - (em navegação noturna) RIPEAM-Parte C",
      "- MARCAÇÕES NO CASCO (nome nos dois bordos, porto e nº de inscrição) - (somente o nº de inscrição)",
      "- TERMO DE RESPONSABILIDADE - (dispensado para as embarcações Isentas de inscrição)",
      "- TÍTULO DE INSCRIÇÃO - (dispensado para as embarcações Isentas de inscrição)",
    ]
  },
  {
    topic: "Navegação Interior",
    items: [
      <strong>EMBARCAÇÕES DE MÉDIO PORTE (Embarcações de 6 m até 24 m de comprimento)</strong>,
      "- AGULHA MAGNÉTICA",
      "- ÂNCORA - Com no mínimo 20m de cabo ou amarra",
      "- APITO",
      "- BANDEIRA NACIONAL",
      "- BOIA SALVA-VIDAS (circular ou ferradura) - 01 unidade para embarcações com até 12m e 02 unidades para embarcações com comprimento igual ou maior que 12m, pelo menos uma com retinida flutuante",
      "- BOMBA D ESGOTO - 01 unidade para embarcações com até 12m; para embarcações com comprimento igual ou maior que 12m: 01 manual e 02 elétricas ou acoplada ao motor",
      "- COLETES SALVA-VIDAS",
      "- EXTINTOR DE INCÊNDIO",
      "- HABILIAÇÃO (mínima) - Arrais Amador",
      "- LANTERNA PORTÁTIL - 01 unidade",
      "- LUZES DE NAVEGAÇÃO - RIPEAM - Parte C",
      "- MARCAÇÕES NO CASCO (nome nos dois bordos, porto e nº de inscrição)",
      "- MATERIAIS E MEDICAMENTOS DE PRIMEIROS SOCORROS - a partir de 15 pessoas a bordo",
      "- QUADROS",
      "- RÁDIO VHF - É RECOMENDADO",
      "- TERMO DE RESPONSABILIDADE - (dispensado para as embarcações com comprimento menor ou igual à 12m)",
      "- TÍTULO DE INSCRIÇÃO",
      "- VISTORIA INICIAL"
    ]
  },
  {
    topic: "Navegação Costeira",
    items: [
      <strong>EMBARCAÇÕES DE MÉDIO PORTE - (Embarcações de 6 m até 24 m de comprimento)</strong>,
      "- AGULHA MAGNÉTICA",
      "- ÂNCORA - Com no mínimo 20m de cabo ou amarra",
      "- APITO",
      "- ARTEFATOS PIROTÉCNICOS",
      "- BANDEIRA NACIONAL",
      "- BOIA SALVA-VIDAS (circular ou ferradura) - 01 unidade para embarcações com até 12m e 02 unidades para embarcações com comprimento igual ou maior que 12m, pelo menos uma com retinida flutuante, todas com dispositivo de iluminação automático",
      "- BOMBA D ESGOTO - 01 unidade para embarcações com até 12m; para embarcações com comprimento igual ou maior que 12m: 01 manual e 02 elétricas ou acoplada ao motor",
      "- COLETES SALVA-VIDAS - Classe II",
      "- EXTINTOR DE INCÊNDIO",
      "- SISTEMA GLOBAL DE NAVEGAÇÃO - GNSS - (01 unidade)",
      "- HABILIAÇÃO (mínima) - Mestre Amador",
      "- LANTERNA PORTÁTIL - 01 unidade",
      "- MATERIAIS E MEDICAMENTOS DE PRIMEIROS SOCORROS - a partir de 15 pessoas a bordo",
      "- QUADROS",
      "- REFLETOR RADAR",
      "- RÁDIO VHF",
      "- SINO OU BUZINA MANUAL",
      "- TERMO DE RESPONSABILIDADE - (dispensado para as embarcações com comprimento menor ou igual à 12m)",
      "- TÍTULO DE INSCRIÇÃO",
      "- VISTORIA INICIAL"
    ]
  }
];

const Salvatagem = () => {
  return (
    <>
      <section className={styles.salvatagem}>
        <figure className={styles.banner}>
          <img src={salvatagemBanner} alt="" />
        </figure>
        <h1 className={styles.pageTitle}>Salvatagem</h1>
        {salvatagemData.map((section, index) => (
          <section key={index} className={styles.section}>
            <h2 className={styles.topicTitle}>{section.topic}</h2>
            <ol className={styles.itemList}>
              {section.items.map((item, idx) => (
                <li key={idx} className={styles.item}>{item}</li>
              ))}
            </ol>
          </section>
        ))}
      </section>
    </>
  );
};

export default Salvatagem;
