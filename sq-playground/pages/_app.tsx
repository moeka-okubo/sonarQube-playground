import "@/styles/globals.css";
import type { AppProps } from "next/app";
import styles from "../styles/app.module.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header className={styles.header}>
        <input type="text" className={styles.form} placeholder="申込番号" />
      </header>
      <Component {...pageProps} />
    </>
  );
}
