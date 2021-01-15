import React from 'react';
import {Typography, Button, CardContent, CardMedia, Card, CardActionArea,CardActions} from '@material-ui/core';
import style from '../../static/Style/ColumnStyle';


export default function ColumnContent(props) {
  return (
    <div>
      {style}
      <div className="columnContentSubtitle">
        <Typography className="subTitle" gutterBottom variant="h6" component="h6">
          {props.subtitle}
        </Typography>
      </div>
      <div className="columnContentContent">
        <Typography gutterBottom variant="p" component="p">
          {props.content}
        </Typography>
      </div>
    </div>
  )}