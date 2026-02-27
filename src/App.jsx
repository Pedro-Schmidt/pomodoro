import { useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [paused, setPaused] = useState(false);

  const getMinutes = () => {
    const minutes = Math.floor(time / 60);
    return minutes;
  };

  const getSeconds = () => {
    const seconds = time % 60;
    return seconds;
  };

  const getHours = () => {
    const hours = Math.floor(time / 3600);
    return hours;
  };

  return (
    <main>
      <h1>PHFS Pomodoro</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input type="number" name="" id="" />
      </form>
    </main>
  );
}

export default App;
