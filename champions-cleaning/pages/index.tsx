import styles from "../styles/Home.module.css";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeImage from "../images/HomeImage.png";
import Image from "next/image";
import { useRef } from "react";
import emailjs from "emailjs-com";

export default function Home() {
  const [popup, setPopup] = useState(true);
  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gsg8osf",
        "template_v6dj69t",
        e.target,
        "r8xP1LzbLHEFUN7x4"
      )
      .then(
        (result: any) => {
          console.log(result.text);
        },
        (error: any) => {
          console.log(error.text);
        }
      );
  };
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
      <Image src={HomeImage} alt="" />
      <svg
        className={styles.Back}
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="568"
        viewBox="0 0 1920 568"
        fill="none"
      >
        <path
          d="M0 0.5C465 509.5 1004.5 615 1920 152V568H0V0.5Z"
          fill="#FF9500"
        />
        <path
          d="M0 0.5C465 509.5 1004.5 615 1920 152V568H0V0.5Z"
          fill="#FF9500"
        />
        <path
          d="M0 0.5C465 509.5 1004.5 615 1920 152V568H0V0.5Z"
          fill="#FF9500"
        />
      </svg>
      <svg
        className={styles.Front}
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="568"
        viewBox="0 0 1920 568"
        fill="none"
      >
        <path
          d="M0 0.5C465 509.5 1004.5 615 1920 152V568H0V0.5Z"
          fill="#F8F9FA"
        />
        <path
          d="M0 0.5C465 509.5 1004.5 615 1920 152V568H0V0.5Z"
          fill="#F8F9FA"
        />
        <path
          d="M0 0.5C465 509.5 1004.5 615 1920 152V568H0V0.5Z"
          fill="#F8F9FA"
        />
      </svg>
      <div className={styles.CallForm}>
        <h1>Request a callback</h1>
        <h2>Enter your details in the form and we will call you back.</h2>
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            required={true}
            placeholder="Your Name"
          ></input>
          <input
            type="tel"
            name="phone"
            required={true}
            placeholder="Your Phone Number"
          ></input>
          <select>
            <option value="" disabled selected>
              Select Service
            </option>
            <option value="carpet">Carpet Cleaning</option>
            <option value="tile">Tile/Grout Cleaning</option>
            <option value="window">Window Cleaning</option>
            <option value="solar">Solar Panel Cleaning</option>
            <option value="upholstery">Upholstery Cleaning</option>
            <option value="other">Other</option>
          </select>
          <input
            type="submit"
            value={"CALL ME BACK"}
            className={styles.Submit}
          />
        </form>
      </div>
      <Footer />
    </section>
  );
}
