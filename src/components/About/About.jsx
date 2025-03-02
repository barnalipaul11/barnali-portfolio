import React from "react";

import styles from "./About.module.css";

import aboutImage from "../../assets/about/aboutImage.png";
import cursorIcon from "../../assets/about/cursorIcon.png";
import serverIcon from "../../assets/about/serverIcon.png";


export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={aboutImage}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Web Developer</h3>
              <p>
              I build responsive and user-friendly websites using HTML, CSS, JavaScript, React, and MySQL, ensuring seamless performance and great UI/UX.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>AI/ML Enthusiast</h3>
              <p>
              I work with Machine Learning, Deep Learning, CNN, and NLP to develop AI-driven solutions for automation and data analysis.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Creative Designer</h3>
              <p>
              Skilled in Photoshop, Adobe Illustrator, and video editing, I create engaging visuals to enhance projects and presentations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};