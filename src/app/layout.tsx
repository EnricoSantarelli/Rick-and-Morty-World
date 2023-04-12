import { ReactNode } from "react";
import { CharacterProvider } from "@/context/character_provider";
import "normalize.css/normalize.css";
import Header from "./components/header";
import styles from "./styles/base.module.scss";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <div className={styles.page}>
          <Header />
          <CharacterProvider>{children}</CharacterProvider>
        </div>
      </body>
    </html>
  );
}
