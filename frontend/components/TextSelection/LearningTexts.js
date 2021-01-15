import React from 'react';
import {Typography, Button, CardContent, CardMedia, Card, CardActionArea,CardActions} from '@material-ui/core';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function LearningTexts(props) {
  const router = useRouter();    
  const clickButton = () => {
    router.push({
        pathname:"/textInfo", 
        query: {id: String(props.id)}
      });
  }

  return(
      <Card style={{display:"inline-block", maxWidth: "200px", flexShrink: 0, marginRight: "30px"}}>
        <CardActionArea>
          <CardContent>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="/static/texts/text1.jpg"
              title="Contemplative Reptile"
            />
            <Typography gutterBottom variant="h6" component="h5">
              {props.bookName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.bookDescription}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="display-center">
          <Button onClick={clickButton} style={{margin: "auto"}}  size="small" color="primary">学習する</Button>
        </CardActions>
      </Card>
     
  );
}