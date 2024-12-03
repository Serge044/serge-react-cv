import React from "react";
import styles from "./Section3.module.css";

const Section3 = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={styles.section}>
      <h1>Секція 3: Завершення</h1>
    </div>
  );
});

export default Section3;
