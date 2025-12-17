import { useState } from "react";

export default function CBT() {
  const [time, setTime] = useState(60);
  const [done, setDone] = useState(false);

  if (done) return <h2>Exam Submitted</h2>;

  setTimeout(() => {
    if (time > 0) setTime(time - 1);
    else setDone(true);
  }, 1000);

  return (
    <div style={{ padding: 40 }}>
      <h1>CBT Exam</h1>
      <p>Time Left: {time}s</p>

      <p>1. What is HTML?</p>
      <input type="radio" /> Programming Language  
      <br />
      <input type="radio" /> Markup Language
    </div>
  );
}
