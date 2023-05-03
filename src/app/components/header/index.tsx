"use client";
import Image from "next/image";
import logo from "../../assets/logo_rick_and_morty_world_alt.svg";
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
      </Link>
      <div className={styles.header__div}>
        <Link className={styles.header__link} href="/create">
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
