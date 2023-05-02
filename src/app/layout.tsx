import { ReactNode } from "react";
import logo from "../app/assets/logo_rick_and_morty_world.svg";
import Image from "next/image";
import { CharacterProvider } from "@/contexts/character_provider";
import "normalize.css/normalize.css";
import Header from "./components/header";
import styles from "./styles/base.module.scss";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <div className={styles.page}>
          <Header />
          <Image
            src={logo}
            alt="Rick and Morty World Logo"
            width={10}
            height={10}
            className={styles.home__logo}
            priority
          />
          <CharacterProvider>{children}</CharacterProvider>
        </div>
      </body>
    </html>
  );
}
