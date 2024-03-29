import { useRouter } from "next/router";
import { ReactNode } from "react";

import Switch from "react-switch";
import styles from "../styles/Components/Navbar.module.css";

interface NavbarProps {
  children: ReactNode;
  currentTheme: string;
  toggleTheme: () => void;
}

export default function Navbar({
  children,
  currentTheme,
  toggleTheme,
}: NavbarProps) {
  const router = useRouter();

  return (
    <>
      <div className={`${styles.containerNavbar} ${styles[currentTheme]}`}>
        <a href="/">
          <img src="logo.svg" alt="Move.it" />
        </a>
        <nav className={styles.navbar}>
          <div
            className={`${styles.home} ${
              router.pathname === "/" && `${styles.selected}`
            }`}
          >
            {router.pathname === "/" && <div></div>}
            <a href="/">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <path
                    d="M4 12.0001L16 2.66675L28 12.0001V26.6668C28 27.374 27.719 28.0523 27.219 28.5524C26.7189 29.0525 26.0406 29.3334 25.3333 29.3334H6.66667C5.95942 29.3334 5.28115 29.0525 4.78105 28.5524C4.28095 28.0523 4 27.374 4 26.6668V12.0001Z"
                    stroke="#666666"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 29.3333V16H20V29.3333"
                    stroke="#666666"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </a>
          </div>
          <div className={styles.award}>
            {router.pathname === "/award" && <div></div>}
            <a href="">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <path
                    d="M16.0001 20C21.1547 20 25.3334 15.8214 25.3334 10.6667C25.3334 5.51205 21.1547 1.33337 16.0001 1.33337C10.8454 1.33337 6.66675 5.51205 6.66675 10.6667C6.66675 15.8214 10.8454 20 16.0001 20Z"
                    stroke="#666666"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.9466 18.52L9.33325 30.6667L15.9999 26.6667L22.6666 30.6667L21.0533 18.5067"
                    stroke="#666666"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </a>
          </div>
        </nav>
        <Switch
          onChange={toggleTheme}
          checked={currentTheme == "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
          handleDiameter={20}
          onColor="#5965e0"
        />
      </div>
      {children}
    </>
  );
}
