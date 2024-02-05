import Image from "next/image";
import styles from "../page.module.css";
export default function houswarming() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <p>예약 전 ppueeng 에게 문의하세요</p>
          <a href="https://open.kakao.com/o/sfbiE17f">
            <p className={`${styles.hover} ${styles.description}`}>
              <code className={styles.code}>카카오톡으로 문의하기</code>
            </p>
          </a>
        </div>
        <div>
          <a href="/hosewarming" target="_blank" rel="noopener noreferrer">
            By
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

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

      <div className={styles.grid}>
        <a
          href="/housewarming"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            랜선 집들이 <span>-&gt;</span>
          </h2>
          <p>ppueeng의 집에 오지 않고 온라인으로 한번 봐보세요!</p>
          <p>ppueeng의 집은 항상 열려있답니다!</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            예약하기 <span>-&gt;</span>
          </h2>
          <p>
            예약전 문의 주신 후 예약해주세요! 마음대로 예약 시 입장이 불가 할 수
            있습니다.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            집들이 규칙 <span>-&gt;</span>
          </h2>
          <p>간단한 집들이의 규칙을 알려드립니다.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            이건 사오지마세요 <span>-&gt;</span>
          </h2>
          <p>너무 비싸거나 이미 있는 상품들을 안내해 드립니다. </p>
        </a>
      </div>
    </main>
  );
}
