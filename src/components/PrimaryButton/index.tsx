import React from 'react';
import styles from './index.module.scss';

interface PropTypes {
  text: string,
  onClick: () => void,
}

const PrimaryButton = ({text, onClick}: PropTypes) => {
  return (
    <button className={styles.button} onClick={onClick}>{text}</button>
  )
}

export default React.memo(PrimaryButton)