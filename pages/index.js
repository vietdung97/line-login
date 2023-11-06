import styles from '../styles/Home.module.css';
import React from 'react';

export default function Home() {
  const aRef = React.useRef(null);
  const [search, setSearch] = React.useState('');
  React.useEffect(() => {
    setTimeout(() => {
      withLocation();
      withATag();
  }, 1000);
  }, []);
  const withLocation = () => {
    window.location.href = 'sfclient://';
};
const withATag = () => {
    var a = document.createElement('a');
    a.href = 'sfclient://';
    a.click();
    a.remove();
};
  return (
    <div className={styles.container}>
      {/* <a ref={aRef} href={"sfclient://app" + search} target='_blank'>Square Fitness</a> */}
      {/* <input ref={aRef} type="url" value={"sfclient://app" + search} /> */}
    </div>
  );  
}
