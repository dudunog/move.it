import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { ThemeContext } from "../contexts/ThemeContext";

import styles from "../styles/Components/CompletedChallenges.module.css";

export function CompletedChallenges() {
  const { theme } = useContext(ThemeContext);

  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className={`${styles.CompletedChallengesContainer} ${styles[theme]}`}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}
