import React from 'react';
import {Typography, Button, CardContent, CardMedia, Card, CardActionArea,CardActions} from '@material-ui/core';
import StudentCard from '../selectStudent/StudentCard'

export default function StudentsCardWrapper() {
  return(
    <div style={{overflowX:"auto", width:"100%", display: "flex", overflowScrolling: "touch", padding:"10px" }}>
      < StudentCard />
      < StudentCard />
      < StudentCard />
    </div>
  );
}

