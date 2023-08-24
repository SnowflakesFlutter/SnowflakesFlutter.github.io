import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imgSide}>
          <img
            src="https://stefantopalovicdev.vercel.app/static/media/about-img.62b47e7f183d4b4e9feb.webp"
            alt="Hero image of me"
          />
        </div>
        <div className={styles.textSide}>
          <h3>About me</h3>
          <h4>
            A dedicated Front-end Developer <br /> based in San antonio, Texas
            📍
          </h4>
          <p>
            As a Junior Front-End Developer, I possess an impressive of skills
            in HTML, CSS, SCSS,JavaScript, React,tailwind,JAVA,Sql, Springboot,
            and Git. I excel in designing and maintaining responsive websites
            that offer a smooth user experience. My expertise lies in crafting
            dynamic, engaging interfaces through writing clean and optimized
            code and utilizing cutting-edge development tools and techniques. I
            am also a team player who thrives in collaborating with
            cross-functional teams to produce outstanding applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
