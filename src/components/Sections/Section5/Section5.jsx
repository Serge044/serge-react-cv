import React from "react";
import styles from "./Section5.module.css";
import owlImage from "../../../assets/owl.png";

const Section5 = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={styles.section}>
      {/* <h1>Duolingo Owl</h1> */}
      <section className={styles.container}>
        <img src={owlImage} alt="Duolingo Owl" className={styles.owlImage} />
        <h2 className={styles.heading}>Learn Languages with Fun!</h2>
        <p className={styles.text}>
          Join millions of learners and have fun mastering a new language with
          Duolingo's friendly owl companion.
        </p>
      </section>
    </div>
  );
});

export default Section5;
