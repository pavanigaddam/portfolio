import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Pavani</h1>
        <p className={styles.description}>
        I’m a passionate developer with experience in machine learning and full stack development. 
        I enjoy solving real world problems through code, constantly learning, and building impactful 
        solutions with modern technologies.
        </p>
        <a href="mailto:pavanigad369@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
