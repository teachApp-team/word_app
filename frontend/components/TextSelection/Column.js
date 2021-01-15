import React from 'react';
import {Typography, Button, CardContent, CardMedia, Card, CardActionArea,CardActions} from '@material-ui/core';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Column(props) {
  const router = useRouter();    
  const clickButton = () => {
    router.push({
        pathname:"/columnInfo", 
        query: {id: String(props.id)}
      });
  }
  
  return( 
    <Card style={{display:"inline-block", maxWidth: "200px", flexShrink: 0, marginRight: "30px"}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h5">
            {props.columnName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.columnInfo}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="display-center">
        <Button onClick={clickButton} style={{margin: "auto"}}  size="small" color="primary">学習する</Button>
      </CardActions>
    </Card>
  );
}