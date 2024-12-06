// import React from "react";
// import styles from "./Section3.module.css";

// const Section3 = React.forwardRef((props, ref) => {
//   return (
//     <div ref={ref} className={styles.section}>
//       <section id="work-experience" className={styles.container}>
//         <h1 className={styles.title}>Work Experience</h1>
//         <div className={styles.experienceBlock}>
//           <div className={styles.experienceCategory}>
//             <h3>Wix</h3>
//             <p className={styles.position}>AI QA | June 2020 - Present</p>
//             <strong>AI QA | April 2021 - Present</strong>
//             <ul>
//               <li>Data analytics & curation</li>
//               <li>Prompt engineering</li>
//               <li>Generative AI</li>
//             </ul>
//             <strong>Data Labeler | June 2020 - April 2021</strong>
//             <ul>
//               <li>Large scale data labeling, categorization</li>
//             </ul>
//           </div>
//           <hr />
//           <div className={styles.experienceCategory}>
//             <h3>Ring</h3>
//             <p className={styles.position}>
//               Data Specialist | October 2017 - September 2019
//             </p>
//             <ul>
//               <li>Large scale data labeling</li>
//               <li>Testing new labeling tools</li>
//               <li>Mentoring of new employees</li>
//             </ul>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// });

// export default Section3;

import React from "react";
import styles from "./Section3.module.css";

const Section3 = React.forwardRef(({ isDarkMode }, ref) => {
  return (
    <div
      ref={ref}
      className={styles.section}
      data-theme={isDarkMode ? "dark" : "light"}
    >
      <section id="work-experience" className={styles.container}>
        <h1 className={styles.title}>Work Experience</h1>
        <div className={styles.experienceBlock}>
          <div className={styles.experienceCategory}>
            <h3>Wix</h3>
            <p className={styles.position}>AI QA | June 2020 - Present</p>
            <strong>AI QA | April 2021 - Present</strong>
            <ul>
              <li>Data analytics & curation</li>
              <li>Prompt engineering</li>
              <li>Generative AI</li>
            </ul>
            <strong>Data Labeler | June 2020 - April 2021</strong>
            <ul>
              <li>Large scale data labeling, categorization</li>
            </ul>
          </div>
          <hr />
          <div className={styles.experienceCategory}>
            <h3>Ring</h3>
            <p className={styles.position}>
              Data Specialist | October 2017 - September 2019
            </p>
            <ul>
              <li>Large scale data labeling</li>
              <li>Testing new labeling tools</li>
              <li>Mentoring of new employees</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
});

export default Section3;
