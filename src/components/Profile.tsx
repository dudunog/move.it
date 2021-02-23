import styles from '../styles/Components/Profile.module.css';

export function Profile() {
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/dudunog.png" alt="Eduardo Nogueira"/>
      <div>
        <strong>Eduardo Nogueira</strong>
        <p>
          <img src="icons/Level.svg" alt="Level"/>
          Level 1
        </p>  
      </div>
    </div>
  );
}