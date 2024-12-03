import React from "react";
import styles from "./Section2.module.css";

const Section2 = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={styles.section}>
      <h1>Vite + React</h1>
    </div>
  );
});

export default Section2;
