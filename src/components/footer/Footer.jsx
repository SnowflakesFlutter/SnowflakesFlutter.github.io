import React from "react";
import styles from "./Footer.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // 直接从 "@fortawesome/react-fontawesome" 中导入组件
// import { faLinkedin, faGithub } from "@fortawesome/fontawesome-free-brands"; // 注意导入的路径

const Footer = () => {
  return (
    <footer>
      <div class={styles.container}>
        <div class={styles.Content}>
          <h3>© 2023. All rights reserved.</h3>
          <div class={styles.socialLinks}>
            <a
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/faye-lyu-79a822147/"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/SnowflakesFlutter"
            >
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
