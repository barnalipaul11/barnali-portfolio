import React from "react";

import styles from "./Education.module.css";

import edu from "../../data/edu.json";


export const Education = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <ul className={styles.edu}>
          {edu.map((eduItem, id) => {
            return (
              <li key={id} className={styles.eduItem}>
                <div className={styles.eduItemDetails}>
                  <h3>{`${eduItem.role}, ${eduItem.organisation}`}</h3>
                  <p>{`${eduItem.startDate} - ${eduItem.endDate}`}</p>
                  <ul>
                    {eduItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};