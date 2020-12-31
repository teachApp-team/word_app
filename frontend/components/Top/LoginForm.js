import React from 'react';
import {FormControl,IconButton, InputAdornment,Input,InputLabel, Button, Box, TextField, Grid, Container, createMuiTheme, responsiveFontSizes, ThemeProvider, Typography, makeStyles} from '@material-ui/core';
// import style from '../static/Style';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx';

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

const useStyles = makeStyles({
  textField: {
    width: '22ch',
  },
  loginForm: {
    width: "300px",
    margin: "auto",
    padding: "10px",
    borderRadius: "20px",
    background: "#030014",
    boxShadow:  "13px 13px 46px #010009 -13px -13px 46px #05001f",
    opacity: "0.8",
  },
});

export default function LoginForm() {
  const classes = useStyles();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  return (
    <Box className={classes.loginForm}>
      <ThemeProvider theme={engtheme}>
        <Typography variant="h4">Login</Typography>
      </ThemeProvider>
      <Grid container spacing={1} justify="center" alignItems="flex-end">
        <Grid item>
          <AccountCircle style={{ color: "blue" }} />
        </Grid>
        <Grid item>
          <TextField className={classes.userTextField} id="input-with-icon-grid" color="primary" label="User Name" />
        </Grid>
      </Grid>
      <Grid container spacing={1} justify="center" alignItems="flex-end">
        <Grid item>
          <LockIcon style={{ color: "blue" }} />
        </Grid>
        <Grid item>
          <FormControl className={clsx(classes.margin, classes.textField)}>

            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            </FormControl>
        </Grid>
      </Grid>
      <div style={{margin: "10px"}}>
        <Button variant="contained">OK</Button>
      </div>
    </Box>
  )
}