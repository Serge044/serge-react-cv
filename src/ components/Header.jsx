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
  return (
    <header className={styles.stickyHeader}>
      <div className={styles.burgerMenu} onClick={toggleMenu}>
        ☰
      </div>
      <div className={styles.navLinks}>
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
      </div>
      <div className={styles.themeToggle} onClick={toggleTheme}>
        {isDarkMode ? (
          <span role="img" aria-label="moon">
            🌙
          </span>
        ) : (
          <span role="img" aria-label="sun">
            🌞
          </span>
        )}
      </div>
      {isMenuOpen && (
        <div className={`${styles.burgerMenuContainer}`} onClick={closeMenu}>
          <div className={styles.burgerMenuClose} onClick={() => toggleMenu()}>
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
