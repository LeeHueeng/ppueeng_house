import Image from "next/image";
import styles from "../page.module.css";

export default function Houserull() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <p>예약 전 ppueeng 에게 문의하세요</p>
          <a href="https://open.kakao.com/o/sfbiE17f" target="_blank">
            <p className={`${styles.hover} ${styles.description}`}>
              <code className={styles.code}>카카오톡으로 문의하기</code>
            </p>
          </a>
        </div>
        <div>
          <a href="/">
            By
            <Image
              src="/logo.png"
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
        <div>
          <h1 style={{ margin: "10px" }}>ppueeng의 허락을 맡고 오세요</h1>
          <ol style={{ margin: "5px" }}>
            <li style={{ margin: "5px" }}>
              무턱대고 왔다가 그냥 돌아갈 수 있습니다.
            </li>
            <li style={{ margin: "5px" }}>ppueeng에게 연락을 먼저 주세요!</li>
            <li style={{ margin: "5px" }}>
              상호간의 예의를 지키며 연락을 주세요
            </li>
          </ol>
          <h1 style={{ margin: "10px" }}>예약한다고 다 받을수는 없어요.</h1>
          <ol>
            <li style={{ margin: "5px" }}>일정이 안될경우 취소될 수 있어요!</li>
            <li style={{ margin: "5px" }}>
              최대한 노력해 보겠지만 어려울 수 도 있어요
            </li>
          </ol>
          <h1 style={{ margin: "10px" }}>예약한다고 다 받을수는 없어요.</h1>
          <ol style={{ margin: "5px" }}>
            <li style={{ margin: "5px" }}>일정이 안될경우 취소될 수 있어요!</li>
            <li style={{ margin: "5px" }}>
              최대한 노력해 보겠지만 어려울 수 도 있어요
            </li>
          </ol>
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href="/housewarming"
          className={styles.card}
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
        >
          <h2>
            예약하기 <span>-&gt;</span>
          </h2>
          <p>
            예약전 문의 주신 후 예약해주세요! 마음대로 예약 시 입장이 불가 할 수
            있습니다.
          </p>
        </a>

        <a href="houserull" className={styles.card}>
          <h2>
            집들이 규칙 <span>-&gt;</span>
          </h2>
          <p>간단한 집들이의 규칙을 알려드립니다.</p>
        </a>

        <a href="dontgift" className={styles.card} rel="noopener noreferrer">
          <h2>
            이건 사오지마세요 <span>-&gt;</span>
          </h2>
          <p>너무 비싸거나 이미 있는 상품들을 안내해 드립니다. </p>
        </a>
      </div>
    </main>
  );
}
