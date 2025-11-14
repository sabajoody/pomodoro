import { useRef, useState } from "react";
import { Button } from "antd";
import cat from "../assets/cat.json";
import Lottie from "lottie-react";

interface IPomodoroProps {
  isShowing: boolean;
}

export default function Pomodoro({ isShowing }: IPomodoroProps) {
  const [initialTime, setInitialTime] = useState(10); //25 minutes
  // const [timeLeft, setTimeLeft] = useState(null);
  const intervalRef = useRef<number | null>(null);

  function startTimer() {
    if (intervalRef.current !== null) return; // Timer is already running
    intervalRef.current = setInterval(() => {
      setInitialTime((prevTime) => {
        if (prevTime <= 0) return 0;
        return prevTime - 1;
      });
    }, 1000);
  }

  if (!isShowing) {
    return null;
  }

  return (
    <>
      <div className="flex-col text-center items-center justify-between m-auto w-fit">
        <p>pomodoro</p>
        <div className="m-10">
          <span>{String(Math.floor(initialTime / 60)).padStart(2, "0")}</span>
          <span>:</span>
          <span>{String(Math.floor(initialTime % 60)).padStart(2, "0")}</span>
        </div>
        <Lottie animationData={cat} loop={true} className="w-48 h-48" />
      </div>
      <div className="flex gap-3 mt-10">
        <Button variant="filled" onClick={startTimer}>
          start
        </Button>
        <Button color="danger" variant="filled">
          stop
        </Button>
        <Button color="pink" variant="filled">
          break
        </Button>
      </div>
    </>
  );
}
