import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    // console.log(count);
    setCount(count + 1);
    // console.log(count);
  }
  console.log(count);

  return <button onClick={handleClick}>You pressed me {count} times</button>;
}
