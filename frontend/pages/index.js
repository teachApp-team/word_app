import React, { useRef,useEffect,useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {Container, Box} from '@material-ui/core';
import Tab from '../components/Tab';
import Header from '../components/Layout/Header';
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { loginAction } from '../Store/Auth';
import { connect } from 'react-redux';
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
  const el = useRef(null);
  const ref = useRef();
  useEffect(() => {
    console.log(el.current);
    console.log(ref.current);

    gsap.fromTo(
      el.current,
      {
        autoAlpha: 0
      },
      {
        duration: 1,
        autoAlpha: 1,
        ease: "none",
        scrollTrigger: {
          id: `section-1`,
          trigger: el.current,
          start: "top 50%",
          toggleActions: "play none none reverse",
          markers: true
        }
      }
    );

  });

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

  const d = useSelector(state => state.questioncount)
  const t = useSelector(state => state.text)
  const s = useSelector(state => state.student_id)
  console.log(d)
  console.log(t)
  console.log(s)

  return (
    <Container disableGutters={true}>
      <Header/>
      <Box my={4}>
        <h1>Welcome to Word App</h1>
        <Tab />
      </Box>
      <Box my={4}>
        <h1>props.student_id</h1>
        <h1>{d}</h1>
        <h1>{s}</h1>
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
      <div ref={ref}>
        <div>
          <h1>Hey I'm on the screen</h1>
        </div>
      </div>
      <div ref={el}>
        <div>
          こんにちは<br></br>こんにちは<br></br>こんにちは<br></br>こんにちは
          こんにちは<br></br>こんにちは<br></br>こんにちは<br></br>こんにちは
        </div>
        <div>
          こんにちは<br></br>こんにちは<br></br>こんにちは<br></br>こんにちは
          こんにちは<br></br>こんにちは<br></br>こんにちは<br></br>こんにちは
        </div>
        <div>
          こんにちは<br></br>こんにちは<br></br>こんにちは<br></br>こんにちは
          こんにちは<br></br>こんにちは<br></br>こんにちは<br></br>こんにちは
        </div>
      </div>
    </Container>
  );
}
Index = connect((state) => state)(Index);