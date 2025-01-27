import React from "react";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../../features/languageSlice";
import styles from "./Section2.module.css";

const Section2 = React.forwardRef(({ isDarkMode }, ref) => {
  const language = useSelector(selectLanguage);

  const texts = {
    en: {
      title: "Skills and Expertise",
      mainStack: "Main stack",
      technologies: "FE related technologies I worked with",
      tools: "Tools",
      other: "Other",
      mainStackList: "HTML, CSS, JS, React, TypeScript",
      technologiesList:
        "NodeJS, Redux, RTK, Zustand, SASS, Bootstrap, Tailwind, React Native",
      toolsList: "Git, Github, NPM, Jest, Postman, Docker, Terminal",
      otherList: "Figma, Photoshop, Jira, Prompt Engineering, Fine-tuning",
    },
    uk: {
      title: "Навички та Експертиза",
      mainStack: "Головний стек",
      technologies: "Технології, з якими я працював",
      tools: "Інструменти",
      other: "Інше",
      mainStackList: "HTML, CSS, JS, React, TypeScript",
      technologiesList:
        "NodeJS, Redux, RTK, Zustand, SASS, Bootstrap, Tailwind, React Native",
      toolsList: "Git, Github, NPM, Jest, Postman, Docker, Terminal",
      otherList: "Figma, Photoshop, Jira, Prompt Engineering, Fine-tuning",
    },
  };

  return (
    <div
      ref={ref}
      className={`${styles.section} ${
        isDarkMode ? styles.sectionDarkMode : ""
      }`}
    >
      <section id="skills" className={styles.container}>
        <h1 className={styles.sectionTitle}>{texts[language].title}</h1>
        <div className={styles.skillBlock}>
          <div className={styles.skillCategory}>
            <h3>{texts[language].mainStack}</h3>
            <p>{texts[language].mainStackList}</p>
          </div>
          <hr />
          <div className={styles.skillCategory}>
            <h3>{texts[language].technologies}</h3>
            <p>{texts[language].technologiesList}</p>
          </div>
          <hr />
          <div className={styles.skillCategory}>
            <h3>{texts[language].tools}</h3>
            <p>{texts[language].toolsList}</p>
          </div>
          <hr />
          <div className={styles.skillCategory}>
            <h3>{texts[language].other}</h3>
            <p>{texts[language].otherList}</p>
          </div>
        </div>
      </section>
    </div>
  );
});

export default Section2;
