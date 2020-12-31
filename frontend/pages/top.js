import React from 'react';
import {FormControl,IconButton, InputAdornment,Input,InputLabel, Button, Box, TextField, Grid, Container, createMuiTheme, responsiveFontSizes, ThemeProvider, Typography, makeStyles} from '@material-ui/core';
import style from '../static/Style';

import LoginForm from '../components/Top/LoginForm'
import HeaderMenu from '../components/Top/HeaderMenu'

let engtheme = createMuiTheme({
  typography: {
    fontFamily: [
      'Georgia',
      'arial narrow',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"'
    ].join(','),
  },
});
engtheme = responsiveFontSizes(engtheme);

let jptheme = createMuiTheme({
  typography: {
    fontFamily: [
      'HiraKakuProN-W6',
      'MS PGothic',
      'BlinkMacSystemFont',
      '"Segoe UI"'
    ].join(','),
  },
});
jptheme = responsiveFontSizes(jptheme);

const useStyles = makeStyles({
  root: {
    '& .MuiInput-input': {
      color: 'white',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: 'white',
    },
    '& label': {
      color: 'white',
    },
    '& .MuiInput-underline:before:hover': {
      borderBottomColor: 'white',
    },
  },
  imgContainerTitle: {
    color:  'white',
    textAlign: 'center',
    padding: '10px'
  },
  userTextField: {
    color: 'white',
  }
});

export default function Index() {
  const classes = useStyles();

  return (
    <body style={{backgroundColor: "black"}}>
    <Container disableGutters={true}>
      {style}
      <body style={{backgroundColor: "black"}}>
        <div className={"imgContainer"}>
          <HeaderMenu/>

          <ThemeProvider theme={engtheme}>
            <div className={classes.imgContainerTitle}>
              <Typography variant="h3">
                Word App
              </Typography>
            </div>
          </ThemeProvider>
          <div className="borderFrame">
            <ThemeProvider theme={jptheme}>
              <Container maxWidth='md' className={"topJpMessageContainer"}>
                <Typography variant="h4">共通テストまであと</Typography>
                <Typography variant="h4">365日</Typography>
              </Container>
            </ThemeProvider>

            <form className={classes.root} noValidate autoComplete="off">
              <Box className={"loginWrapper"} component="div" m={2}>
                <LoginForm/>
              </Box>
            </form>
            
            <ThemeProvider theme={engtheme}>
              <Container maxWidth='md' className={"topEngMessageContainer"}>
                <Typography variant="h6">
                  "Energy and persistance conquer all things"
                </Typography>
                <Typography variant="h6">
                  by Benjamin Flanklin
                </Typography>
              </Container>
            </ThemeProvider>
          </div>
        </div>
      </body>
    </Container>
    </body>
  );
}