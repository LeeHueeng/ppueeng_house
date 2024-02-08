import React from "react";
import Image from "next/image";
import styles from "../app/page.module.css";

export default function bottom() {
  return (
    <div className={styles.grid}>
      <a href="/housewarming" className={styles.card}>
        <h2>
          랜선 집들이 <span>-&gt;</span>
        </h2>
        <p>ppueeng의 집에 오지 않고 온라인으로 한번 봐보세요!</p>
        <p>ppueeng의 집은 항상 열려있답니다!</p>
      </a>

      <a href="/reservation" className={styles.card}>
        <h2>
          예약하기 <span>-&gt;</span>
        </h2>
        <p>
          예약전 문의 주신 후 예약해주세요! 마음대로 예약 시 입장이 불가 할 수
          있습니다.
        </p>
      </a>

      <a href="/houserull" className={styles.card}>
        <h2>
          집들이 규칙 <span>-&gt;</span>
        </h2>
        <p>간단한 집들이의 규칙을 알려드립니다.</p>
      </a>
      <a href="/dontgift" className={styles.card} rel="noopener noreferrer">
        <h2>
          이건 사오지마세요 <span>-&gt;</span>
        </h2>
        <p>너무 비싸거나 이미 있는 상품들을 안내해 드립니다. </p>
      </a>
    </div>
  );
}
