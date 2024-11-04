import Image from "next/image";
import type { ReactNode } from "react";
import { Nav } from "./components/Nav";

import "./styles/globals.scss";
import styles from "./styles/layout.module.scss";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Dosis&family=Inconsolata:wght@300&family=Istok+Web:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Syne:wght@400..800&display=swap" rel="stylesheet" />
      </head>
      <body className={styles.body}>
        <section className={styles.container}>
          <Nav />
          <main className={styles.main}>{children}</main>
        </section>
      </body>
    </html>
  );
}
