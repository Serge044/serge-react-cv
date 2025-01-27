import React from "react";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../../features/languageSlice";
import styles from "./Section3.module.css";

const Section3 = React.forwardRef(({ isDarkMode }, ref) => {
  const language = useSelector(selectLanguage);

  const texts = {
    en: {
      title: "Work Experience",
      positions: [
        {
          company: "Wix",
          role: "AI QA | June 2020 - Present",
          description: [
            "Data analytics & curation",
            "Prompt engineering",
            "Generative AI",
          ],
          subRoles: [
            {
              title: "Data Labeler | June 2020 - April 2021",
              tasks: ["Large scale data labeling, categorization"],
            },
          ],
        },
        {
          company: "Ring",
          role: "Data Specialist | October 2017 - September 2019",
          description: [
            "Large scale data labeling",
            "Testing new labeling tools",
            "Mentoring of new employees",
          ],
        },
      ],
    },
    uk: {
      title: "Досвід роботи",
      positions: [
        {
          company: "Wix",
          role: "AI QA | Червень 2020 - Теперішній час",
          description: [
            "Аналіз та кураторство даних",
            "Інженерія запитів",
            "Генеративний ШІ",
          ],
          subRoles: [
            {
              title:
                "Спеціаліст з розмітки даних | Червень 2020 - Квітень 2021",
              tasks: ["Розмітка та категоризація даних великого масштабу"],
            },
          ],
        },
        {
          company: "Ring",
          role: "Спеціаліст з даних | Жовтень 2017 - Вересень 2019",
          description: [
            "Розмітка даних великого масштабу",
            "Тестування нових інструментів розмітки",
            "Наставництво нових співробітників",
          ],
        },
      ],
    },
  };

  return (
    <div
      ref={ref}
      className={styles.section}
      data-theme={isDarkMode ? "dark" : "light"}
    >
      <section id="work-experience" className={styles.container}>
        <h1 className={styles.title}>{texts[language].title}</h1>
        <div className={styles.experienceBlock}>
          {texts[language].positions.map((position, index) => (
            <div key={index} className={styles.experienceCategory}>
              <h3>{position.company}</h3>
              <p className={styles.position}>{position.role}</p>
              <ul>
                {position.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              {position.subRoles &&
                position.subRoles.map((subRole, subIndex) => (
                  <div key={subIndex}>
                    <strong>{subRole.title}</strong>
                    <ul>
                      {subRole.tasks.map((task, taskIndex) => (
                        <li key={taskIndex}>{task}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              <hr className={styles.hr} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
});

export default Section3;
