import styles from '../styles/Home.module.css';
import React from 'react';

export default function Home() {
  React.useEffect(() => {
    setTimeout(() => {
      location.href = "sfclient://app";
      window.close();
    }, 200)
  }, []);
  return (
    <div className={styles.container}>

    </div>
  );  
}
