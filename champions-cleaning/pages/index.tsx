import styles from "../styles/Home.module.css";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  const [popup, setPopup] = useState(true);
  return (
    <section className={styles.HomePageContainer}>
      {popup && (
        <div className={styles.Popup}>
          <h1 className={styles.PopupText}>
            FREE ESTIMATES TODAY -&nbsp;<span>Call us now!</span>
          </h1>
          <div
            className={styles.PopupXContainer}
            onClick={() => setPopup(false)}
          >
            <div className={styles.PopupX}></div>
          </div>
        </div>
      )}
        <Navbar />
    </section>
  );
}
