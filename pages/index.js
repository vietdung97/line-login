import styles from '../styles/Home.module.css';
import React from 'react';

export default function Home() {
  const aRef = React.useRef(null);
  React.useEffect(() => {
    setTimeout(() => {
      aRef.current?.click();
      window.close();
    }, 200)
  }, []);
  return (
    <div className={styles.container}>
      <a ref={aRef} href={"sfclient://app" + window.location.search} target='_blank'>Square Fitness</a>
    </div>
  );  
}
