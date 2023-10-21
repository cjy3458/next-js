import { AppProps } from "next/app";
import Layout from "@/components/Layout";
import "../styles/global.css";
//app.tsx에서만 module이 아닌 css 파일 import 가능

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
