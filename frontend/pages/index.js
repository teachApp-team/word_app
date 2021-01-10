import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import {Container, Box} from '@material-ui/core';
import Tab from '../components/Tab';
import Header from '../components/Layout/Header';
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { loginAction } from '../Store/Auth';
import { connect } from 'react-redux';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Index(props) {
  const [data, setData] = useState();
  const dispatch = useDispatch();

  const doLogin = () => {
    console.log('ログインボタンが押されました。')
    const email = document.getElementById('student-login-email').value
    const password = document.getElementById('student-login-password').value
    const action = loginAction({
      email: email,
      password: password,
    })
    dispatch(action)
  }

  return (
    <Container disableGutters={true}>
      <Header/>
      <Box my={4}>
        <h1>Welcome to Word App</h1>
        <Tab />
      </Box>
      <Box my={4} p={4}>
        <form noValidate autoComplete="off">
          <h2>Login</h2>
          <Box my={1} >
            <TextField id="student-login-email" label="メールアドレス" variant="outlined"/>
          </Box>
          <br />
          <Box my={1} >
            <TextField
              id="student-login-password"
              label="パスワード"
              type="password"
              variant="outlined"
              autoComplete="current-password"
            />
          </Box>
          <br />
          <Button variant="contained" color="primary" onClick={doLogin}>
            Login
          </Button>
          <Link href="/auth/sign_up" mx={2}>
            <Button mx={2} variant="contained" color="secondary">Click here to Sign UP</Button>
          </Link>
        </form>
      </Box>
      <Link href="/textSelection">
        <a>Go to textSelection page</a>
      </Link>
      <br></br>
      <Link href="/textInfo">
        <a>Go to textInfo page</a>
      </Link>
      <br></br>
      <Link href="/learningCondition">
        <a>Go to learningCondition page</a>
      </Link>
      <br></br>
      <Link href="/test">
        <a>Go to test page</a>
      </Link>
    </Container>
  );
}
Index = connect((state) => state)(Index);