import React from 'react';
import styles from './index.module.scss';

import plus from "../../assets/plus.png";

interface PropTypes {
  title: string,
  list: string[]
}

const ListBlock = ({title, list}: PropTypes) => {
  return (
    <div className={styles.root}>
      <h2>{title}</h2>

      {list.map((text, i) => (
        <div className={styles.listItem} key={i}>
          <img src={plus} alt="plus"/>
          <p>{text}</p>
        </div>
      ))}
    </div>
  )
}

export default React.memo(ListBlock)