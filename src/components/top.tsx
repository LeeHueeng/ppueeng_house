import React from "react";
import Image from "next/image";
import styles from "../app/page.module.css";

export default function top() {
  return (
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
  );
}
