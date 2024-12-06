// import React from "react";
// import heroImg from "../../../assets/Serge.png";
// import githubLight from "../../../assets/github-light.svg";
// import linkedinLight from "../../../assets/linkedin-light.svg";
// import SerhiiMakohonCV from "../../../assets/SerhiiMakohonCV.pdf";
// import TypingEffect from "../../../utils/TypingEffect/TypingEffect";

// import styles from "./Section1.module.css";

// const Section1 = React.forwardRef((props, ref) => {
//   return (
//     <div ref={ref} className={styles.section}>
//       {/* <h1>Секція 1: Вступ</h1> */}
//       <section id="hero" className={styles.container}>
//         <div className={styles.colorModeContainer}>
//           <img
//             src={heroImg}
//             className={styles.hero}
//             alt="Profile picture of Serhii Makohon"
//           />
//         </div>
//         <div className={styles.info}>
//           <h1>
//             Serhii
//             <br />
//             Makohon
//           </h1>
//           <h4>
//             <span>I'm </span>
//             <TypingEffect />
//           </h4>
//           <span>
//             <a
//               href="https://github.com/Serge044"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img src={githubLight} alt="Github icon" />
//             </a>
//             <a
//               href="https://linkedin.com/in/sergemakogon"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img src={linkedinLight} alt="Linkedin icon" />
//             </a>
//           </span>
//           <p className={styles.description}>
//             I have over 6 years of experience in IT. <br />I am excited about
//             new challenges and committed to achieving success alongside your
//             team. Let’s make a great impact together ;&#41;
//           </p>
//           <a href={SerhiiMakohonCV} download>
//             <button className="hover">Resume</button>
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// });

// export default Section1;

import React from "react";
import heroImg from "../../../assets/Serge.png";
import githubLight from "../../../assets/github-light.svg";
import githubDark from "../../../assets/github-dark.svg";
import linkedinLight from "../../../assets/linkedin-light.svg";
import linkedinDark from "../../../assets/linkedin-dark.svg";
import SerhiiMakohonCV from "../../../assets/SerhiiMakohonCV.pdf";
import TypingEffect from "../../../utils/TypingEffect/TypingEffect";
import styles from "./Section1.module.css";

const Section1 = React.forwardRef(({ isDarkMode }, ref) => {
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
          <h1 className={styles.nameTitle}>Serhii Makohon</h1>
          <h4>
            <span>I'm&nbsp;</span>
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
          <p className={styles.description}>
            I have over 6 years of experience in IT. <br />I am excited about
            new challenges and committed to achieving success alongside your
            team. Let’s make a great impact together ;&#41;
          </p>
          <a href={SerhiiMakohonCV} download className={styles.cvLink}>
            <button
              className={
                isDarkMode ? styles.resumeButtonDark : styles.resumeButton
              }
            >
              Resume
            </button>
          </a>
        </div>
      </section>
    </div>
  );
});

export default Section1;
