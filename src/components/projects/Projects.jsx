import React from "react";
import styles from "./Projects.module.css";
import Car from "../../assets/projects/car-rental-full.c58b37da333d73238fdd.webp";
import Coin from "../../assets/projects/coindom-full.c5fef9ca2f47e52897f8.png";

const Projects = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <p>portfolio</p>
        <h3>Each project is a unique piece of development 🧩</h3>
        <div className={styles.projects}>
          <div className={styles.projectItems}>
            <div className={styles.itemsImg}>
              <a
                target="_blank"
                href="https://car-rental-ten.vercel.app/"
                rel="noreferrer"
                aria-label="Car Rental Website"
              >
                <img
                  className={styles.projectImage}
                  src={Car}
                  alt="Car Rental Website"
                  // style={{
                  //   transform: "translateY(0%)",
                  //   transition: "transform 10s ease-in-out 0s",
                  // }}
                />
              </a>
            </div>
            <div className={styles.itemsText}>
              <h3>Car Rental 🚗</h3>
              <p>
                A car rental website is an online platform that allows users to
                rent cars for personal or business use. The website provides an
                interface for searching, comparing, and reserving cars.
              </p>
              <div className={styles.stack}>
                {/* {" "}
                <p>React</p>
                <p>SCSS</p> */}
                <span>React</span>
                <span>Css</span>
                <s></s>
              </div>
              <div className={styles.links}>
                {" "}
                <a
                  target="_blank"
                  href="https://github.com/stefvndev/car-rental"
                  rel="noreferrer"
                >
                  Code <i className="fa-brands fa-github"></i>{" "}
                </a>
                <a
                  target="_blank"
                  href="https://car-rental-ten.vercel.app/"
                  rel="noreferrer"
                >
                  Live Demo
                  <i className="fa-solid fa-arrow-up-right-from-square link-icon"></i>{" "}
                </a>
              </div>
            </div>
          </div>

          <div className={styles.projectItems}>
            <div className={styles.itemsImg}>
              <a
                target="_blank"
                href="https://car-rental-ten.vercel.app/"
                rel="noreferrer"
                aria-label="Car Rental Website"
              >
                <img
                  className={styles.projectImage}
                  src={Coin}
                  alt="Car Rental Website"
                  style={{
                    transform: "translateY(0%)",
                    transition: "transform 10s ease-in-out 0s",
                  }}
                />
              </a>
            </div>
            <div className={styles.itemsText}>
              <h3>coindom 🪙</h3>
              <p>
                Coindom is a crypto app that allows users to search for
                information about various cryptocurrencies in real-time.
              </p>
              <div className={styles.stack}>
                {/* {" "}
                <p>React</p>
                <p>SCSS</p> */}
                <span>React</span>
                <span>Css</span>
                <s></s>
              </div>
              <div className={styles.links}>
                {" "}
                <a
                  target="_blank"
                  href="https://github.com/stefvndev/car-rental"
                  rel="noreferrer"
                >
                  Code <i className="fa-brands fa-github"></i>{" "}
                </a>
                <a
                  target="_blank"
                  href="https://car-rental-ten.vercel.app/"
                  rel="noreferrer"
                >
                  Live Demo
                  <i className="fa-solid fa-arrow-up-right-from-square link-icon"></i>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
