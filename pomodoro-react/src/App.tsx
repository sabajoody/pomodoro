import { useState } from "react";
import "./App.css";
import Pomodoro from "./components/Pomodoro.tsx";
import { StartPage } from "./components/StartPage.tsx";

export default function App() {
  const [showPmodoro, setShowPomodoro] = useState(false);
  return (
    <div className="flex items-center justify-center h-screen bg-amber-100">
      <div className="p-5 felx justify-center bg-amber-300 rounded-2xl w-96 h-96">
        {showPmodoro ? (
          <Pomodoro isShowing={showPmodoro} />
        ) : (
          <StartPage setShowPomodoro={setShowPomodoro} />
        )}
      </div>
    </div>
  );
}
