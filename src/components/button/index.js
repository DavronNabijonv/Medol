import React from 'react'
import {Link} from 'react-router-dom'
import styles from './index.module.scss'


export default function Button(props) {
  return <button className={styles.btn} onClick={props.btnFunction}><Link to={props.toLink}>{props.btnName}</Link></button>
}
