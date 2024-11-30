import { useEffect, useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    console.log("re-render");
  }, [counter, counter2]); // dependency array

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <span>{counter}</span>
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCounter2(counter2 - 1)}>-</button>
        <span>{counter2}</span>
        <button onClick={() => setCounter2(counter2 + 1)}>+</button>
      </div>
    </div>
  );
}
