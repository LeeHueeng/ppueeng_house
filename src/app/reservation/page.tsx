"use client";
import Top from "@/components/top";
import styles from "../page.module.css";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import Bottom from "@/components/bottom";
export default function Housewarming() {
  const imagePaths = [
    "/house/sample_images_01.png",
    "/house/sample_images_02.png",
    "/house/sample_images_03.png",
    "/house/sample_images_04.png",
    "/house/sample_images_05.png",
    "/house/sample_images_06.png",
  ];
  const [date, setDate] = useState(new Date());
  const koLocale: any = require("date-fns/locale/ko");

  const onChange = (newDate: any) => {
    setDate(newDate);
  };

  return (
    <main className={styles.main}>
      <Top />
      <div className={styles.calendarContainer}>
        <h2>예약일 설정</h2>
        <div className={styles.calendarWrapper}>
          <Calendar onChange={onChange} value={date} locale={koLocale} />
        </div>
      </div>
      <Bottom />
    </main>
  );
}
