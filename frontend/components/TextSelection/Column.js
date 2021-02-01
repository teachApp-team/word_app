import React from 'react';
import {Typography, Button, CardContent, CardMedia, Card, CardActionArea,CardActions} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { useRouter } from 'next/router';

export default function Column(props) {
  const router = useRouter();    
  const clickButton = () => {
    router.push({
        pathname:"/columnInfo", 
        query: {id: String(props.id)}
      });
  }
  console.log(props.l.loading)
  
  return( 
    <Card style={{display:"inline-block", maxWidth: "200px", flexShrink: 0, marginRight: "30px"}}>
      <CardActionArea>
        <CardContent>
          {props.l.loading ? (
            <Typography gutterBottom variant="h6" component="h5">
              <Skeleton  animation="wave"/>
            </Typography>
          ):(
            <Typography gutterBottom variant="h6" component="h5">
              {props.columnName}
            </Typography>
          )}
          {props.l.loading ? (
            <Typography variant="body2" color="textSecondary" component="p">
              <Skeleton  animation="wave"/>
            </Typography>
          ):(
            <Typography variant="body2" color="textSecondary" component="p">
              {props.columnInfo}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
      <CardActions className="display-center">
        <Button onClick={clickButton} style={{margin: "auto"}}  size="small" color="primary">学習する</Button>
      </CardActions>
    </Card>
  );
}