import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLanguage, selectLanguage } from "../../features/languageSlice"; // Імпорт slice для мов
import styles from "./Header.module.css";

function Header({
  sections,
  activeIndex,
  scrollToSection,
  toggleTheme,
  isDarkMode,
  isMenuOpen,
  toggleMenu,
  closeMenu,
}) {
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage); // Отримання поточної мови

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    }
  }, [isDarkMode]);

  const handleLanguageToggle = () => {
    dispatch(toggleLanguage());
  };

  const displayedLanguage = language === "en" ? "UA" : "EN"; // Мова, на яку переключаємося
  const currentLanguage = language === "en" ? "EN" : "UA"; // Поточна мова

  const sectionTitles = {
    en: {
      Welcome: "Welcome",
      Expertise: "Expertise",
      Experience: "Experience",
      Contacts: "Contact",
    },
    uk: {
      Welcome: "Вітаю",
      Expertise: "Експертиза",
      Experience: "Досвід роботи",
      Contacts: "Контакти",
    },
  };

  return (
    <header
      className={isDarkMode ? styles.stickyHeaderDark : styles.stickyHeader}
    >
      <div className={styles.burgerMenu} onClick={toggleMenu}>
        ☰
      </div>

      {/* Navigation for larger screens */}
      {!isMenuOpen && (
        <nav className={styles.navLinks}>
          {sections.map((section, index) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`${styles.navLink} ${
                activeIndex === index ? styles.active : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(index);
              }}
            >
              {language === "en"
                ? sectionTitles.en[section.text]
                : sectionTitles.uk[section.text]}
            </a>
          ))}
        </nav>
      )}

      {/* Button for language toggle */}
      <div className={styles.languageToggle} onClick={handleLanguageToggle}>
        {isDarkMode ? (
          <button className={styles.languageButtonDark}>
            <span className={styles.currentLanguage}>{currentLanguage}</span>
            <span className={styles.arrow}> ➔ </span>
            <span>{displayedLanguage}</span>
          </button>
        ) : (
          <button className={styles.languageButton}>
            <span className={styles.currentLanguage}>{currentLanguage}</span>
            <span className={styles.arrow}> ➔ </span>
            <span>{displayedLanguage}</span>
          </button>
        )}
      </div>

      {/* Button for theme toggle */}
      <div className={styles.themeToggle} onClick={toggleTheme}>
        {isDarkMode ? (
          <span role="img" aria-label="moon">
            🌕
          </span>
        ) : (
          <span role="img" aria-label="sun">
            🌑
          </span>
        )}
      </div>

      {/* Burger Menu for smaller screens */}
      {isMenuOpen && (
        <div
          className={
            isDarkMode
              ? styles.burgerMenuContainerDark
              : styles.burgerMenuContainer
          }
          onClick={closeMenu}
        >
          <div
            className={
              isDarkMode ? styles.burgerMenuCloseDark : styles.burgerMenuClose
            }
            onClick={toggleMenu}
          >
            ✖
          </div>

          <div className={styles.burgerMenuItems}>
            {sections.map((section, index) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`${styles.navLink} ${
                  activeIndex === index ? styles.active : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(index);
                  toggleMenu();
                }}
              >
                {language === "en"
                  ? sectionTitles.en[section.text]
                  : sectionTitles.uk[section.text]}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
