import React from 'react';
import { Link } from 'react-router-dom'
import styles from './NextPage.module.css'

const nextPage = (props) => {
    return(
        <article className={styles.nextPage}>
              <h3><Link to={props.link}>{props.frase}</Link></h3>
          </article>
    );
}

export default nextPage