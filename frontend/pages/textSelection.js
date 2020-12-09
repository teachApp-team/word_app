import React from 'react';
import {Container, Box} from '@material-ui/core';
import Tab from '../components/Tab';
import Header from '../components/Layout/Header';
import LearningTexts from '../components/TextSelection/LearningTexts'
import Link from 'next/link'

export default function Index() {
  return (
    <Container disableGutters={true}>
      <Header/>
      <Container maxWidth='lg'>
        <h5>学習中の教材</h5>
        <LearningTexts />
        <h5>教材一覧</h5>
        <LearningTexts />
        <Link href="/">
          <a>Go to index page</a>
        </Link>
        <br></br>
        <Link href="/textInfo">
          <a>Go to textInfo page</a>
        </Link>
        <br></br>
        <Link href="/learningCondition">
          <a>Go to learningCondition page</a>
        </Link>
      </Container>
    </Container>
  );
}