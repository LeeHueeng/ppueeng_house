"use client";
import Image from "next/image";
import React from "react";
import styles from "../page.module.css";
import { useState } from "react";
import Top from "@/components/top";
import Bottom from "@/components/bottom";
/*@__CLIENT__*/
export default function houswarming() {
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
      <div className={styles.centerflex}>
        <div className={styles.arrow} onClick={() => handleSwipe("left")}>
          &lt;
        </div>
        <div className={styles.centerimg}>
          <Image
            className={styles.logo}
            src={imagePaths[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            width={600}
            height={300}
            priority
          />
        </div>
        <div className={styles.arrow} onClick={() => handleSwipe("right")}>
          &gt;
        </div>
      </div>

      <Bottom />
    </main>
  );
}
