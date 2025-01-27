import React from "react";
import heroImg from "../../../assets/Serge.png";
import githubLight from "../../../assets/github-light.svg";
import githubDark from "../../../assets/github-dark.svg";
import linkedinLight from "../../../assets/linkedin-light.svg";
import linkedinDark from "../../../assets/linkedin-dark.svg";
import SerhiiMakohonCV from "../../../assets/SerhiiMakohonCV.pdf";
import TypingEffect from "../../../utils/TypingEffect/TypingEffect";
import styles from "./Section1.module.css";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../../features/languageSlice";

const Section1 = React.forwardRef(({ isDarkMode }, ref) => {
  const language = useSelector(selectLanguage);

  const texts = {
    en: {
      name: "Serhii Makohon",
      introduction: "I'm",
      description:
        "I have over 6 years of experience in IT. I am excited about new challenges and committed to achieving success alongside your team. Let’s make a great impact together ;)",
      resumeButton: "Resume",
    },
    uk: {
      name: "Сергій Макогон",
      introduction: "Я",
      description:
        "Я маю понад 6 років досвіду в IT. Я в захваті від нових викликів і прагну досягати успіху разом із вашою командою. Давайте створювати крутий продукт разом ;)",
      resumeButton: "Резюме",
    },
  };

  return (
    <div ref={ref} className={styles.section}>
      <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
          <img
            src={heroImg}
            className={styles.hero}
            alt="Profile picture of Serhii Makohon"
          />
        </div>
        <div className={styles.info}>
          <h1 className={styles.nameTitle}>{texts[language].name}</h1>
          <h4>
            <span>{texts[language].introduction}</span>
            <TypingEffect />
          </h4>
          <div className={styles.socialLinks}>
            <a
              href="https://github.com/Serge044"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={isDarkMode ? githubDark : githubLight}
                alt="Github icon"
              />
            </a>
            <a
              href="https://linkedin.com/in/sergemakogon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={isDarkMode ? linkedinDark : linkedinLight}
                alt="Linkedin icon"
              />
            </a>
          </div>
          <p className={styles.description}>{texts[language].description}</p>
          <a href={SerhiiMakohonCV} download className={styles.cvLink}>
            <button
              className={
                isDarkMode ? styles.resumeButtonDark : styles.resumeButton
              }
            >
              {texts[language].resumeButton}
            </button>
          </a>
        </div>
      </section>
    </div>
  );
});

export default Section1;
