import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();

  return (
    <div>
      <Link href="/">
        <p
          className={[
            styles.link,
            router.pathname === "/" ? styles.active : "",
          ].join(" ")}
        >
          Home
        </p>
      </Link>
      <Link href="/about">
        <p
          className={[
            styles.link,
            router.pathname === "/about" ? styles.active : "",
          ].join(" ")}
        >
          About
        </p>
      </Link>
    </div>
  );
}
