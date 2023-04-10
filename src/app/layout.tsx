import { CharacterProvider } from "@/context/character_provider";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <CharacterProvider>{children}</CharacterProvider>
      </body>
    </html>
  );
}
