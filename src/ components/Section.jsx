import styles from "./Section.module.css";

function Section({ index, color, text, sectionsRef }) {
  return (
    <div
      ref={(el) => (sectionsRef.current[index] = el)}
      className={styles.section}
      style={{ backgroundColor: color }}
      id={index}
    >
      <h1>{text}</h1>
    </div>
  );
}

export default Section;
