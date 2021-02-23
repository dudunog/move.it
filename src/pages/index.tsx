import { useState } from 'react';

import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';

import { makeStyles  } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    
    setOpen(false);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <ExperienceBar />

      <br /> <br />
      <div className={classes.root}>

      <Snackbar 
        open={open} 
        autoHideDuration={6000} 
        onClose={handleClose}
      >
        <Alert onClose={handleClose} variant="filled" severity="warning" >
            Este site ainda está sendo desenvolvido!
        </Alert>
      </Snackbar>    

      </div>
      <br />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
