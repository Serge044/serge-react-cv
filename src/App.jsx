import { useState, useEffect, useRef } from "react";
import Header from "./components/Header/Header";
import Section1 from "./components/Sections/Section1/Section1";
import Section2 from "./components/Sections/Section2/Section2";
import Section3 from "./components/Sections/Section3/Section3";
import Section4 from "./components/Sections/Section4/Section4";
import Section5 from "./components/Sections/Section5/Section5";
import Section6 from "./components/Sections/Section6/Section6";
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
    { id: 1, color: "#ff7f7f", text: "Welcome" },
    { id: 2, color: "#7fafff", text: "Expertise" },
    { id: 3, color: "#7fff7f", text: "Experience" },
    // { id: 4, color: "#eb5bc0", text: "Секція 4" },
    // { id: 5, color: "#eb5bc0", text: "Секція 5" },
    { id: 6, color: "#eb5bc0", text: "Contacts" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        // Можна адаптувати за власними вимогами
        setIsMenuOpen(false); // Закриваємо меню, якщо переходить на великий екран
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  // завантаження console.log лише один раз, а не два рази як у строгому режимі
  const hasRanOnce = useRef(false);

  useEffect(() => {
    if (hasRanOnce.current) return;

    console.log(
      "%cDecided to look here? Then you should definitely check out Serge's resume!%c\n%chttps://www.serhii-makohon.site/assets/SerhiiMakohonCV-DkIzDFp0.pdf",
      "background: #222; color: #ffd341; font-size: 16px; font-weight: bold; padding: 10px;", // Unified style for the main message
      "color: #ffd341; font-size: 16px;", // Style for the newline continuation
      "color: #ffd341; font-size: 18px; font-weight: bold; text-decoration: underline;" // Style for the link
    );

    hasRanOnce.current = true;
  }, []);

  // ---

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

  // const scrollToSection = (index) => {
  //   setActiveIndex(index);
  //   isScrollingRef.current = true;
  //   sectionsRef.current[index].scrollIntoView({ behavior: "smooth" });

  //   setTimeout(() => {
  //     isScrollingRef.current = false;
  //   }, 800);
  // };

  const scrollToSection = (index) => {
    setActiveIndex(index);
    isScrollingRef.current = true;

    const headerHeight = document.querySelector("header").offsetHeight; // Висота хедера
    const targetSection = sectionsRef.current[index];

    const offsetTop = targetSection.offsetTop - headerHeight; // Компенсація для фіксованого хедера

    containerRef.current.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });

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
        <Section1
          ref={(el) => (sectionsRef.current[0] = el)}
          isDarkMode={isDarkMode}
        />
        <Section2
          ref={(el) => (sectionsRef.current[1] = el)}
          isDarkMode={isDarkMode}
        />
        <Section3
          ref={(el) => (sectionsRef.current[2] = el)}
          isDarkMode={isDarkMode}
        />
        {/* <Section4 ref={(el) => (sectionsRef.current[3] = el)} />
        <Section5 ref={(el) => (sectionsRef.current[4] = el)} /> */}

        {/* перевірити правильність номеру коли буду розкоментовувати закоментовані секції */}
        <Section6
          ref={(el) => (sectionsRef.current[3] = el)}
          isDarkMode={isDarkMode}
        />
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
