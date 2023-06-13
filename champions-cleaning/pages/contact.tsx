import styles from "../styles/Contact.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <section className={styles.ContactPageContainer}>
      <Navbar />
      <Footer />
    </section>
  );
}
