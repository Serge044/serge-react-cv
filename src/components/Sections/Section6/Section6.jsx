import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../../features/languageSlice";
import styles from "./Section6.module.css";
import emailjs from "emailjs-com";

const Section6 = React.forwardRef(({ isDarkMode }, ref) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const language = useSelector(selectLanguage);

  const texts = {
    en: {
      writeToMe: "Write to me",
      contactDetails: "Contact Details",
      namePlaceholder: "Name",
      emailPlaceholder: "Email",
      messagePlaceholder: "Message",
      submit: "Submit",
      successMessage: "Sent",
      phone: "📞 +380-63-432-83-77",
      email: "✉️ serhiima.work@gmail.com",
      linkedIn: "🚀 LinkedIn",
      location: "📍 Kyiv, Ukraine",
      resume: "📱 Get My Resume App for Android",
    },
    uk: {
      writeToMe: "Напишіть мені",
      contactDetails: "Контактна інформація",
      namePlaceholder: "Ім'я",
      emailPlaceholder: "Електронна пошта",
      messagePlaceholder: "Повідомлення",
      submit: "Відправити",
      successMessage: "Відправлено",
      phone: "📞 +380-63-432-83-77",
      email: "✉️ serhiima.work@gmail.com",
      linkedIn: "🚀 LinkedIn",
      location: "📍 Київ, Україна",
      resume: "📱 Завантажте моє резюме на Android",
    },
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z8qh4lq", // Service ID
        "template_2fdu1qf", // Template ID
        e.target,
        "pY74AMLD0in5W3O09" // Public Key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setIsSubmitted(true);
          setTimeout(() => setIsSubmitted(false), 3000);
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Error sending message. Please try again.");
        }
      );

    e.target.reset();
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
          <h1 className={styles.sectionTitle}>{texts[language].writeToMe}</h1>
          <form onSubmit={sendEmail} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name" hidden>
                Name
              </label>
              <input
                type="text"
                name="from_name"
                id="name"
                placeholder={texts[language].namePlaceholder}
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
                placeholder={texts[language].emailPlaceholder}
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
                placeholder={texts[language].messagePlaceholder}
                required
              ></textarea>
            </div>
            <div className={styles.btnContainer}>
              {isSubmitted ? (
                <div className={styles.successMessage}>
                  {texts[language].successMessage}
                </div>
              ) : (
                <button type="submit" className={styles.btn}>
                  {texts[language].submit}
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Contact Details */}
        <div className={styles.detailsSection}>
          <h1 className={styles.sectionTitle}>
            {texts[language].contactDetails}
          </h1>
          <ul className={styles.detailsList}>
            <li>
              <a href="tel:+380634328377">{texts[language].phone}</a>
            </li>
            <li>
              <a href="mailto:serhiima.work@gmail.com">
                {texts[language].email}
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/sergemakogon"
                target="_blank"
                rel="noopener noreferrer"
              >
                {texts[language].linkedIn}
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Kyiv%2C+Ukraine"
                target="_blank"
                rel="noopener noreferrer"
              >
                {texts[language].location}
              </a>
            </li>
            <li>
              <a
                href="/downloads/serhii_makohon_cv.apk"
                download="serhii_makohon_cv.apk"
              >
                {texts[language].resume}
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
});

export default Section6;
