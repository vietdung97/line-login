import styles from "../styles/Home.module.css";
import React from "react";

export default function Home() {
  React.useEffect(() => {
    setTimeout(() => {
      withATag();
    }, 1000);
  }, []);

  const withATag = () => {
    var a = document.createElement("a");
    a.href = "sfclient://app" + window.location.search;
    a.click();
    a.remove();
    setTimeout(() => {
      window.close();
    }, 100);
  };
  return (
    <div className={styles.container}>
      {/* <a ref={aRef} href={"sfclient://app" + search} target='_blank'>Square Fitness</a> */}
      {/* <input ref={aRef} type="url" value={"sfclient://app" + search} /> */}
    </div>
  );
}
