import React, {useCallback} from 'react';
import styles from './App.module.scss';

import Video from './components/Video';
import TextBlock from "./components/TextBlock";
import ListBlock from "./components/ListBlock";
import PrimaryButton from "./components/PrimaryButton";

import {TEXT_DATA, LIST} from "./constants";

function App() {
  const handleClick = useCallback(() => alert('“Hello World” https://www.w3schools.com/jsref/met_win_alert.asp'), [])
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>{TEXT_DATA.pageTitle}</h1>

      <Video/>
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
        <PrimaryButton text={TEXT_DATA.buttonText} onClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
