import React from 'react';
import {Container,Grid,Typography, Button, CardContent, CardMedia, Card, CardActionArea,CardActions, Paper} from '@material-ui/core';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import EachLevelInfo from '../TextInfo/EachLevelInfo';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  console.log("TabPanelレンダー");
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
  console.log("a11yPropsレンダー");
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

export default function SimpleTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log("SimpleTabsレンダー");
  return (
    <div className={classes.root}  style={{marginTop:"40px"}}>
      <AppBar position="static" color="default">
        <Tabs indicatorColor="primary" textColor="primary" value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs example" >
          {props.level.map((row, index) => (
            <Tab key={index} label={row[1]} {...a11yProps(index)} />
          ))}
        </Tabs>
      </AppBar>
        {props.level.map((row, index) => (
          <TabPanel key={index} value={value} index={index}>
            <EachLevelInfo key={index} id={row[0]} level={row[1]}/>
          </TabPanel>
        ))}
    </div>
  );
}