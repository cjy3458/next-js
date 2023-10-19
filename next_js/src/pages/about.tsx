//파일 이름이 about이기 때문에 /about으로 이동하면 컴포넌트 렌더링
// === 파일 이름이 url로 지정된다.

import Seo from "@/components/Seo";
import Head from "next/head";

export default function about() {
  return (
    <>
      <Seo title="About" />
      <div>Among Us</div>
    </>
  );
}
