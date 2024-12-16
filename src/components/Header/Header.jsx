import React, { useEffect } from "react";
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
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    }
  }, [isDarkMode]);

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
              {section.text}
            </a>
          ))}
        </nav>
      )}

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
                {section.text}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
