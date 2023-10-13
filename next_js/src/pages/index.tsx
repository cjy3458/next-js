//index 내에 코드는 항상 "/" 에서 렌더링
// index는 default로 "/"로 지정됨

import NavBar from "@/components/Navbar";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>민병록 {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Plus</button>
      <NavBar></NavBar>
    </div>
  );
}
