import React from 'react';
import { Container, Box } from '@material-ui/core';
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import axios from 'axios';
import { useRouter } from 'next/router';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      width: '100%',
      textAlign: 'center',
    },
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const router = useRouter();     
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const doSignup = () => {
    console.log('sign up ボタンが押されました')
    const email = document.getElementById('student-signup-email').value
    const password = document.getElementById('student-signup-password').value
    axios.post('http://localhost:8000/auth', {
      email: email,
      password: password 
    }).then(response => {
      console.log(response)
      router.push({
        pathname:"/textSelection", 
      });
    }).catch(error => {
      handleClick()
      console.log(error)
    })
  }

  return (
    <Container disableGutters={true}>
      <Box textAlign="center" mt={2}>
        <h1 className={classes.root}>Sign Up</h1>
      </Box>
      <Box my={4} p={4} className={classes.root}>
        <form noValidate autoComplete="off">
          <Box my={1} >
            <TextField id="student-signup-email" label="メールアドレス" variant="outlined"/>
          </Box>
          <br />
          {/* <TextField id="outlined-basic" label="パスワード" variant="outlined" /> */}
          <Box my={1} >
            <TextField
              id="student-signup-password"
              label="パスワード"
              type="password"
              variant="outlined"
              autoComplete="current-password"
            />
          </Box>
          <br />
          <Box >
            <Button onClick={doSignup} mx={2} variant="contained" color="secondary">Sign UP</Button>
          </Box>
        </form>
      </Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          新規登録できませんでした。もう一度お試しください。
        </Alert>
      </Snackbar>
    </Container>
  );
}