import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import navList from "../atom/NavList";
import { FaExternalLinkAlt } from "react-icons/fa";

function Home() {
  return (
    <div className={styles.container}>
      {navList.map((slide) => {
        return (
          <h3 className={styles.title}>
            <Link to={`/page/${slide.path}/1`}>
              <FaExternalLinkAlt />
              <span> {slide.title} Movie</span>
            </Link>
          </h3>
        );
      })}
    </div>
  );
}

export default Home;
