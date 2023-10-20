import styles from '../styles/Home.module.css';
import React from 'react';

export default function Home() {
  React.useEffect(() => {
    setTimeout(() => {
      location.href = "app://sf.client";
      window.close();
    }, 200)
  }, []);
  return (
    <div className={styles.container}>

    </div>
  );  
}
