import React from 'react';
import styles from './Salvatagem.module.css';
import salvatagemBanner from '../../assets/images/bannerSalvatagem.svg'

const salvatagemData = [
  {
    topic: "Navegação Interior",
    items: [
      <strong>EMBARCAÇÕES MIÚDAS - (Até 6 m de comprimento)</strong> ,
      "- Coletes Salva-vidas",
      "- Habilitação (mínima) - Veleiro, Arrais ou Motonauta (conforme o tipo de embarcação)",
      "- Luzes de Navegação - (em navegação noturna) RIPEAM-Parte C",
      "- Marcações no Casco",
      "- Termo de Responsabilidade - (dispensado para as embarcações Isentas de inscrição)",
      "- Título de Inscrição - (dispensado para as embarcações Isentas de inscrição)",
    ]
  },
  {
    topic: "Navegação Interior",
    items: [
      <strong>EMBARCAÇÕES DE MÉDIO PORTE (De 6 m até 24 m de comprimento)</strong>,
      "- Agulha Magnética",
      "- Âncora - Com no mínimo 20m de cabo ou amarra",
      "- Apito",
      "- Bandeira Nacional",
      "- Boia Salva-vidas (circular ou ferradura) - 01 unidade para embarcações com até 12m e 02 unidades para embarcações com comprimento igual ou maior que 12m, pelo menos uma com retinida flutuante",
      "- Bomba de Esgoto - 01 unidade para embarcações com até 12m; para embarcações com comprimento igual ou maior que 12m: 01 manual e 02 elétricas ou acoplada ao motor",
      "- Coletes Salva-vidas",
      "- Extintor de Incêndio",
      "- Habilitação (mínima) - Arrais Amador",
      "- Lanterna Portátil - 01 unidade",
      "- Luzes de Navegação - RIPEAM - Parte C",
      "- Marcações no Casco",
      "- Materiais e Medicamentos de Primeiros Socorros - a partir de 15 pessoas a bordo",
      "- Quadros",
      "- Rádio VHF - (Recomendado)",
      "- Termo de Responsabilidade - (dispensado para as embarcações com comprimento menor ou igual à 12m)",
      "- Título de Inscrição",
      "- Vistoria Inicial"
    ]
  },
  {
    topic: "Navegação Costeira",
    items: [
      <strong>EMBARCAÇÕES DE MÉDIO PORTE - (De 6 m até 24 m de comprimento)</strong>,
      "- Aguha Magnética",
      "- Âncora - Com no mínimo 20m de cabo ou amarra",
      "- Apito",
      "- Artefatos Pirotécnicos",
      "- Bandeira Nacional",
      "- Boia Salva-vidas (circular ou ferradura) - 01 unidade para embarcações com até 12m e 02 unidades para embarcações com comprimento igual ou maior que 12m, pelo menos uma com retinida flutuante, todas com dispositivo de iluminação automático",
      "- Bomba de Esgoto - 01 unidade para embarcações com até 12m; para embarcações com comprimento igual ou maior que 12m: 01 manual e 02 elétricas ou acoplada ao motor",
      "- Coletes Salva-vidas - Classe II",
      "- Extintor de Incêndio",
      "- Sistema Global de Navegação - GNSS - (01 unidade)",
      "- Habilitação (mínima) - Mestre Amador",
      "- Lanterna Portátil - 01 unidade",
      "- Materiais e Medicamentos de Primeiros Socorros - a partir de 15 pessoas a bordo",
      "- Quadros",
      "- Refletor Radar",
      "- Rádio VHF",
      "- Sino ou Buzina Manual",
      "- Termo de Responsabilidade - (dispensado para as embarcações com comprimento menor ou igual à 12m)",
      "- Título de Inscrição",
      "- Vistoria Inicial"
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
        <h1 className={styles.pageTitle}>Equipamentos de Salvatagem Obrigatórios para Embarcações</h1>
        <h3>A segurança na navegação é uma prioridade para a Âncora Despachadoria Marítima.</h3>
        <p>A Marinha do Brasil estabelece normas específicas para os equipamentos obrigatórios de salvatagem, conforme o tipo de navegação e o porte da embarcação. Abaixo, detalhamos os itens exigidos para diferentes categorias.</p>
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
