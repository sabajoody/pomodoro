import { useState } from "react";
import "./App.css";
import { Button } from "antd";
import cat from "./assets/cat.json";
import Lottie from "lottie-react";

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-amber-100">
      <div className="p-5 felx justify-center bg-amber-300 rounded-2xl">
        <div className="flex-col text-center items-center justify-between m-auto w-fit">
          <p>pomodoro</p>
          <div className="m-10">25:00</div>
          <Lottie animationData={cat} loop={true} className="w-32 h-32" />
        </div>
        <div className="flex gap-3 mt-10">
          <Button variant="filled">start</Button>
          <Button color="danger" variant="filled">
            stop
          </Button>
          <Button color="pink" variant="filled">
            primary
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
