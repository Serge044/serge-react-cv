import React from "react";
import styles from "./Section2.module.css";

const Section2 = React.forwardRef(({ isDarkMode }, ref) => {
  return (
    <div
      ref={ref}
      className={`${styles.section} ${
        isDarkMode ? styles.sectionDarkMode : ""
      }`}
    >
      <section id="skills" className={styles.container}>
        <h1 className={styles.sectionTitle}>Skills and Expertise</h1>
        <div className={styles.skillBlock}>
          <div className={styles.skillCategory}>
            <h3>Main stack</h3>
            <p>HTML, CSS, JS, React, TypeScript</p>
          </div>
          <hr />
          <div className={styles.skillCategory}>
            <h3>FE related technologies I worked with</h3>
            <p>
              NodeJS, Redux, RTK, Zustand, SASS, Bootstrap, Tailwind, React
              Native
            </p>
          </div>
          <hr />
          <div className={styles.skillCategory}>
            <h3>Tools</h3>
            <p>Git, Github, NPM, Jest, Postman, Docker, Terminal</p>
          </div>
          <hr />
          <div className={styles.skillCategory}>
            <h3>Other</h3>
            <p>Figma, Photoshop, Jira, Prompt Engineering, Fine-tuning</p>
          </div>
        </div>
      </section>
    </div>
  );
});

export default Section2;
