import Image from "next/image";
import styles from "../page.module.css";
import Top from "@/components/top";
import Bottom from "@/components/bottom";
export default function Houserull() {
  return (
    <main className={styles.main}>
      <Top />

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

      <Bottom />
    </main>
  );
}
