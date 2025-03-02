import React from "react";

import styles from "./Contact.module.css";
import emailIcon from "../../assets/contact/emailIcon.png";
import githubIcon from "../../assets/contact/githubIcon.png";
import linkedinIcon from "../../assets/contact/linkedinIcon.png";
import leetcodeIcon from "../../assets/contact/leetcodeIcon.png";
export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="barnalipaul890@email.com">barnalipaul890@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedinIcon}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/barnalipaul890/">linkedin.com/barnalipaul890</a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="Github icon" />
          <a href="https://github.com/barnalipaul11">github.com/barnali11</a>
        </li>
        <li className={styles.link  }>
          <img src={ leetcodeIcon} alt="Github icon" className={styles.pic} />
          <a href="https://leetcode.com/u/barnali11/">leetcode.com/barnali11</a>
        </li>
      </ul>
    </footer>
  );
};