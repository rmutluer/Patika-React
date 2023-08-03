import React from "react";
// import './styles.css'
import styles from "./styles.module.css";
function B() {
  console.log("B nin styleı:", styles);
  return <div className={styles.title}>B</div>;
}

export default B;
