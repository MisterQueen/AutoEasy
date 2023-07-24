import React from 'react';
import styles from './index.module.scss';

import play from '../../assets/play.png'

const Video = () => {
  return (
    <div className={styles.video}>
      <img src={play} alt="play"/>
    </div>
  )
}

export default React.memo(Video)