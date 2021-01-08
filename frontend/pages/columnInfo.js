import React from 'react';
import {Typography, Button, CardContent, CardMedia, Card, CardActionArea,CardActions,Container, makeStyles} from '@material-ui/core';
import Tab from '../components/Tab';
import Header from '../components/Layout/Header';
import LearningTexts from '../components/TextSelection/LearningTexts'
import ColumnContent from '../components/TextSelection/ColumnContent'
import Link from 'next/link'
import style from '../static/Style/ColumnStyle';

const headTitle = ["接頭辞・接尾辞その１"]
const title1 = ["超基本接頭辞"]
const subtitle1 = [
  "接頭語「in-」= not（否定）",
  "接頭語「un-」= not（〜ではない）",
  "接頭語「dis-」= away（離れて）",
  "接頭語「pre-」= before（前に）",
  "接頭語「ex-」= out（外に）"
]
const content1 = [
  "接頭語の「in-」は、「否定（not）」の意味を表す。「incapable」は、「in-」に、「つかむ（take）」を意味する語根である「cap」と、「〜できる（able）」を意味する形容詞接尾語である「-able」が結合して「つかむことができない → 能力がない」という意味になった。",
  "接頭語の「un-」は、「〜ではない（not）」の意味を表す。「untouchable」は、「un-」に、「触れる」を意味する単語である「touch」と、「able（〜できる）」を意味する形容詞接尾語である「-able」が結合して「触れることができない → 触れてはならない」という意味になった。",
  "接頭語の「dis-」は、「離れて（away）」という意味を表す。「distant」は、「dis-」に、「立つ（stand）」を意味する語根である「sta」と、形容詞接尾語で「〜な」を意味する「ant」が結合して「離れて立つような → 離れた」という意味になった。",
  "接頭語の「pre-」は、「前に（before）」の意味を表す。「predict」は、「pre-」に、「言う（say）」を意味する語根である「dict」が結合して「前もって言う → 予測する」という意味になった。",
  "接頭語の「ex-」は、「外に（out）」という意味を表す。「exclude」は、「ex-」に、「閉じる（shut）」を意味する語根である「clude」が結合して「外に出して閉じる → 〜を除く」という意味になった。"
]
const title2 = ["超基本接尾辞"]
const subtitle2 = [
  "接尾語「-ful」= full（〜に満ちた）",
  "接尾語「-able」= able（〜できる）",
  "接頭語「-ist」= 人",
  "接頭語「-ology」= 学問",
  "接頭語「ex-」= out（外に）"
]
const content2 = [
  "接尾語の「-ful」は、「〜に満ちた（full）」という意味を表す。「careful」は、「care（注意）」を意味する単語に「-ful」が結合して「注意に満ちた → 注意深い」という意味になった。",
  "接尾語の「-able」は、「〜できる（able）」という意味を表す。「capable」は、「つかむ（take）」を意味する語根である「cap」に「-able」が結合して「つかむことができる → 能力がある」という意味になった。",
  "接尾語の「-ist」は、「人」の意味を表す。「specialist」は、「特別な（especial）」を意味する語根である「special」と、「人」を意味する「-ist」が結合して「専門家」という意味になった。",
  "接尾語の「-ology」は、「学問」の意味を表す。「psychology」は、「心（psycho）」を意味する語根である「psycho」と、「学問」を意味する「-ology」が結合して「心理学」という意味になった。",
]


export default function columnInfo() {

  return (
    <Container style={{padding: "2rem"}} maxWidth='lg'>
      {style}
      <div>
        <Typography className="headTitle" gutterBottom variant="h4" component="h4">
            {headTitle}
        </Typography>
      </div>
      <div>
        <div>
          <Typography className="subTitle" gutterBottom variant="h5" component="h5">
            {title1[0]}
          </Typography>
        </div>
        <div className="columnContent" >
          <ColumnContent subtitle={subtitle1[0]} content={content1[0]}/>
          <ColumnContent subtitle={subtitle1[1]} content={content1[1]}/>
          <ColumnContent subtitle={subtitle1[2]} content={content1[2]}/>
          <ColumnContent subtitle={subtitle1[3]} content={content1[3]}/>
          <ColumnContent subtitle={subtitle1[4]} content={content1[4]}/>
        </div>
      </div>
      <div>
        <div>
          <Typography className="subTitle" gutterBottom variant="h5" component="h5">
            {title2[0]}
          </Typography>
        </div>
        <div className="columnContent" >
          <ColumnContent subtitle={subtitle2[0]} content={content2[0]}/>
          <ColumnContent subtitle={subtitle2[1]} content={content2[1]}/>
          <ColumnContent subtitle={subtitle2[2]} content={content2[2]}/>
          <ColumnContent subtitle={subtitle2[3]} content={content2[3]}/>
        </div>
      </div>
    </Container>
  )}