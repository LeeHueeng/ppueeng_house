"use client";
import Image from "next/image";
import styles from "../page.module.css";
import { useState } from "react";

export default function Houserull() {
  const imagePaths = [
    "/house/sample_images_01.png",
    "/house/sample_images_02.png",
    "/house/sample_images_03.png",
    "/house/sample_images_04.png",
    "/house/sample_images_05.png",
    "/house/sample_images_06.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (direction: string) => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? imagePaths.length - 1 : prevIndex - 1
      );
    } else if (direction === "right") {
      setCurrentIndex((prevIndex) =>
        prevIndex === imagePaths.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

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
        <div className={styles.grid} onTouchStart={() => handleSwipe("left")}>
          {imagePaths.map((path, index) => (
            <div
              key={index}
              className={styles.giftcard}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`, // 슬라이드 효과
              }}
            >
              <Image
                className={styles.logo}
                src={path}
                alt={`이미지 ${index + 1}`}
                width={250}
                height={180}
                priority
              />
            </div>
          ))}
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
