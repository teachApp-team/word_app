import React, {  useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Card, CardActionArea, CardContent, Typography, Container, Button, CardActions, List, ListItem, ListItemText} from '@material-ui/core';


export default function WeekCondition() {
  const reXaxis = [['2019年', '1月1日'],
    ['2019年', '1月2日'],
    ['2019年', '1月3日'],
    ['2019年', '1月4日'],
    ['2019年', '1月5日'],
    ['2019年', '1月6日'],
    ['2019年', '1月7日']
  ];
  const reYaxis = [
    {
      data: [40, 20, 100, 50, 30, 40, 10],
      backgroundColor: 'rgba(255, 0, 0, 0.8)',
      label: '正解数',
    },
    {
      data: [10, 30, 50, 30, 20, 40, 20],
      backgroundColor: 'rgba(0, 0, 255, 0.8)',
      label: '不正解数',
    }
  ];  
  const reOption = {
    title: {
      display: true,
      text: '今週の学習状況'
    },
    scales: {
      yAxes: [{
        ticks: {
          suggestedMin: 0,
        }
      }]
    },
    responsive: true,
    maintainAspectRatio: false
  };
  const [rechart, setRechart] = useState({labels: reXaxis, datasets: reYaxis});
  const [baroption, setBaroption] = useState( reOption );

  return(
    <div style={{margin: "20px auto", minHeight: "350px", maxWidth: "700px"}}>
      <Bar data={rechart} options={baroption} />
    </div>
  );
}  