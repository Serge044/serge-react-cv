// import React, { useState } from "react";
// import styles from "./Section6.module.css";
// import emailjs from "emailjs-com";

// const Section6 = React.forwardRef((props, ref) => {
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_z8qh4lq", // Your Service ID
//         "template_2fdu1qf", // Your Template ID
//         e.target,
//         "pY74AMLD0in5W3O09" // Your Public Key
//       )
//       .then(
//         (result) => {
//           console.log("Email sent successfully:", result.text);
//           setIsSubmitted(true);
//           setTimeout(() => setIsSubmitted(false), 3000); // Revert button after 3 seconds
//         },
//         (error) => {
//           console.error("Error sending email:", error.text);
//           alert("Error sending message. Please try again.");
//         }
//       );

//     e.target.reset(); // Clear form after submission
//   };
//   return (
//     <div ref={ref} className={styles.section}>
//       {/* <h1>Секція 6: Завершення</h1> */}
//       <section id="contactDetails" className={styles.container}>
//         {/* Contact Form */}
//         <div className={styles.formSection}>
//           <h1 className="sectionTitle">Write to me</h1>
//           <form onSubmit={sendEmail} className={styles.form}>
//             <div className={styles.formGroup}>
//               <label htmlFor="name" hidden>
//                 Name
//               </label>
//               <input
//                 type="text"
//                 name="from_name"
//                 id="name"
//                 placeholder="Name"
//                 required
//               />
//             </div>
//             <div className={styles.formGroup}>
//               <label htmlFor="email" hidden>
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="from_email"
//                 id="email"
//                 placeholder="Email"
//                 required
//               />
//             </div>
//             <div className={styles.formGroup}>
//               <label htmlFor="message" hidden>
//                 Message
//               </label>
//               <textarea
//                 name="message"
//                 id="message"
//                 placeholder="Message"
//                 required
//               ></textarea>
//             </div>
//             <div className={styles.btnContainer}>
//               {isSubmitted ? (
//                 <div className={styles.successMessage}>Sent</div>
//               ) : (
//                 <button
//                   type="submit"
//                   className={`${styles.hover} ${styles.btn}`}
//                 >
//                   Submit
//                 </button>
//               )}
//             </div>
//           </form>
//         </div>

//         {/* Contact Details */}
//         <div className={styles.detailsSection}>
//           <h1 className={styles.title}>Contact Details</h1>
//           <ul className={styles.detailsList}>
//             <li>
//               <a href="tel:+380634328377">📞 +380-63-432-83-77</a>
//             </li>
//             <li>
//               <a href="mailto:serhiima.work@gmail.com">
//                 ✉️ serhiima.work@gmail.com
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.linkedin.com/sergemakogon/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 🚀 LinkedIn
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.google.com/maps/search/?api=1&query=Kyiv%2C+Ukraine"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 📍 Kyiv, Ukraine
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>
//     </div>
//   );
// });

// export default Section6;

import React, { useState } from "react";
import styles from "./Section6.module.css";
import emailjs from "emailjs-com";

const Section6 = React.forwardRef(({ isDarkMode }, ref) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z8qh4lq", // Your Service ID
        "template_2fdu1qf", // Your Template ID
        e.target,
        "pY74AMLD0in5W3O09" // Your Public Key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setIsSubmitted(true);
          setTimeout(() => setIsSubmitted(false), 3000); // Revert button after 3 seconds
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Error sending message. Please try again.");
        }
      );

    e.target.reset(); // Clear form after submission
  };

  return (
    <div
      ref={ref}
      className={`${styles.section} ${
        isDarkMode ? styles.darkTheme : styles.lightTheme
      }`}
      data-theme={isDarkMode ? "dark" : "light"}
    >
      <section id="contactDetails" className={styles.container}>
        {/* Contact Form */}
        <div className={styles.formSection}>
          <h1 className={styles.sectionTitle}>Write to me</h1>
          <form onSubmit={sendEmail} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name" hidden>
                Name
              </label>
              <input
                type="text"
                name="from_name"
                id="name"
                placeholder="Name"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" hidden>
                Email
              </label>
              <input
                type="email"
                name="from_email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" hidden>
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div className={styles.btnContainer}>
              {isSubmitted ? (
                <div className={styles.successMessage}>Sent</div>
              ) : (
                <button type="submit" className={styles.btn}>
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Contact Details */}
        <div className={styles.detailsSection}>
          <h1 className={styles.title}>Contact Details</h1>
          <ul className={styles.detailsList}>
            <li>
              <a href="tel:+380634328377">📞 +380-63-432-83-77</a>
            </li>
            <li>
              <a href="mailto:serhiima.work@gmail.com">
                ✉️ serhiima.work@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/sergemakogon/"
                target="_blank"
                rel="noopener noreferrer"
              >
                🚀 LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Kyiv%2C+Ukraine"
                target="_blank"
                rel="noopener noreferrer"
              >
                📍 Kyiv, Ukraine
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
});

export default Section6;
