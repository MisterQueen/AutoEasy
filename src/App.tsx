import React, {useCallback} from 'react';
import styles from './App.module.scss';

import Video from './components/Video';
import MainContent from "./components/MainContent";
import PrimaryButton from "./components/PrimaryButton";

import {TEXT_DATA} from "./constants";

function App() {
  const handleClick = useCallback(() => alert('“Hello World” https://www.w3schools.com/jsref/met_win_alert.asp'), [])
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>{TEXT_DATA.pageTitle}</h1>

      <Video/>
      <MainContent/>
      <PrimaryButton text={TEXT_DATA.buttonText} onClick={handleClick}/>
    </div>
  );
}

export default App;
