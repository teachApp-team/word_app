import React from 'react';
import {Typography, Button, CardContent, CardMedia, Card, CardActionArea,CardActions} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { useRouter } from 'next/router';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
              image="../static/texts/text.jpg"
              title="Contemplative Reptile"
            />
            {props.l.loading ? (
              <div>
                <Typography gutterBottom variant="h6" component="h5">
                  <Skeleton  animation="wave"/>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <Skeleton  animation="wave"/>
                </Typography>
              </div>
            ):(
              <div>
                <div style={{height:"80px", padding:"auto"}}>
                  <Typography gutterBottom variant="h6" component="h5">
                    {props.bookName}
                  </Typography>
                </div>
                <Accordion style={{width:"100%"}}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{width:"100%"}}
                  >
                    <Typography variant="body2" color="textSecondary" component="p">
                      詳細情報
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div style={{fontSize: "12px"}}>
                      {props.bookDescription}
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            )}
          </CardContent>
        </CardActionArea>
        <CardActions className="display-center">
          <Button onClick={clickButton} style={{margin:"auto"}} size="small" color="primary">学習する</Button>
        </CardActions>
      </Card>
  );
}