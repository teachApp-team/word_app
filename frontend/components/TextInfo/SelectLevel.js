import React, { Component } from 'react';
import {Container,Grid,Typography, Button, CardContent, CardMedia, Card, CardActionArea,CardActions, Paper} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faMedal, faPencilAlt, faCommentDots, faUser} from "@fortawesome/free-solid-svg-icons";
import { makeStyles, withTheme } from '@material-ui/core/styles';
import EachLevelInfo from '../TextInfo/EachLevelInfo';
import { ProgressBar } from 'react-bootstrap';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}  style={{marginTop:"40px"}}>
      <AppBar position="static" color="default">
        <Tabs indicatorColor="primary" textColor="primary" value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs example" >
          <Tab label="000-100" {...a11yProps(0)} />
          <Tab label="100-200" {...a11yProps(1)} />
          <Tab label="200-300" {...a11yProps(2)} />
          <Tab label="300-400" {...a11yProps(3)} />
          <Tab label="400-500" {...a11yProps(4)} />
          <Tab label="500-600" {...a11yProps(5)} />
          <Tab label="600-700" {...a11yProps(6)} />
          <Tab label="700-800" {...a11yProps(7)} />
          <Tab label="800-900" {...a11yProps(8)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <EachLevelInfo level={"000-100"} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <EachLevelInfo level={"100-200"} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <EachLevelInfo level={"200-300"} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <EachLevelInfo level={"300-400"} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <EachLevelInfo level={"400-500"} />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <EachLevelInfo level={"500-600"} />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <EachLevelInfo level={"600-700"}/>
      </TabPanel>
      <TabPanel value={value} index={7}>
        <EachLevelInfo level={"700-800"} />
      </TabPanel>
      <TabPanel value={value} index={8}>
        <EachLevelInfo level={"800-900"} />
      </TabPanel>
    </div>
  );
}