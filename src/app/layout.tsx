import { ReactNode } from "react";
import { CharacterProvider } from "@/context/character_provider";
import "@/app/styles/base.scss";
import "normalize.css/normalize.css";
import Header from "./components/header/header";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        <CharacterProvider>{children}</CharacterProvider>
      </body>
    </html>
  );
}
