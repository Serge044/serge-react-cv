import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  const isScrollingRef = useRef(false);

  const sections = [
    { id: 1, color: "#ff7f7f", text: "Секція 1: Вступ" },
    { id: 2, color: "#7fafff", text: "Vite + React" },
    { id: 3, color: "#7fff7f", text: "Секція 3: Завершення" },
  ];

  useEffect(() => {
    // Перевіряємо збережену тему
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }

    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const scrollPosition = containerRef.current.scrollTop;

      const newIndex = sectionsRef.current.findIndex(
        (section) =>
          section.offsetTop <= scrollPosition + window.innerHeight / 2 &&
          section.offsetTop + section.offsetHeight >
            scrollPosition + window.innerHeight / 2
      );

      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    };

    containerRef.current.addEventListener("scroll", handleScroll);

    return () => {
      containerRef.current.removeEventListener("scroll", handleScroll);
    };
  }, [activeIndex]);

  const scrollToSection = (index) => {
    setActiveIndex(index);
    isScrollingRef.current = true;
    sectionsRef.current[index].scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 800);
  };

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      // Зберігаємо вибрану тему в локальному сховищі
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  useEffect(() => {
    // Додаємо або видаляємо клас теми в залежності від вибору
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = (e) => {
    // Закриваємо меню, якщо натискаємо за межами меню
    if (e.target === e.currentTarget) {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className="sticky-header">
        <div className="burger-menu" onClick={toggleMenu}>
          ☰
        </div>
        <div className="nav-links">
          {sections.map((section, index) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`nav-link ${activeIndex === index ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(index);
                setIsMenuOpen(false); // Закриваємо меню після натискання на лінк
              }}
            >
              {section.text}
            </a>
          ))}
        </div>
        <div className="theme-toggle" onClick={toggleTheme}>
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
      </header>

      <div ref={containerRef} className="container" onClick={closeMenu}>
        {sections.map((section, index) => (
          <div
            key={section.id}
            ref={(el) => (sectionsRef.current[index] = el)}
            className="section"
            style={{ backgroundColor: section.color }}
            id={section.id}
          >
            <h1>{section.text}</h1>
          </div>
        ))}

        <div className="dots-container">
          {sections.map((_, index) => (
            <span
              key={index}
              className={`dot ${activeIndex === index ? "active" : ""}`}
              onClick={() => scrollToSection(index)}
            />
          ))}
        </div>
      </div>

      {/* Бургер меню */}
      <div
        className={`burger-menu-container ${isMenuOpen ? "open" : ""}`}
        onClick={closeMenu}
      >
        <div className="burger-menu-close" onClick={() => setIsMenuOpen(false)}>
          ✖
        </div>
        <div className="burger-menu-items">
          {sections.map((section, index) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`nav-link ${activeIndex === index ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(index);
                setIsMenuOpen(false);
              }}
            >
              {section.text}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
