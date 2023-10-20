import styles from '../styles/Home.module.css';
import React from 'react';

export default function Home() {
  React.useEffect(() => {
    setTimeout(() => {
      const searchpath = location.search;
      location.href = "sfclient://app" + searchpath;
      window.close();
    }, 200)
  }, []);
  return (
    <div className={styles.container}>

    </div>
  );  
}
