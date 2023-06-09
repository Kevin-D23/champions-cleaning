import styles from "../styles/Footer.module.css";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className={styles.FooterContainer}>
      <div className={styles.ContactContainer}>
        <h1>Our Contacts</h1>
        <a className={styles.CallButton} href="tel:5309667141">
          <Icon
            icon="tabler:phone-call"
            color="#ff9500"
            width="35"
            height="35"
          />
          <div>
            <h3>Call us now</h3>
            <h2>530-966-7141</h2>
          </div>
        </a>
        <a className={styles.BookBtn} href='/contact'>BOOK NOW</a>
      </div>
      <div className={styles.SocialsContainer}>
        <h1>Follow Us</h1>
        <div className={styles.Socials}>
          <a href="https://www.instagram.com/asparksjr/?hl=en" target="_blank">
            <Icon icon="mdi:instagram" color="#777777" height="24" width="24" />
          </a>
          <a
            href="https://www.facebook.com/championscarpet530/"
            target="_blank"
          >
            <Icon
              icon="ri:facebook-fill"
              color="#777777"
              height="24"
              width="24"
            />
          </a>
        </div>
      </div>
      <p>
        Copyright © 2022 Champions Cleaning Solutions - All Rights Reserved.
      </p>
    </footer>
  );
}
