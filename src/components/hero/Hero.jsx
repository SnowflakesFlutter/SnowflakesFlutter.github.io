import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../assets/hero/heroImage.png";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.heroMain}>
          <h1>Front-End React Developer</h1>
          <p>
            Hi, I'm Faye. A passionate Front-end React Developer based in San
            antonio, Texas. 📍
          </p>
          <span>
            <a
              aria-label="linkedin"
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/faye-lyu-79a822147/"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>

            <a
              aria-label="github"
              rel="noreferrer"
              target="_blank"
              href="https://github.com/SnowflakesFlutter"
            >
              <i class="fa-brands fa-github"></i>
            </a>
            <a
              href="mailto:myemail@email.com"
              className={styles.contactBtn}
            ></a>
          </span>
        </div>
        <div className={styles.heroImg}>
          <img src={heroImage} alt="Hero image of me" />
          {/* <img
            src="https://stefantopalovicdev.vercel.app/static/media/pfp_webp.f334283842f7b24cafd1.webp"
            alt="/"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
