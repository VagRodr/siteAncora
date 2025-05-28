import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Button.module.css'

const Button = ({text, to}) => {
    return(
       <button className={styles.button}>
        <Link to={to}>{text}</Link>
       </button>
    );
}




export default Button