import { useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(3489);
  const [paused, setPaused] = useState(false);

  const getMinutes = () => {
    const minutes = Math.floor(time / 60);
    if (minutes < 10) {
      return `0${minutes}`;
    } else {
      return minutes;
    }
  };

  const getSeconds = () => {
    const seconds = time % 60;
    if (seconds < 10) {
      return `0${seconds}`;
    } else {
      return seconds;
    }
  };

  const getHours = () => {
    const hours = Math.floor(time / 3600);
    return hours;
  };

  return (
    <main>
      <h1>PHFS Pomodoro</h1>
      <p>
        {getHours()}:{getMinutes()}:{getSeconds()}
      </p>
      <div>
        <button>+5</button>
        <button>+10</button>
        <button>+30</button>
        <button>Reset</button>
      </div>
    </main>
  );
}

export default App;
