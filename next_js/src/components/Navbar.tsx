import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();

  return (
    // css 모듈 패턴이기 때문에 styles.nav 형식으로 사용!
    <nav>
      <Link href="/">
        <p className={router.pathname === "/" ? styles.active : ""}>Home</p>
      </Link>
      <Link href="/about">
        <p className={router.pathname === "/about" ? styles.active : ""}>
          About
        </p>
      </Link>
    </nav>
  );
}
