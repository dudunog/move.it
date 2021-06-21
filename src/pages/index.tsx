import { useContext, useState } from "react";

import Head from "next/head";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";

import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";

import NoSSR from "../components/NoSSR";

import { ThemeProvider } from "../contexts/ThemeContext";
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";

import Switch from "react-switch";
import usePersistedState from "../utils/usePersistedState";

import styles from "../styles/pages/Home.module.css";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

// const DynamicProfile = dynamic(() => import("../components/Profile"), {
//   ssr: false,
// });

export default function Home(props: HomeProps) {
  const [currentTheme, setCurrentTheme] = usePersistedState("theme", "ligth");

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "ligth" ? "dark" : "ligth");
  };

  return (
    <NoSSR>
      <ThemeProvider theme={currentTheme}>
        <ChallengesProvider
          level={props.level}
          currentExperience={props.currentExperience}
          challengesCompleted={props.challengesCompleted}
        >
          <div className={`${styles.main} ${styles[currentTheme]}`}>
            <div className={styles.container}>
              <Head>
                <title>Início | move.it</title>
              </Head>
              <ExperienceBar />
              <br /> <br />
              <CountdownProvider>
                <section>
                  <div>
                    <br /> <br />
                    <Profile />
                    <Switch
                      onChange={toggleTheme}
                      checked={currentTheme == "dark"}
                      checkedIcon={false}
                      uncheckedIcon={false}
                      height={10}
                      width={40}
                      handleDiameter={20}
                      onColor="#D63AF9"
                    />
                    <CompletedChallenges />
                    <Countdown />
                  </div>
                  <div>
                    <br /> <br />
                    <ChallengeBox />
                  </div>
                </section>
              </CountdownProvider>
            </div>
          </div>
        </ChallengesProvider>
      </ThemeProvider>
    </NoSSR>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
