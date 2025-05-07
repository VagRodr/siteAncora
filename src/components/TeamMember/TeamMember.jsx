import React from 'react';
import styles from './TeamMember.module.css';

const TeamMember = ({ member, alternate }) => {
  return (
    <section className={`${styles.teamMember} ${alternate ? styles.alternate : ''}`}>
      <article className={styles.photo}>
        <img src={member.photo} alt={member.name} />
      </article>
      <section className={styles.info}>
        <h3>{member.name}</h3>
        <p>{member.bio}</p>
      </section>
    </section>
  );
};

export default TeamMember;
