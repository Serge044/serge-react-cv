import React, { useState, useEffect } from "react";
import styles from "./TypingEffect.module.css"; // Імпорт CSS-модуля

const TypingEffect = () => {
  const texts = [
    "a Front End Developer",
    "a Web Developer",
    "a FED",
    "just a good guy ;)",
  ]; // Приклад текстів
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    let typingInterval;

    if (!isDeleting && displayedText.length < currentText.length) {
      typingInterval = setInterval(() => {
        setDisplayedText((prev) => currentText.slice(0, prev.length + 1));
        if (displayedText.length === currentText.length - 1) {
          clearInterval(typingInterval);
          setTimeout(() => setIsDeleting(true), 3000);
        }
      }, 100);
    } else if (isDeleting && displayedText.length > 0) {
      typingInterval = setInterval(() => {
        setDisplayedText((prev) => currentText.slice(0, prev.length - 1));
        if (displayedText.length === 1) {
          clearInterval(typingInterval);
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }, 50);
    }

    return () => clearInterval(typingInterval);
  }, [displayedText, isDeleting, currentTextIndex, texts]);

  return (
    <span className={styles.typingText}>
      {displayedText}
      <span className={styles.blinkingCursor}>|</span>
    </span>
  );
};

export default TypingEffect;
