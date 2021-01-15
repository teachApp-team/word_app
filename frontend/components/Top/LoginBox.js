import React, { useEffect, useState } from 'react';
import {FormControl,IconButton, InputAdornment,Input,InputLabel, Button, Box, TextField, Grid, Container, createMuiTheme, responsiveFontSizes, ThemeProvider, Typography, makeStyles} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import clsx from 'clsx';
import { motion } from "framer-motion";
import Link from 'next/link'

const container = {
  hidden: {y: 70, opacity: 0.1},
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function LoginBox() {
  
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const useStyles = makeStyles({
    loginWrapper: {
      width: "100%",
      textAlign: "center",
    },
    container: {
      textAlign: "center",
      padding: "20px",
      position: "relative",
      margin:"auto",
      width: "300px",
      height: "350px",
      backgroundColor: "white",
      borderRadius: "50px",
      zIndex: 2,
    },
    item: {
      marginTop: "20px",
    }
  });

  const doLogin = () => {
    console.log('ログインボタンが押されました。')
    const email = document.getElementById('student-login-email').value
    const password = document.getElementById('student-login-password').value
    console.log(email, password)
    // const action = loginAction(23)
    // dispatch(action)
  }  

  const classes = useStyles();

  return (
    <motion.div
      className={classes.container}
      variants={container}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
    >
      <motion.div variants={item}>
        <Typography variant="h5">Login</Typography>
      </motion.div>
      <motion.div className={classes.item} variants={item}>
        <Grid container spacing={1} justify="center" alignItems="flex-end">
          <Grid item>
            <AccountCircle style={{ color: "blue" }} />
          </Grid>
          <Grid item>
            <TextField 
              className={classes.userTextField}
              id="student-login-email" 
              color="primary" 
              label="Mail Adress" />
          </Grid>
        </Grid>
      </motion.div>
      <motion.div className={classes.item} variants={item}>
        <Grid container spacing={1} justify="center" alignItems="flex-end">
          <Grid item>
            <LockIcon style={{ color: "blue" }} />
          </Grid>
          <Grid item >
            <FormControl className={clsx(classes.margin, classes.textField)}>
              <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
              <Input
                id="student-login-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
              />
              </FormControl>
          </Grid>
        </Grid>
      </motion.div>
      <motion.div  variants={item}>
        <Box my={4}>
          <Button variant="contained" color="primary" onClick={doLogin}>
            OK
          </Button>
        </Box>
      </motion.div>
      <motion.div  variants={item}>
        <Box my={4}>
          <Link href="../auth/sign_up" mx={2}>
            Click here to Sign UP
          </Link>
        </Box>
      </motion.div>
    </motion.div>


  );
}

