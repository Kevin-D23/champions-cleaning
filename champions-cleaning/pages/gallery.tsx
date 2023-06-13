import styles from "../styles/Gallery.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Gallery() {
  return (
    <section className={styles.GalleryPageContainer}>
      <Navbar />
      <Footer />
    </section>
  );
}
