import Image from "next/image";
import Hero from "/public/hero.svg"
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.title}>Your Best Online Shop destination</h1>
        <p className={styles.description}>Discover a world of endless shopping possibilities at our online</p>
        <button className={styles.button}>Shop Now</button>
      </div>
      <div className={styles.col}>
        <Image
        src={Hero}
        alt=""
        className={styles.img}
        />
      </div>
    </div>
  );
}
