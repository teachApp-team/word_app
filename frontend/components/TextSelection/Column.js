import React from 'react';
import {Typography, Button, CardContent, CardMedia, Card, CardActionArea,CardActions} from '@material-ui/core';
import Link from 'next/link';

export default function Column() {
  return(
    <div style={{overflowX:"auto", width:"100%", display: "flex", overflowScrolling: "touch", padding:"10px" }}>
      <Card style={{display:"inline-block", maxWidth: "200px", flexShrink: 0, marginRight: "30px"}}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h5">
              接頭辞・接尾辞その１
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              まずは覚えておきたい基本的な接頭辞・接尾辞
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="display-center">
          <Link href='/columnInfo' >
            <Button style={{margin: "auto"}}  size="small" color="primary">学習する</Button>
          </Link>
        </CardActions>
      </Card>
      <Card style={{display:"inline-block", maxWidth: "200px", flexShrink: 0}}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h5">
              接頭辞・接尾辞その2
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              知っておいて損のない接頭辞・接尾辞
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="display-center">
          <Link href='/columnInfo' >
            <Button style={{margin: "auto"}}  size="small" color="primary">学習する</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}