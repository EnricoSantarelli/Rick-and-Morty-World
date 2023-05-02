import Image from "next/image";
import logo from "../../assets/logo_rick_and_morty_world.svg";
import linkedinIcon from "@/app/assets/logo_linkedin.svg";
import styles from "./header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src={logo}
          alt="Rick and Morty World Logo"
          width={100}
          height={30}
          className={styles.header__logo}
          priority
        />
        <Image
          src={logo}
          alt="Rick and Morty World Logo"
          width={10}
          height={10}
          className={styles.home__icon}
          priority
        />
        <Image
              src={linkedinIcon}
              alt="Linkedin logo"
              width={10}
              height={10}
              className={styles.home__icon}
              priority
            />
      </Link>
      <div className={styles.header__div}>
        <Link className={styles.header__link} href="/create_character">
          Create
        </Link>
        <Link className={styles.header__link} href="/characters">
          Characters
        </Link>
        <Link className={styles.header__link} href="/battle">
          Battle
        </Link>
      </div>
    </header>
  );
}
