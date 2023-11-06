import styles from '../styles/Home.module.css';
import React from 'react';

export default function Home() {
  const aRef = React.useRef(null);
  const [search, setSearch] = React.useState('');
  React.useEffect(() => {
    setSearch(window.location.search);
    setTimeout(() => {
      aRef.current?.click();
      window.close();
    }, 300)
  }, []);
  return (
    <div className={styles.container}>
      <a ref={aRef} href={"sfclient://app" + search} target='_blank'>Square Fitness</a>
    </div>
  );  
}
