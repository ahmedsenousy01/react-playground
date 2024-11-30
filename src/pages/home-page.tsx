import { useState } from "react";

import { Counter } from "../components/counter";

export default function HomePage() {
  const [bgColor, setBgColor] = useState(222);

  function generateBgColor() {
    return Math.floor(Math.random() * 1000);
  }

  return (
    <>
      <div
        style={{
          backgroundColor: `#${bgColor}`
        }}
        className="flex h-full items-center justify-center text-5xl"
      >
        <Counter />
        <button onClick={() => setBgColor(generateBgColor())}>change bg</button>
      </div>
    </>
  );
}
