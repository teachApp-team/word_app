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
        <h3>学習中の教材</h3>
        <LearningTexts />
        <h3>教材一覧</h3>
        <LearningTexts />
        <Link href="/">
          <a>Go to index page</a>
        </Link>
      </Container>
    </Container>
  );
}