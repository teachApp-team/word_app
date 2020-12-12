import React, {  useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Card, CardActionArea, CardContent, Typography, Container, Button, CardActions, List, ListItem, ListItemText} from '@material-ui/core';

export default function TextData(props) {
  const text = props.text;
  const pieData = {
    labels: ["正解", "未習得", "不正解"],
      datasets: [{
        backgroundColor: [
          "rgba(255, 0, 0, 0.8)",
          "rgba(0, 0, 255, 0.8)",
          "grey",
        ],
        data: [38, 31, 21]
      }]
  }

  const pieOption = {
    title: {
      display: true,
      text: text
    }
  }
  const [pierechart, setPierechart] = useState( pieData );
  const [pieoption, setPieoption] = useState( pieOption );
  return(
    <div style={{maxWidth: "600px", margin: "20px auto"}}>
      <Pie data={pierechart} options={pieoption}  />
    </div>
  );
}