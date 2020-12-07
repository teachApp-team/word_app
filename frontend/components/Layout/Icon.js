import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Grid, Badge,IconButton } from '@material-ui/core';

class Icon extends Component {
  constructor(props) {
    super();
    this.icon = props.icon;
    this.style = {
      fontSize: 20,
    }
  }
  render() {
    return(
      <Grid item xs={1} >
        <FontAwesomeIcon icon={this.icon} style={this.style} />
      </Grid>
    );
  }
}

export default Icon;