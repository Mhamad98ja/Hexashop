
import Link from "next/link"
import styles from './navbar.module.css'
import { links } from "./data"
import Button from "../Button/button"
import { Montserrat } from "next/font/google";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const LogoFont = Montserrat({ 
  subsets: ["latin"],
  weight:['400']
});

function Navbar() {
  return (
  <div className={`${styles.container} ${LogoFont.className}`}>
    <Link href="/"  className={styles.logo}>HexaShop</Link>
    <div className={styles.links} >
      <DarkModeToggle />
    {links.map(link => 
    <Link key={link.id} href={link.url}  className={styles.link}>{link.title}</Link>)}
    <Button />
    </div>
  </div>
  )
}

export default Navbar
