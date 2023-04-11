import React, { useContext } from "react";
import Image from "next/image";
import logo from "@/app/assets/logo.svg";
import styles from "./header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src={logo}
          alt="Rick and Morty World logo"
          width={10}
          height={10}
          className={styles.header__logo}
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
