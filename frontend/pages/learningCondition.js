import {Container, Box} from '@material-ui/core';
import Tab from '../components/Tab';
import Header from '../components/Layout/Header';
import Link from 'next/link';
import WeekCondition from '../components/learningCondition/WeekCondition';
import EachData from '../components/learningCondition/EachData';
import TextData from '../components/learningCondition/TextData';

export default function Index() {
  return (
    <Container disableGutters={true}>
      <Header/>
      <WeekCondition/>
      <EachData/>
      <TextData text={"システム英単語"}/>
      <TextData text={"ターゲット1900"}/>
      <Link href="/textSelection">
        <a>Go to textSelection page</a>
      </Link>
      <br></br>
      <Link href="/textInfo">
        <a>Go to textInfo page</a>
      </Link>
      <br></br>
      <Link href="/test">
        <a>Go to test page</a>
      </Link>
    </Container>
  );
}