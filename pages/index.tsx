import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>First Nextjs Home</div>
        <div>
          <Link href="/movie">영화 목록</Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
