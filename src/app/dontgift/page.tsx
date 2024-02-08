"use client";
import Image from "next/image";
import styles from "../page.module.css";
import { useState } from "react";
import Top from "@/components/top";
import Bottom from "@/components/bottom";

export default function Dontgift() {
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
      <Top />
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
      <Bottom />r
    </main>
  );
}
