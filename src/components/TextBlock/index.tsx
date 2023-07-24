import React from 'react';
import styles from "./index.module.scss";

interface PropTypes {
  title: string,
  textContent: string
}

const TextBlock = ({title, textContent}: PropTypes) => {
  return (
    <div className={styles.root}>
      <h2>{title}</h2>
      <p>{textContent}</p>
    </div>
  )
}

export default React.memo(TextBlock)