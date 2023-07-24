import React from 'react';
import styles from './index.module.scss';
import TextBlock from "../TextBlock";
import {LIST, TEXT_DATA} from "../../constants";
import ListBlock from "../ListBlock";

const MainContent = () => {
  return (
    <div className={styles.container}>
      <TextBlock
        title={TEXT_DATA.firstSectionTitle}
        textContent={TEXT_DATA.firstTextBlock}
      />
      <div className={`${styles.divider} ${styles.hideOnDesk}`}/>
      <ListBlock
        title={TEXT_DATA.secondSectionTitle}
        list={LIST}
      />
      <div className={styles.divider}/>
      <TextBlock
        title={TEXT_DATA.thirdSectionTitle}
        textContent={TEXT_DATA.secondTextBlock}
      />
    </div>
  )
}

export default React.memo(MainContent)