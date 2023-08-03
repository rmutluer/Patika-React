import React from "react";
// import './styles.css'
//farklı komponentler için aynı classnamee sahip stil kullandığımızda bunlar çakışır bu nedenle styles.css dosyamıza styles.module.css diye isim verip classname içinde de süslü parantez içinde styles.class şeklinde çağırarak çakışmalarını önleriz.
import styles from "./styles.module.css";
function A() {
  console.log("A nin styleı:", styles);
  return <div className={styles.title}>A</div>;
}

export default A;
