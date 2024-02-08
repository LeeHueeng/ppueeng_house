import Image from "next/image";
import styles from "./page.module.css";
import Top from "../components/top";
import Bottom from "@/components/bottom";

export default function Home() {
  return (
    <main className={styles.main}>
      <Top />
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/ppueeng.png"
          alt="Next.js Logo"
          width={200}
          height={300}
          priority
        />
      </div>
      <Bottom />
    </main>
  );
}
