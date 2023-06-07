import styles from '../styles/Gallery.module.css'
import Navbar from '../components/Navbar'

export default function Gallery() {
    return (
      <section className={styles.GalleryPageContainer}>
        <Navbar />
      </section>
    );
  }