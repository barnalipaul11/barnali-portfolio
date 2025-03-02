import React from "react";

import styles from "./Hero.module.css";

import heroImage from "../../assets/hero/heroImage.png";
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Barnali</h1>
        <p className={styles.description}>
        I’m Barnali Paul, a 21-year-old Computer Science and Engineering student at the Institute of Engineering and Management, specializing in Artificial Intelligence and Machine Learning. I’m passionate about coding and actively participate in hackathons, research projects. I’ve worked on AI-driven projects like a medical chatbot and many more projects.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={heroImage}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};