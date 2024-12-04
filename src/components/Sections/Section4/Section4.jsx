import React, { useState } from "react";
import styles from "./Section4.module.css";

const Section4 = React.forwardRef((props, ref) => {
  const [isIslandExpanded, setIslandExpanded] = useState(false);

  const toggleIsland = (expanded) => {
    setIslandExpanded(expanded);
  };

  return (
    <div ref={ref} className={styles.section}>
      {/* <h1>IPhone section</h1> */}
      <div className={styles.phoneContainer}>
        <div
          className={`${styles.dynamicIsland} ${
            isIslandExpanded ? styles.expanded : ""
          }`}
          onMouseEnter={() => toggleIsland(true)}
          onMouseLeave={() => toggleIsland(false)}
        >
          {isIslandExpanded && (
            <>
              <div className={styles.widget}>
                <p>Kyiv</p>
                <p>25°</p>
                <p>Sunny</p>
              </div>
              <div className={styles.widget}>
                <p>Maydan Nezalezhnosti</p>
                <div className={styles.sunIcon}></div>
              </div>
            </>
          )}
        </div>

        <div className={styles.iconsGrid}>
          {[...Array(6)].map((_, i) => (
            <div key={i} className={styles.icon}></div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Section4;
