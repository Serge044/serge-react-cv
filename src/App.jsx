import { useState, useEffect, useRef } from "react";
import Header from "./components/Header/Header";
import Section1 from "./components/Sections/Section1/Section1";
import Section2 from "./components/Sections/Section2/Section2";
import Section3 from "./components/Sections/Section3/Section3";
import Dots from "./components/Dots/Dots";

import styles from "./App.module.css";

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

  // Ініціалізація теми з localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  // Оновлення теми
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light"); // Збереження теми в localStorage
      console.log(`Тема змінена: ${newMode ? "Темна" : "Світла"}`);
      return newMode;
    });
  };

  useEffect(() => {
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

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = (e) => {
    if (e.target === e.currentTarget) {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <Header
        sections={sections}
        activeIndex={activeIndex}
        scrollToSection={scrollToSection}
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
      />

      <div ref={containerRef} className={styles.container} onClick={closeMenu}>
        <Section1 ref={(el) => (sectionsRef.current[0] = el)} />
        <Section2 ref={(el) => (sectionsRef.current[1] = el)} />
        <Section3 ref={(el) => (sectionsRef.current[2] = el)} />
        <Dots
          sections={sections}
          activeIndex={activeIndex}
          scrollToSection={scrollToSection}
        />
      </div>
    </>
  );
}

export default App;
