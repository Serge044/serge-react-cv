import React from "react";
import styles from "./Section1.module.css";

const Section1 = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={styles.section}>
      <h1>Секція 1: Вступ</h1>
    </div>
  );
});

export default Section1;
