import Logo from "./Logo";
import styles from "../styles/Navbar.module.css";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";

export default function Navbar() {
  const {
    asPath, // the value: "/question/how-do-you-get-the-current-url-in-nextjs/"
    pathname, // the value: "/question/[slug]"
  } = useRouter();

  console.log(pathname);
  return (
    <nav className={styles.NavbarContainer}>
      <Logo />
      <ul className={styles.NavbarButtons}>
        <li style={pathname === "/" ? { color: "var(--accent-200)" } : {}}>
          <a href="/">Home</a>
        </li>
        <li
          style={pathname === "/services" ? { color: "var(--accent-200)" } : {}}
        >
          <a href="/services">Services</a>
        </li>
        <li
          style={pathname === "/contact" ? { color: "var(--accent-200)" } : {}}
        >
          <a href="/contact">Contact</a>
        </li>
        <li
          style={pathname === "/gallery" ? { color: "var(--accent-200)" } : {}}
        >
          <a href="/gallery">Gallery</a>
        </li>
        <li className={styles.CallButton}>
          <a href="tel:5309667141"> 
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
        </li>
      </ul>
    </nav>
  );
}
