import styles from "./Dots.module.css";

function Dots({ sections, activeIndex, scrollToSection }) {
  return (
    <div className={styles.dotsContainer}>
      {sections.map((_, index) => (
        <span
          key={index}
          className={`${styles.dot} ${
            activeIndex === index ? styles.active : ""
          }`}
          onClick={() => scrollToSection(index)}
        />
      ))}
    </div>
  );
}

export default Dots;
